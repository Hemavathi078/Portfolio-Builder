import { useAppContext } from '../../context/AppContext';
import ATSTemplate from './templates/ATSTemplate';
import CreativeTemplate from './templates/CreativeTemplate';

const ResumePreview = () => {
  const { state } = useAppContext();
  const { userData, theme, settings = {} } = state;
  const { visibleSections = {
    summary: true,
    skills: true,
    experience: true,
    education: true,
    projects: true,
  } } = settings;

  const { resumeTemplate = 'ats' } = theme;
  const fontClass = `font-${theme.fontFamily}`;

  // Template mapping
  const templates = {
    ats: ATSTemplate,
    creative: CreativeTemplate,
    modern: ATSTemplate,
    minimal: ATSTemplate,
    executive: ATSTemplate,
    developer: CreativeTemplate,
  };

  const TemplateComponent = templates[resumeTemplate] || ATSTemplate;

  return (
    <div
      id="resume-preview"
      className={`${fontClass} bg-white`}
      style={{ 
        width: '210mm', 
        maxWidth: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        backgroundColor: '#ffffff',
      }}
    >
      <TemplateComponent
        userData={userData}
        theme={theme}
        visibleSections={visibleSections}
      />
    </div>
  );
};

export default ResumePreview;
