import { useState } from 'react';
import { Upload, X, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import Button from '../common/Button';
import Card from '../common/Card';

const ReferenceUpload = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { referenceResume = null } = state.settings || {};
  const [showReference, setShowReference] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError('');

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size too large. Please upload a file smaller than 5MB.');
      return;
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      setError('Invalid file type. Please upload an image (JPG, PNG) or PDF.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch({
        type: actionTypes.SET_SETTINGS,
        payload: {
          referenceResume: {
            data: reader.result,
            name: file.name,
            type: file.type,
          },
        },
      });
    };
    reader.readAsDataURL(file);
  };

  const removeReference = () => {
    dispatch({
      type: actionTypes.SET_SETTINGS,
      payload: { referenceResume: null },
    });
    setShowReference(false);
  };

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Reference Resume Format
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Upload a sample resume format as a visual reference (optional)
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Note:</strong> This file is only used as a visual reference. It won't be parsed or analyzed.
          Use it to match layout and structure while building your resume.
        </p>
      </div>

      {!referenceResume ? (
        <div>
          <label className="block">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-all">
              <Upload className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                PNG, JPG or PDF (max 5MB)
              </p>
            </div>
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png,application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          {error && (
            <div className="mt-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                  <Upload className="text-green-600 dark:text-green-300" size={20} />
                </div>
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">
                    {referenceResume.name}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Reference uploaded successfully
                  </p>
                </div>
              </div>
              <Button onClick={removeReference} variant="danger" className="px-3 py-2">
                <X size={16} />
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setShowReference(!showReference)}
              variant="outline"
              className="flex-1"
            >
              {showReference ? (
                <>
                  <EyeOff className="inline mr-2" size={18} />
                  Hide Reference
                </>
              ) : (
                <>
                  <Eye className="inline mr-2" size={18} />
                  Show Reference
                </>
              )}
            </Button>
          </div>

          {showReference && (
            <div className="mt-4 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              {referenceResume.type === 'application/pdf' ? (
                <iframe
                  src={referenceResume.data}
                  className="w-full h-96"
                  title="Reference Resume"
                />
              ) : (
                <img
                  src={referenceResume.data}
                  alt="Reference Resume"
                  className="w-full h-auto"
                />
              )}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default ReferenceUpload;
