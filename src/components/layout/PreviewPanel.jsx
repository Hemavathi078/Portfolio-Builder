import { Download, Image as ImageIcon, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import PortfolioPreview from '../preview/PortfolioPreview';
import ResumePreview from '../preview/ResumePreview';
import Button from '../common/Button';
import { exportToPDF } from '../../utils/exportPdf';
import { useAppContext } from '../../context/AppContext';

const PreviewPanel = ({ previewMode }) => {
  const { state } = useAppContext();
  const { personal = {} } = state.userData || {};
  const { referenceResume = null } = state.settings || {};
  const [showPreview, setShowPreview] = useState(true);
  const [scale, setScale] = useState(0.5);
  const containerRef = useRef(null);

  // Calculate scale to fit preview in container
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight - 20;
        const containerWidth = containerRef.current.clientWidth - 20;
        // A4 dimensions: 210mm x 297mm (approx 794px x 1123px at 96dpi)
        const previewHeight = 1123;
        const previewWidth = 794;
        
        const scaleH = containerHeight / previewHeight;
        const scaleW = containerWidth / previewWidth;
        const newScale = Math.min(scaleH, scaleW, 0.85);
        setScale(Math.max(newScale, 0.4));
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [showPreview]);

  const handleExport = async () => {
    const elementId = previewMode === 'resume' ? 'resume-preview' : 'portfolio-preview';
    const filename = previewMode === 'resume' 
      ? `${personal.fullName || 'Resume'}_Resume.pdf`
      : `${personal.fullName || 'Portfolio'}_Portfolio.pdf`;
    
    await exportToPDF(elementId, filename);
  };

  const showReference = referenceResume && previewMode === 'resume';

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex-shrink-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-base font-bold text-gray-800 dark:text-white">
              {showReference ? 'Reference' : previewMode === 'portfolio' ? 'Portfolio' : 'Resume'} Preview
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Scale: {Math.round(scale * 100)}%
            </p>
          </div>
          {!showReference && (
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
              >
                {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
                {showPreview ? 'Hide' : 'Show'}
              </button>
              <Button onClick={handleExport} variant="primary" className="flex-1 sm:flex-none text-sm py-1.5">
                <Download className="inline mr-1" size={16} />
                Export PDF
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Preview Container */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto p-3"
        style={{ backgroundColor: '#e5e7eb' }}
      >
        <div className="flex justify-center">
          {showReference ? (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-3 bg-gradient-to-r from-blue-900 to-cyan-600 text-white text-sm">
                <div className="flex items-center gap-2">
                  <ImageIcon size={16} />
                  <span className="font-medium">{referenceResume.name}</span>
                </div>
              </div>
              <div className="p-2">
                {referenceResume.type === 'application/pdf' ? (
                  <iframe
                    src={referenceResume.data}
                    className="w-full h-[500px] border-0"
                    title="Reference Resume"
                  />
                ) : (
                  <img
                    src={referenceResume.data}
                    alt="Reference Resume"
                    className="max-h-[500px] w-auto"
                  />
                )}
              </div>
            </div>
          ) : showPreview ? (
            <div 
              className="bg-white shadow-xl"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                width: '794px',
                minHeight: '1123px',
                marginBottom: `${(1 - scale) * -500}px`,
              }}
            >
              {previewMode === 'portfolio' ? <PortfolioPreview /> : <ResumePreview />}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 text-center max-w-sm mt-20">
              <div className="text-5xl mb-3">👁️</div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Preview Hidden
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Click "Show" to see your {previewMode}
              </p>
              <button
                onClick={() => setShowPreview(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
              >
                <Eye className="inline mr-1" size={16} />
                Show Preview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
