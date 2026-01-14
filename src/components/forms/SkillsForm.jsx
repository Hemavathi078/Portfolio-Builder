import { Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Input from '../common/Input';
import Button from '../common/Button';
import Card from '../common/Card';
import { generateUniqueId } from '../../utils/exportPdf';

const SkillsForm = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { skills, skillCategories = { technical: [], tools: [], soft: [] } } = state.userData;
  const { builderMode = 'resume' } = state.settings || {};
  const [activeTab, setActiveTab] = useState('visual');
  
  // Input states for each category
  const [technicalInput, setTechnicalInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  // Visual skills (with progress bars)
  const addSkill = () => {
    dispatch({
      type: actionTypes.ADD_SKILL,
      payload: {
        id: generateUniqueId(),
        name: '',
        level: 70,
      },
    });
  };

  const updateSkill = (index, field, value) => {
    const updatedSkill = { ...skills[index], [field]: value };
    dispatch({
      type: actionTypes.UPDATE_SKILL,
      payload: { index, data: updatedSkill },
    });
  };

  const removeSkill = (index) => {
    dispatch({ type: actionTypes.REMOVE_SKILL, payload: index });
  };

  // Add skill to category
  const addSkillToCategory = (category, inputValue, setInputValue) => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    
    // Split by comma to allow adding multiple at once
    const newSkills = trimmed.split(',').map(s => s.trim()).filter(s => s.length > 0);
    
    const updatedCategories = {
      ...skillCategories,
      [category]: [...skillCategories[category], ...newSkills]
    };
    
    dispatch({
      type: actionTypes.SET_SKILL_CATEGORIES,
      payload: updatedCategories,
    });
    
    setInputValue('');
  };

  // Remove skill from category
  const removeSkillFromCategory = (category, index) => {
    const updatedCategories = {
      ...skillCategories,
      [category]: skillCategories[category].filter((_, i) => i !== index)
    };
    
    dispatch({
      type: actionTypes.SET_SKILL_CATEGORIES,
      payload: updatedCategories,
    });
  };

  // Handle Enter key press
  const handleKeyDown = (e, category, inputValue, setInputValue) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkillToCategory(category, inputValue, setInputValue);
    }
  };

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h2>
        
        {builderMode === 'resume' && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>ATS Tip:</strong> For resumes, use categorized bullet-point skills. For portfolios, you can use visual progress bars.
            </p>
          </div>
        )}

        <div className="flex gap-2 mb-4 flex-wrap">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'visual'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Visual Skills
          </button>
          <button
            onClick={() => setActiveTab('categorized')}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'categorized'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Categorized Skills
          </button>
        </div>
      </div>

      {activeTab === 'visual' ? (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Add skills with proficiency levels (shown in portfolio view)
            </p>
            <Button onClick={addSkill} variant="primary" className="w-full sm:w-auto">
              <Plus className="inline mr-1 sm:mr-2" size={16} />
              <span className="text-sm">Add Skill</span>
            </Button>
          </div>

          {skills.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No skills added yet. Click "Add Skill" to get started.
            </p>
          ) : (
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.id || index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex flex-col gap-4">
                    <div className="w-full">
                      <Input
                        label="Skill Name"
                        value={skill.name}
                        onChange={(e) => updateSkill(index, 'name', e.target.value)}
                        placeholder="React.js"
                      />
                    </div>
                    
                    <div className="w-full">
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Proficiency Level: {skill.level}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                    
                    <Button onClick={() => removeSkill(index)} variant="danger" className="w-full sm:w-auto px-3 py-2">
                      <Trash2 size={16} className="inline mr-1" />
                      <span className="text-sm">Remove</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          {/* Technical Skills */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Technical Skills
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={technicalInput}
                onChange={(e) => setTechnicalInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'technical', technicalInput, setTechnicalInput)}
                placeholder="Type skill and press Enter (e.g., JavaScript, React)"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={() => addSkillToCategory('technical', technicalInput, setTechnicalInput)}
                className="px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium min-w-[80px]"
              >
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Press Enter or click Add. Use commas to add multiple skills at once.
            </p>
            {skillCategories.technical.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {skillCategories.technical.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkillFromCategory('technical', index)}
                      className="ml-1 hover:text-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Tools & Technologies */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Tools & Technologies
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'tools', toolsInput, setToolsInput)}
                placeholder="Type tool and press Enter (e.g., Git, Docker)"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={() => addSkillToCategory('tools', toolsInput, setToolsInput)}
                className="px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium min-w-[80px]"
              >
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Press Enter or click Add. Use commas to add multiple tools at once.
            </p>
            {skillCategories.tools.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {skillCategories.tools.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkillFromCategory('tools', index)}
                      className="ml-1 hover:text-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Soft Skills */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Soft Skills
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={softInput}
                onChange={(e) => setSoftInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'soft', softInput, setSoftInput)}
                placeholder="Type skill and press Enter (e.g., Leadership)"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={() => addSkillToCategory('soft', softInput, setSoftInput)}
                className="px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium min-w-[80px]"
              >
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Press Enter or click Add. Use commas to add multiple skills at once.
            </p>
            {skillCategories.soft.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {skillCategories.soft.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkillFromCategory('soft', index)}
                      className="ml-1 hover:text-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default SkillsForm;
