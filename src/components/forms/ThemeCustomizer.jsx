import { Palette, Moon, Sun, Eye, EyeOff } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { gradientPresets, fontFamilies } from '../../data/defaultData';
import Card from '../common/Card';
import Button from '../common/Button';

const ThemeCustomizer = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { theme, settings = {} } = state;
  const { builderMode = 'resume', visibleSections = {
    summary: true,
    skills: true,
    experience: true,
    education: true,
    projects: true,
  } } = settings;

  const updateTheme = (field, value) => {
    dispatch({
      type: actionTypes.SET_THEME,
      payload: { [field]: value },
    });
  };

  const toggleSection = (section) => {
    dispatch({
      type: actionTypes.SET_SETTINGS,
      payload: {
        visibleSections: {
          ...visibleSections,
          [section]: !visibleSections[section],
        },
      },
    });
  };

  const sections = [
    { id: 'summary', label: 'Professional Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center gap-2 mb-6">
          <Palette className="text-blue-500" size={20} />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Theme Customization</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
              Gradient Preset
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(gradientPresets).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => updateTheme('gradient', key)}
                  className={`p-3 sm:p-4 rounded-lg transition-all ${
                    theme.gradient === key
                      ? 'ring-4 ring-blue-500 scale-105'
                      : 'hover:scale-102'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${preset.from}, ${preset.to})`,
                  }}
                >
                  <span className="text-white font-medium text-xs sm:text-sm">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Font Family {builderMode === 'resume' && <span className="text-xs text-blue-600">(ATS-safe recommended)</span>}
            </label>
            <select
              value={theme.fontFamily}
              onChange={(e) => updateTheme('fontFamily', e.target.value)}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            >
              {fontFamilies.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label} {font.ats ? '✓ ATS-Safe' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Font Size (Resume)
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => updateTheme('fontSize', size)}
                  className={`p-2 sm:p-3 rounded-lg border-2 transition-all capitalize text-xs sm:text-sm ${
                    theme.fontSize === size
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{size}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Card Style (Portfolio)
            </label>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => updateTheme('cardStyle', 'flat')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-xs sm:text-sm ${
                  theme.cardStyle === 'flat'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">Flat</span>
              </button>
              <button
                onClick={() => updateTheme('cardStyle', 'glassmorphism')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-xs sm:text-sm ${
                  theme.cardStyle === 'glassmorphism'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">Glass</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Theme Mode
            </label>
            <Button
              onClick={() => updateTheme('darkMode', !theme.darkMode)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-sm"
            >
              {theme.darkMode ? (
                <>
                  <Sun size={16} />
                  <span className="hidden sm:inline">Switch to Light Mode</span>
                  <span className="sm:hidden">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span className="hidden sm:inline">Switch to Dark Mode</span>
                  <span className="sm:hidden">Dark Mode</span>
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Primary Color
              </label>
              <input
                type="color"
                value={theme.primaryColor}
                onChange={(e) => updateTheme('primaryColor', e.target.value)}
                className="w-full h-10 sm:h-12 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Secondary Color
              </label>
              <input
                type="color"
                value={theme.secondaryColor}
                onChange={(e) => updateTheme('secondaryColor', e.target.value)}
                className="w-full h-10 sm:h-12 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Section Visibility
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
          Toggle which sections appear in your resume/portfolio
        </p>

        <div className="space-y-2 sm:space-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                {section.label}
              </span>
              <button
                onClick={() => toggleSection(section.id)}
                className={`flex items-center justify-center gap-1 sm:gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${
                  visibleSections[section.id]
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {visibleSections[section.id] ? (
                  <>
                    <Eye size={14} />
                    Visible
                  </>
                ) : (
                  <>
                    <EyeOff size={14} />
                    Hidden
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ThemeCustomizer;
