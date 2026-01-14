import { Check, Eye } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import Card from '../common/Card';
import { motion } from 'framer-motion';

const TemplateSelector = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { resumeTemplate = 'ats' } = state.theme;

  const templates = [
    {
      id: 'ats',
      name: 'ATS-Friendly',
      description: 'Clean & simple, optimized for Applicant Tracking Systems',
      icon: '📄',
      features: ['Single column', 'Standard headings', 'ATS-optimized'],
      preview: '/templates/ats-preview.png',
    },
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Minimal & stylish with subtle design elements',
      icon: '✨',
      features: ['Two-tone design', 'Modern layout', 'Professional'],
      preview: '/templates/modern-preview.png',
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Stand out with bold colors and unique layout',
      icon: '🎨',
      features: ['Colorful accents', 'Creative layout', 'Eye-catching'],
      preview: '/templates/creative-preview.png',
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Ultra-clean with maximum white space',
      icon: '⚪',
      features: ['Minimalist', 'Lots of space', 'Clean typography'],
      preview: '/templates/minimal-preview.png',
    },
    {
      id: 'executive',
      name: 'Executive',
      description: 'Professional template for senior positions',
      icon: '💼',
      features: ['Sophisticated', 'Leadership focus', 'Premium look'],
      preview: '/templates/executive-preview.png',
    },
    {
      id: 'developer',
      name: 'Developer',
      description: 'Tech-focused with project highlights',
      icon: '💻',
      features: ['Tech-oriented', 'Project showcase', 'Skills emphasis'],
      preview: '/templates/developer-preview.png',
    },
  ];

  const selectTemplate = (templateId) => {
    dispatch({
      type: actionTypes.SET_THEME,
      payload: { resumeTemplate: templateId },
    });
  };

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Choose Resume Template
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select a template that matches your style and career level
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg p-4 mb-6">
        <p>
          <strong>💡 Smart Tip:</strong> Your resume will automatically adapt to the selected template while keeping all your information intact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => selectTemplate(template.id)}
            className={`relative cursor-pointer rounded-xl p-4 sm:p-5 border-2 transition-all ${
              resumeTemplate === template.id
                ? 'border-cyan-600 bg-cyan-50 dark:bg-cyan-900/20 shadow-lg'
                : 'border-gray-200 dark:border-gray-700 hover:border-cyan-400 bg-white dark:bg-gray-800'
            }`}
          >
            {/* Selected Badge */}
            {resumeTemplate === template.id && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center">
                <Check className="text-white" size={14} />
              </div>
            )}

            {/* Template Icon */}
            <div className="text-4xl mb-3">{template.icon}</div>

            {/* Template Info */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {template.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {template.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-3">
              {template.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Preview Info */}
            <div className="text-sm text-cyan-600 flex items-center gap-1 font-medium">
              <Eye size={14} />
              <span>Live preview on right →</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current Selection */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Current Template:</strong>{' '}
          {templates.find((t) => t.id === resumeTemplate)?.name || 'ATS-Friendly'}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Your resume preview will update automatically
        </p>
      </div>
    </Card>
  );
};

export default TemplateSelector;
