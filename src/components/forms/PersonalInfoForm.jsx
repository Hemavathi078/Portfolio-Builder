import { useAppContext } from '../../context/AppContext';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Card from '../common/Card';

const PersonalInfoForm = () => {
  const { state, dispatch, actionTypes } = useAppContext();
  const { personal } = state.userData;

  const handleChange = (field, value) => {
    dispatch({
      type: actionTypes.SET_PERSONAL,
      payload: { ...personal, [field]: value },
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('photo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-white">Personal Information</h2>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-3 sm:p-4 mb-6">
        <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">
          💡 <strong>Tip:</strong> You can edit this later. Preview updates automatically.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={personal.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="John Doe"
          required
        />
        
        <Input
          label="Job Title / Role"
          value={personal.jobTitle}
          onChange={(e) => handleChange('jobTitle', e.target.value)}
          placeholder="Full Stack Developer"
          required
        />
        
        <Input
          label="Email"
          type="email"
          value={personal.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john@example.com"
          required
        />
        
        <Input
          label="Phone"
          type="tel"
          value={personal.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="+1 234 567 8900"
        />
        
        <Input
          label="Location"
          value={personal.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="San Francisco, CA"
        />

        <Input
          label="LinkedIn"
          value={personal.linkedin || ''}
          onChange={(e) => handleChange('linkedin', e.target.value)}
          placeholder="LinkedIn"
        />
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Profile Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {personal.photo && (
            <img src={personal.photo} alt="Preview" className="mt-2 w-24 h-24 rounded-full object-cover" />
          )}
        </div>
      </div>
      
      <Textarea
        label="Professional Summary"
        value={personal.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
        placeholder="Brief description about yourself and your expertise..."
        rows={5}
      />
    </Card>
  );
};

export default PersonalInfoForm;
