import { Plus, Trash2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import Card from '../common/Card';
import { generateUniqueId } from '../../utils/exportPdf';

const ProjectsForm = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { projects } = state.userData;

  const addProject = () => {
    dispatch({
      type: actionTypes.ADD_PROJECT,
      payload: {
        id: generateUniqueId(),
        title: '',
        description: '',
        techStack: '',
        githubUrl: '',
        liveUrl: '',
        image: null,
      },
    });
  };

  const updateProject = (index, field, value) => {
    const updatedProject = { ...projects[index], [field]: value };
    dispatch({
      type: actionTypes.UPDATE_PROJECT,
      payload: { index, data: updatedProject },
    });
  };

  const removeProject = (index) => {
    dispatch({ type: actionTypes.REMOVE_PROJECT, payload: index });
  };

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProject(index, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Projects</h2>
        <Button onClick={addProject} variant="primary" className="w-full sm:w-auto">
          <Plus className="inline mr-1 sm:mr-2" size={16} />
          <span className="text-sm">Add Project</span>
        </Button>
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No projects added yet. Click "Add Project" to get started.
        </p>
      ) : (
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={project.id || index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Project #{index + 1}
                </h3>
                <Button onClick={() => removeProject(index)} variant="danger" className="w-full sm:w-auto px-3 py-1.5">
                  <Trash2 size={16} className="inline mr-1" />
                  <span className="text-sm">Remove</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Project Title"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  placeholder="E-commerce Platform"
                  className="md:col-span-2"
                />
                
                <Input
                  label="Tech Stack"
                  value={project.techStack}
                  onChange={(e) => updateProject(index, 'techStack', e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                  className="md:col-span-2"
                />
                
                <Input
                  label="GitHub URL"
                  value={project.githubUrl}
                  onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
                  placeholder="https://github.com/username/project"
                />
                
                <Input
                  label="Live Demo URL"
                  value={project.liveUrl}
                  onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
                  placeholder="https://project-demo.com"
                />
                
                <div className="mb-4 md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Project Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(index, e)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {project.image && (
                    <img src={project.image} alt="Preview" className="mt-2 w-full h-40 rounded-lg object-cover" />
                  )}
                </div>
              </div>

              <Textarea
                label="Description"
                value={project.description}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                placeholder="Describe your project, key features, and your role..."
                rows={4}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ProjectsForm;
