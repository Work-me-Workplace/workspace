'use client';

import { useState } from 'react';
import LibraryItem from '../../components/LibraryItem';
import { companySourceLibrary, LibraryItem as LibraryItemType } from '../../lib/fakeData';
import { Plus } from 'lucide-react';

export default function LibraryPage() {
  const [libraryItems, setLibraryItems] = useState<LibraryItemType[]>(companySourceLibrary);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemLabel, setNewItemLabel] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleEdit = (id: string, newLabel: string) => {
    setLibraryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, label: newLabel } : item))
    );
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setLibraryItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleAdd = () => {
    if (newItemLabel.trim()) {
      const newItem: LibraryItemType = {
        id: `c${Date.now()}`,
        label: newItemLabel.trim(),
        description: newItemDescription.trim() || undefined,
        type: 'custom',
      };
      setLibraryItems([...libraryItems, newItem]);
      setNewItemLabel('');
      setNewItemDescription('');
      setShowAddForm(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Company Source Library</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Item
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Add New Library Item</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Label
              </label>
              <input
                type="text"
                value={newItemLabel}
                onChange={(e) => setNewItemLabel(e.target.value)}
                placeholder="Enter item label..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (optional)
              </label>
              <textarea
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                placeholder="Enter description..."
                rows={3}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleAdd}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Item
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewItemLabel('');
                  setNewItemDescription('');
                }}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {libraryItems.map((item) => (
          <LibraryItem
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {libraryItems.length === 0 && (
        <div className="text-center py-12 bg-white border rounded-lg">
          <p className="text-gray-500">No library items yet. Add your first item above.</p>
        </div>
      )}
    </div>
  );
}

