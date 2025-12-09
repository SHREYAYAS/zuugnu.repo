'use client';

import React, { useState } from 'react';
import { MASTER_TABLES_LIST, MasterTable, TableRow } from '@/types/master';
import { MasterTableDisplay } from './MasterTableDisplay';

interface MasterTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterTableModal: React.FC<MasterTableModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
  const [tableData, setTableData] = useState<{ [key: string]: TableRow[] }>({});

  const selectedTable = MASTER_TABLES_LIST.find(
    (t) => t.id === selectedTableId
  );

  const handleTableSelect = (tableId: string) => {
    setSelectedTableId(tableId);
    if (!tableData[tableId]) {
      setTableData((prev) => ({ ...prev, [tableId]: [] }));
    }
  };

  const handleAddRow = (row: TableRow) => {
    if (selectedTableId) {
      const newRow = {
        ...row,
        id: Math.max(
          0,
          ...(tableData[selectedTableId]?.map((r) => r.id || 0) || [0])
        ) + 1,
      };
      setTableData((prev) => ({
        ...prev,
        [selectedTableId]: [...(prev[selectedTableId] || []), newRow],
      }));
      // Here you would typically send data to backend
      console.log('Added row:', newRow);
    }
  };

  const handleEditRow = (row: TableRow) => {
    if (selectedTableId) {
      setTableData((prev) => ({
        ...prev,
        [selectedTableId]: (prev[selectedTableId] || []).map((r) =>
          r.id === row.id ? row : r
        ),
      }));
      console.log('Edited row:', row);
    }
  };

  const handleDeleteRow = (id: number) => {
    if (selectedTableId) {
      setTableData((prev) => ({
        ...prev,
        [selectedTableId]: (prev[selectedTableId] || []).filter(
          (r) => r.id !== id
        ),
      }));
      console.log('Deleted row:', id);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
          <h1 className="text-2xl font-bold text-gray-800">Master Data Management</h1>
          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:text-gray-800 transition"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Table List */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <div className="p-4 sticky top-0 bg-white border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">📋 Tables</h2>
            </div>
            <div className="space-y-1 p-2">
              {MASTER_TABLES_LIST.map((table) => (
                <button
                  key={table.id}
                  onClick={() => handleTableSelect(table.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition font-medium flex items-center gap-2 ${
                    selectedTableId === table.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">{table.icon}</span>
                  <span className="truncate">{table.displayName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-white">
            {selectedTable && selectedTableId ? (
              <MasterTableDisplay
                table={selectedTable}
                data={tableData[selectedTableId] || []}
                onAdd={handleAddRow}
                onEdit={handleEditRow}
                onDelete={handleDeleteRow}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <div className="text-6xl mb-4">👈</div>
                <p className="text-xl font-semibold">
                  Select a table from the list to get started
                </p>
                <p className="text-sm mt-2">
                  Total {MASTER_TABLES_LIST.length} master tables available
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
