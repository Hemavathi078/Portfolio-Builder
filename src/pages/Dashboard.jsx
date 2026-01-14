import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Sidebar from '../components/layout/Sidebar';
import PreviewPanel from '../components/layout/PreviewPanel';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import EducationForm from '../components/forms/EducationForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import SkillsForm from '../components/forms/SkillsForm';
import ProjectsForm from '../components/forms/ProjectsForm';
import ThemeCustomizer from '../components/forms/ThemeCustomizer';
import SummaryGenerator from '../components/forms/SummaryGenerator';
import ReferenceUpload from '../components/forms/ReferenceUpload';
import TemplateSelector from '../components/forms/TemplateSelector';

const Dashboard = () => {
  const { mode } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [previewMode, setPreviewMode] = useState(mode === 'portfolio' ? 'portfolio' : 'resume');
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const { dispatch, actionTypes, state } = useAppContext();

  // Set builder mode based on URL
  useEffect(() => {
    if (mode) {
      dispatch({
        type: actionTypes.SET_SETTINGS,
        payload: { builderMode: mode },
      });
      setPreviewMode(mode);
    }
  }, [mode, dispatch, actionTypes]);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
      dispatch({ type: actionTypes.RESET_ALL });
      localStorage.removeItem('portfolioBuilderData');
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfoForm />;
      case 'summary':
        return <SummaryGenerator />;
      case 'education':
        return <EducationForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'skills':
        return <SkillsForm />;
      case 'projects':
        return <ProjectsForm />;
      case 'reference':
        return <ReferenceUpload />;
      case 'templates':
        return <TemplateSelector />;
      case 'theme':
        return <ThemeCustomizer />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className={`min-h-screen ${state.theme.darkMode ? 'dark' : ''}`}>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
            Portfolio Builder
          </h1>
          <button
            onClick={() => setShowMobilePreview(true)}
            className="px-3 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg text-sm flex items-center gap-2"
          >
            <Eye size={16} />
            Preview
          </button>
        </div>
      </div>

      {/* Mobile Preview Modal */}
      {showMobilePreview && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full h-full max-h-screen flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewMode('resume')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    previewMode === 'resume'
                      ? 'bg-gradient-to-r from-blue-900 to-cyan-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Resume
                </button>
                <button
                  onClick={() => setPreviewMode('portfolio')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    previewMode === 'portfolio'
                      ? 'bg-gradient-to-r from-blue-900 to-cyan-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Portfolio
                </button>
              </div>
              <button
                onClick={() => setShowMobilePreview(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <PreviewPanel previewMode={previewMode} />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            previewMode={previewMode}
            setPreviewMode={setPreviewMode}
            onReset={handleReset}
            onBackToHome={() => navigate('/')}
          />
        </div>

        {/* Mobile Tab Navigation */}
        <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2 px-3 py-3">
            {[
              { id: 'personal', label: 'Personal', icon: '👤' },
              { id: 'summary', label: 'Summary', icon: '✨' },
              { id: 'education', label: 'Education', icon: '🎓' },
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'skills', label: 'Skills', icon: '⚡' },
              { id: 'projects', label: 'Projects', icon: '📁' },
              { id: 'templates', label: 'Templates', icon: '📄' },
              { id: 'reference', label: 'Reference', icon: '📤' },
              { id: 'theme', label: 'Theme', icon: '🎨' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-900 to-cyan-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col lg:flex-row min-h-0">
          {/* Form Panel */}
          <div className="w-full lg:w-1/2 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`.overflow-y-auto::-webkit-scrollbar { display: none; }`}</style>
            <div className="max-w-4xl mx-auto">
              {renderForm()}
            </div>
          </div>
          
          {/* Preview Panel */}
          <div className="hidden lg:flex lg:w-1/2 border-l border-gray-200 dark:border-gray-700">
            <PreviewPanel previewMode={previewMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
