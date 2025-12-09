'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MasterTableDisplay } from '@/components/MasterTableDisplay';
import { MasterTable } from '@/types/master';

interface MasterTableDetailContentProps {
  table: MasterTable;
}

export default function MasterTableDetailContent({ table }: MasterTableDetailContentProps) {
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data from localStorage
    const storedData = localStorage.getItem(`master_table_${table.name}`);
    setTableData(storedData ? JSON.parse(storedData) : []);
    setLoading(false);
  }, [table]);

  const handleAdd = (row: any) => {
    const newData = [...tableData, { ...row, id: Date.now() }];
    setTableData(newData);
    localStorage.setItem(`master_table_${table.name}`, JSON.stringify(newData));
  };

  const handleEdit = (row: any) => {
    const newData = tableData.map((r) => (r.id === row.id ? row : r));
    setTableData(newData);
    localStorage.setItem(`master_table_${table.name}`, JSON.stringify(newData));
  };

  const handleDelete = (id: number) => {
    const newData = tableData.filter((r) => r.id !== id);
    setTableData(newData);
    localStorage.setItem(`master_table_${table.name}`, JSON.stringify(newData));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
        <div className="max-w-full mx-auto px-6 py-6">
          <Link
            href="/master-tables"
            className="text-sm text-indigo-600 hover:text-indigo-700 mb-4 inline-block font-medium"
          >
            ← Back to Master Tables
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{table.icon}</span>
            <div>
              <h1 className="text-3xl font-light text-gray-900">{table.displayName}</h1>
              <p className="text-sm text-gray-500 mt-1">Table: {table.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Flexgrow to fill remaining space */}
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-show">
        <div className="max-w-full mx-auto px-6 py-8">
          <MasterTableDisplay
            table={table}
            data={tableData}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <style>{`
        .scrollbar-show {
          scrollbar-width: auto;
          scrollbar-color: #6366f1 #f3f4f6;
        }
        .scrollbar-show::-webkit-scrollbar {
          width: 12px;
        }
        .scrollbar-show::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .scrollbar-show::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 6px;
        }
        .scrollbar-show::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }
      `}</style>
    </div>
  );
}
