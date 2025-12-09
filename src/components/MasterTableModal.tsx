'use client';

import React, { useState, useMemo } from 'react';
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
  const [tableData, setTableData] = useState<{ [key: string]: TableRow[] }>({
    // Add sample data for testing
    mast_country: [
      { id: 1, name: 'India', code: 'IN', region: 'Asia' },
      { id: 2, name: 'United States', code: 'US', region: 'North America' },
      { id: 3, name: 'United Kingdom', code: 'UK', region: 'Europe' },
      { id: 4, name: 'Canada', code: 'CA', region: 'North America' },
      { id: 5, name: 'Australia', code: 'AU', region: 'Oceania' },
      { id: 6, name: 'Japan', code: 'JP', region: 'Asia' },
      { id: 7, name: 'Germany', code: 'DE', region: 'Europe' },
      { id: 8, name: 'France', code: 'FR', region: 'Europe' },
      { id: 9, name: 'Brazil', code: 'BR', region: 'South America' },
      { id: 10, name: 'Mexico', code: 'MX', region: 'North America' },
      { id: 11, name: 'Singapore', code: 'SG', region: 'Asia' },
      { id: 12, name: 'South Korea', code: 'KR', region: 'Asia' },
    ],
  });

  const selectedTable = MASTER_TABLES_LIST.find(
    (t) => t.id === selectedTableId
  );

  // Group tables by category
  const tablesByCategory = useMemo(() => {
    const grouped: { [key: string]: MasterTable[] } = {};
    MASTER_TABLES_LIST.forEach((table) => {
      const category = (table as any).category || 'Other';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(table);
    });
    return grouped;
  }, []);

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
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-hidden">
      <div className="bg-white w-full flex-1 flex flex-col min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-white sticky top-0 z-40">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">📊</span>
              Master Tables
            </h1>
            <p className="text-gray-500 text-sm mt-1">Centralized data management</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600 transition p-2"
          >
            ✕
          </button>
        </div>

        {selectedTable && selectedTableId ? (
          // Table Detail View
          <div className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
            <button
              onClick={() => setSelectedTableId(null)}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6 font-medium text-sm"
            >
              ← Back to Master Tables
            </button>
            <MasterTableDisplay
              table={selectedTable}
              data={tableData[selectedTableId] || []}
              onAdd={handleAddRow}
              onEdit={handleEditRow}
              onDelete={handleDeleteRow}
            />
          </div>
        ) : (
          // Grid View
          <div className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
            {Object.entries(tablesByCategory).map(([category, tables]) => (
              <div key={category} className="mb-12">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">{category}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                  {tables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() => handleTableSelect(table.id)}
                      className="flex flex-col items-center p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md hover:bg-gray-50 transition-all group"
                    >
                      <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">
                        {table.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm text-center">
                        {table.displayName.split('>')[1]?.trim() || table.displayName}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 text-center truncate w-full">
                        {table.id}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Stats */}
        <div className="border-t border-gray-100 p-6 bg-gray-50 flex items-center justify-between">
          <div className="flex gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-900">{MASTER_TABLES_LIST.length}</p>
              <p className="text-sm text-gray-600">Tables</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{Object.keys(tablesByCategory).length}</p>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
