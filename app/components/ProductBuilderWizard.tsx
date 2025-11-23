'use client';

import { useState } from 'react';
import { companySourceLibrary, type LibraryItem } from '../lib/fakeData';
import { ChevronRight, ChevronLeft, Upload, Check } from 'lucide-react';

interface ProductBuilderWizardProps {
  onComplete?: (data: ProductBuilderData) => void;
}

interface ProductBuilderData {
  title: string;
  description: string;
  selectedLibraryItems: string[];
  attachments: string[];
}

const steps = [
  { id: 1, title: 'Product Title' },
  { id: 2, title: 'Description' },
  { id: 3, title: 'Source Library' },
  { id: 4, title: 'Attachments' },
  { id: 5, title: 'Preview' },
];

export default function ProductBuilderWizard({ onComplete }: ProductBuilderWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProductBuilderData>({
    title: '',
    description: '',
    selectedLibraryItems: [],
    attachments: [],
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleLibraryItem = (itemId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedLibraryItems: prev.selectedLibraryItems.includes(itemId)
        ? prev.selectedLibraryItems.filter((id) => id !== itemId)
        : [...prev.selectedLibraryItems, itemId],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map((file) => file.name);
      setUploadedFiles((prev) => [...prev, ...fileNames]);
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...fileNames],
      }));
    }
  };

  const handleSubmit = () => {
    if (onComplete) {
      onComplete(formData);
    } else {
      alert('Product submitted for review! (This is a mock action)');
    }
  };

  const selectedLibraryItems = companySourceLibrary.filter((item) =>
    formData.selectedLibraryItems.includes(item.id)
  );

  return (
    <div className="max-w-3xl mx-auto">
      {/* Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > step.id ? <Check size={20} /> : step.id}
                </div>
                <span className="mt-2 text-xs text-gray-600 text-center">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white border rounded-lg p-6 mb-6 min-h-[400px]">
        {currentStep === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Title</h3>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter product title..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Description</h3>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter product description..."
              rows={8}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select from Company Source Library</h3>
            <div className="space-y-3">
              {companySourceLibrary.map((item) => (
                <label
                  key={item.id}
                  className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedLibraryItems.includes(item.id)}
                    onChange={() => toggleLibraryItem(item.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.label}</div>
                    {item.description && (
                      <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {selectedLibraryItems.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900 mb-2">
                  Selected ({selectedLibraryItems.length}):
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedLibraryItems.map((item) => (
                    <span
                      key={item.id}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
              >
                Choose Files
              </label>
            </div>
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                <ul className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">{file}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="border rounded-lg p-6 bg-gray-50">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{formData.title || 'Untitled Product'}</h4>
                <p className="text-gray-700">{formData.description || 'No description provided.'}</p>
              </div>
              
              {selectedLibraryItems.length > 0 && (
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Source Library Items:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedLibraryItems.map((item) => (
                      <li key={item.id} className="text-sm text-gray-700">{item.label}</li>
                    ))}
                  </ul>
                </div>
              )}

              {uploadedFiles.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Attachments:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {uploadedFiles.map((file, index) => (
                      <li key={index} className="text-sm text-gray-700">{file}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft size={20} />
          Back
        </button>
        {currentStep < steps.length ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
            <ChevronRight size={20} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit for Review
          </button>
        )}
      </div>
    </div>
  );
}

