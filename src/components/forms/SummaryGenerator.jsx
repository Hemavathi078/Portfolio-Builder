import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { summaryTemplates } from '../../data/defaultData';
import Button from '../common/Button';
import Card from '../common/Card';

const SummaryGenerator = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { personal } = state.userData;
  const [selectedRole, setSelectedRole] = useState('frontend-developer');
  const [experienceLevel, setExperienceLevel] = useState('fresher');
  const [years, setYears] = useState('2');
  const [copied, setCopied] = useState(false);

  const roles = [
    { value: 'frontend-developer', label: 'Frontend Developer' },
    { value: 'fullstack-developer', label: 'Full Stack Developer' },
    { value: 'software-engineer', label: 'Software Engineer' },
    { value: 'backend-developer', label: 'Backend Developer' },
    { value: 'data-analyst', label: 'Data Analyst' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'devops-engineer', label: 'DevOps Engineer' },
    { value: 'mobile-developer', label: 'Mobile Developer' },
    { value: 'ui-ux-designer', label: 'UI/UX Designer' },
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'qa-engineer', label: 'QA Engineer' },
    { value: 'cloud-architect', label: 'Cloud Architect' },
    { value: 'machine-learning', label: 'Machine Learning Engineer' },
    { value: 'cybersecurity', label: 'Cybersecurity Specialist' },
  ];

  const experienceLevels = [
    { value: 'fresher', label: 'Fresher / Entry Level' },
    { value: '1-3', label: '1-3 Years Experience' },
    { value: '3+', label: '3+ Years Experience' },
  ];

  const generateSummary = () => {
    const templates = summaryTemplates[selectedRole]?.[experienceLevel];
    if (templates && Array.isArray(templates)) {
      // Pick a random template from the array
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      const summary = randomTemplate.replace('{years}', years);
      dispatch({
        type: actionTypes.SET_PERSONAL,
        payload: { ...personal, summary },
      });
    }
  };

  const copySummary = () => {
    if (personal.summary) {
      navigator.clipboard.writeText(personal.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card>
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-purple-500" size={24} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Auto-Generate Professional Summary
        </h2>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-purple-800 dark:text-purple-200">
          <strong>💡 Tip:</strong> Generate an ATS-optimized professional summary tailored to your role and experience level.
          Click "Generate" multiple times to get different variations. You can edit it after generation.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Target Role
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Experience Level
          </label>
          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
          >
            {experienceLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {experienceLevel !== 'fresher' && (
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Years of Experience
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
            />
          </div>
        )}
      </div>

      <Button onClick={generateSummary} variant="primary" className="w-full mb-4">
        <Sparkles className="inline mr-2" size={18} />
        {personal.summary ? 'Regenerate Summary' : 'Generate Summary'}
      </Button>

      {personal.summary && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Generated Summary (Editable)
            </label>
            <button
              onClick={copySummary}
              className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy
                </>
              )}
            </button>
          </div>
          <textarea
            value={personal.summary}
            onChange={(e) =>
              dispatch({
                type: actionTypes.SET_PERSONAL,
                payload: { ...personal, summary: e.target.value },
              })
            }
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 resize-none"
          />
        </div>
      )}
    </Card>
  );
};

export default SummaryGenerator;
