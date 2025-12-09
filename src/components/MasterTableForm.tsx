'use client';

import React, { useState } from 'react';
import { Column, TableRow } from '@/types/master';

interface MasterTableFormProps {
  columns: Column[];
  onSubmit: (data: TableRow) => void;
  onCancel: () => void;
  editingRow?: TableRow;
  selectOptions?: { [key: string]: { value: string; label: string }[] };
}

export const MasterTableForm: React.FC<MasterTableFormProps> = ({
  columns,
  onSubmit,
  onCancel,
  editingRow,
  selectOptions = {},
}) => {
  const [formData, setFormData] = useState<TableRow>(editingRow || {});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
    if (errors[key]) {
      setErrors({ ...errors, [key]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    columns.forEach((col) => {
      if (col.required && !formData[col.key]) {
        newErrors[col.key] = `${col.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto">
      {columns.map((col) => (
        <div key={col.key} className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            {col.label}
            {col.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {col.type === 'select' ? (
            <select
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            >
              <option value="">Select {col.label}</option>
              {(col.options || selectOptions[col.key] || []).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : col.type === 'textarea' ? (
            <textarea
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              placeholder={col.placeholder}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            />
          ) : col.type === 'date' ? (
            <input
              type="date"
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            />
          ) : col.type === 'email' ? (
            <input
              type="email"
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              placeholder={col.placeholder}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            />
          ) : col.type === 'phone' ? (
            <input
              type="tel"
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              placeholder={col.placeholder}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            />
          ) : col.type === 'number' ? (
            <input
              type="number"
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              placeholder={col.placeholder}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            />
          ) : (
            <input
              type="text"
              value={formData[col.key] || ''}
              onChange={(e) => handleChange(col.key, e.target.value)}
              placeholder={col.placeholder}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
                errors[col.key]
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white'
              }`}
            />
          )}

          {errors[col.key] && (
            <p className="text-red-500 text-xs mt-1">{errors[col.key]}</p>
          )}
        </div>
      ))}

      <div className="flex gap-3 justify-end pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
