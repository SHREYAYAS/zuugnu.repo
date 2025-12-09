'use client';

import React, { useState, useMemo } from 'react';
import { MasterTable, TableRow } from '@/types/master';
import { MasterTableForm } from './MasterTableForm';

interface MasterTableDisplayProps {
  table: MasterTable;
  data: TableRow[];
  onAdd: (row: TableRow) => void;
  onEdit: (row: TableRow) => void;
  onDelete: (id: number) => void;
}

export const MasterTableDisplay: React.FC<MasterTableDisplayProps> = ({
  table,
  data,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingRow, setEditingRow] = useState<TableRow | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Build select options from data
  const getSelectOptions = (fieldKey: string) => {
    const uniqueValues = Array.from(
      new Set(data.map((row) => row[fieldKey]).filter(Boolean))
    );
    return uniqueValues.map((val) => ({
      value: String(val),
      label: String(val),
    }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const handleSubmit = (row: TableRow) => {
    if (editingRow) {
      onEdit(row);
    } else {
      onAdd(row);
    }
    setShowForm(false);
    setEditingRow(undefined);
  };

  const handleEdit = (row: TableRow) => {
    setEditingRow(row);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingRow(undefined);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this record?')) {
      onDelete(id);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          {table.displayName}
        </h2>
        <button
          onClick={() => {
            setEditingRow(undefined);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <span>➕</span> Add Data
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">
            {editingRow ? 'Edit Record' : 'Add New Record'}
          </h3>
          <MasterTableForm
            columns={table.columns}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            editingRow={editingRow}
            selectOptions={Object.fromEntries(
              table.columns
                .filter((col) => col.type === 'select' && !col.options)
                .map((col) => [col.key, getSelectOptions(col.key)])
            )}
          />
        </div>
      )}

      {/* Search and Controls */}
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="🔍 Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
        <span className="text-sm text-gray-600">
          {filteredData.length} Records
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow scrollbar-show">
        <style>{`
          .scrollbar-show {
            scrollbar-width: thin;
            scrollbar-color: #6366f1 #f3f4f6;
          }
          .scrollbar-show::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-show::-webkit-scrollbar-track {
            background: #f3f4f6;
          }
          .scrollbar-show::-webkit-scrollbar-thumb {
            background: #6366f1;
            border-radius: 4px;
          }
          .scrollbar-show::-webkit-scrollbar-thumb:hover {
            background: #4f46e5;
          }
        `}</style>
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
                Action
              </th>
              {table.columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <tr
                  key={row.id || idx}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(row)}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(row.id || 0)}
                        className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                  {table.columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-gray-700 whitespace-nowrap">
                      {String(row[col.key] || '-').substring(0, 50)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={table.columns.length + 1}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  No records found. Click "Add Data" to create your first record.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
        <span className="text-sm text-gray-600">
          {filteredData.length > 0
            ? `${(currentPage - 1) * itemsPerPage + 1} to ${Math.min(
                currentPage * itemsPerPage,
                filteredData.length
              )} of ${filteredData.length}`
            : 'No data'}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 transition"
          >
            ◀ Previous
          </button>
          <span className="px-3 py-1 text-sm font-medium">
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 transition"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};
