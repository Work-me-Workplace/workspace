'use client';

import { useState } from 'react';
import { LibraryItem as LibraryItemType } from '../lib/fakeData';
import { Edit2, Trash2, X, Check } from 'lucide-react';

interface LibraryItemProps {
  item: LibraryItemType;
  onEdit?: (id: string, newLabel: string) => void;
  onDelete?: (id: string) => void;
}

export default function LibraryItem({ item, onEdit, onDelete }: LibraryItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.label);

  const handleSave = () => {
    if (onEdit && editValue.trim()) {
      onEdit(item.id, editValue.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(item.label);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="p-2 text-green-600 hover:bg-green-50 rounded"
            aria-label="Save"
          >
            <Check size={18} />
          </button>
          <button
            onClick={handleCancel}
            className="p-2 text-gray-600 hover:bg-gray-50 rounded"
            aria-label="Cancel"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
            {item.type && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {item.type}
              </span>
            )}
            {item.description && (
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            )}
          </div>
          <div className="flex gap-2 ml-4">
            {onEdit && (
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                aria-label="Edit"
              >
                <Edit2 size={18} />
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
                aria-label="Delete"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

