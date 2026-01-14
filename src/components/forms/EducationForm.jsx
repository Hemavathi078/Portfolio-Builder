import { Plus, Trash2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import Card from '../common/Card';
import { generateUniqueId } from '../../utils/exportPdf';

const EducationForm = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { education } = state.userData;

  const addEducation = () => {
    dispatch({
      type: actionTypes.ADD_EDUCATION,
      payload: {
        id: generateUniqueId(),
        institution: '',
        degree: '',
        startYear: '',
        endYear: '',
        description: '',
      },
    });
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = { ...education[index], [field]: value };
    dispatch({
      type: actionTypes.UPDATE_EDUCATION,
      payload: { index, data: updatedEducation },
    });
  };

  const removeEducation = (index) => {
    dispatch({ type: actionTypes.REMOVE_EDUCATION, payload: index });
  };

  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
        <Button onClick={addEducation} variant="primary" className="w-full sm:w-auto">
          <Plus className="inline mr-1 sm:mr-2" size={16} />
          <span className="text-sm">Add Education</span>
        </Button>
      </div>

      {education.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No education entries yet. Click "Add Education" to get started.
        </p>
      ) : (
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={edu.id || index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Education #{index + 1}
                </h3>
                <Button onClick={() => removeEducation(index)} variant="danger" className="w-full sm:w-auto px-3 py-1.5">
                  <Trash2 size={16} className="inline mr-1" />
                  <span className="text-sm">Remove</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Institution Name"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  placeholder="University of California"
                />
                
                <Input
                  label="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  placeholder="Bachelor of Science in Computer Science"
                />
                
                <Input
                  label="Start Year"
                  type="number"
                  value={edu.startYear}
                  onChange={(e) => updateEducation(index, 'startYear', e.target.value)}
                  placeholder="2018"
                />
                
                <Input
                  label="End Year"
                  type="number"
                  value={edu.endYear}
                  onChange={(e) => updateEducation(index, 'endYear', e.target.value)}
                  placeholder="2022"
                />
              </div>

              <Textarea
                label="Description"
                value={edu.description}
                onChange={(e) => updateEducation(index, 'description', e.target.value)}
                placeholder="Relevant coursework, achievements, honors..."
                rows={3}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default EducationForm;
