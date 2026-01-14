import { Plus, Trash2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import Card from '../common/Card';
import { generateUniqueId } from '../../utils/exportPdf';

const ExperienceForm = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { experience } = state.userData;

  const addExperience = () => {
    dispatch({
      type: actionTypes.ADD_EXPERIENCE,
      payload: {
        id: generateUniqueId(),
        company: '',
        role: '',
        duration: '',
        responsibilities: '',
      },
    });
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = { ...experience[index], [field]: value };
    dispatch({
      type: actionTypes.UPDATE_EXPERIENCE,
      payload: { index, data: updatedExperience },
    });
  };

  const removeExperience = (index) => {
    dispatch({ type: actionTypes.REMOVE_EXPERIENCE, payload: index });
  };

  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Experience</h2>
        <Button onClick={addExperience} variant="primary" className="w-full sm:w-auto">
          <Plus className="inline mr-1 sm:mr-2" size={16} />
          <span className="text-sm">Add Experience</span>
        </Button>
      </div>

      {experience.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No experience entries yet. Click "Add Experience" to get started.
        </p>
      ) : (
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={exp.id || index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Experience #{index + 1}
                </h3>
                <Button onClick={() => removeExperience(index)} variant="danger" className="w-full sm:w-auto px-3 py-1.5">
                  <Trash2 size={16} className="inline mr-1" />
                  <span className="text-sm">Remove</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Company Name"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  placeholder="Tech Corp Inc."
                />
                
                <Input
                  label="Role"
                  value={exp.role}
                  onChange={(e) => updateExperience(index, 'role', e.target.value)}
                  placeholder="Senior Software Engineer"
                />
                
                <Input
                  label="Duration"
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                  placeholder="Jan 2020 - Present"
                  className="md:col-span-2"
                />
              </div>

              <Textarea
                label="Responsibilities"
                value={exp.responsibilities}
                onChange={(e) => updateExperience(index, 'responsibilities', e.target.value)}
                placeholder="• Led development of key features&#10;• Mentored junior developers&#10;• Improved system performance by 40%"
                rows={4}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ExperienceForm;
