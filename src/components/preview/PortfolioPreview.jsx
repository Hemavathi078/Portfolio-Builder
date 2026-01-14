import { useAppContext } from '../../context/AppContext';
import { gradientPresets } from '../../data/defaultData';

const PortfolioPreview = () => {
  const { state } = useAppContext();
  const { userData, theme } = state;
  const { personal, education, experience, skills, projects } = userData;

  // Get gradient colors from theme
  const gradientConfig = gradientPresets[theme.gradient] || gradientPresets['ocean-breeze'];
  const headerGradient = `linear-gradient(135deg, ${gradientConfig.from} 0%, ${gradientConfig.to} 100%)`;
  const accentColor = gradientConfig.to;

  // Font family mapping
  const fontFamilyMap = {
    inter: 'Inter, sans-serif',
    roboto: 'Roboto, sans-serif',
    arial: 'Arial, sans-serif',
    poppins: 'Poppins, sans-serif',
    montserrat: 'Montserrat, sans-serif',
    space: 'Space Grotesk, sans-serif',
  };
  const fontFamily = fontFamilyMap[theme.fontFamily] || 'Arial, sans-serif';

  // Dark mode styles
  const isDark = theme.darkMode;
  const bgColor = isDark ? '#1f2937' : '#ffffff';
  const textColor = isDark ? '#ffffff' : '#000000';
  const textMuted = isDark ? '#d1d5db' : '#374151';
  const cardBg = isDark ? '#374151' : '#f9fafb';
  const borderColor = isDark ? '#4b5563' : '#e5e7eb';

  return (
    <div 
      id="portfolio-preview" 
      style={{ 
        fontFamily,
        backgroundColor: bgColor,
        color: textColor,
        width: '100%',
      }}
    >
      {/* Header Section */}
      <div 
        style={{ 
          background: headerGradient,
          color: '#ffffff',
          padding: '32px',
          textAlign: 'center',
        }}
      >
        {personal.photo && (
          <img
            src={personal.photo}
            alt={personal.fullName}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              margin: '0 auto 16px',
              border: '3px solid white',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        )}
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
          {personal.fullName || 'Your Name'}
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '16px', opacity: 0.95 }}>
          {personal.jobTitle || 'Your Job Title'}
        </p>
        <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📱 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
      </div>

      <div style={{ padding: '32px' }}>
        {/* About Section */}
        {personal.summary && (
          <div style={{ marginBottom: '28px' }}>
            <h2 
              style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                color: textColor,
                borderBottom: `3px solid ${accentColor}`,
                paddingBottom: '8px',
                marginBottom: '14px',
              }}
            >
              About Me
            </h2>
            <p style={{ fontSize: '14px', color: textMuted, lineHeight: '1.7', textAlign: 'justify' }}>
              {personal.summary}
            </p>
          </div>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h2 
              style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                color: textColor,
                borderBottom: `3px solid ${accentColor}`,
                paddingBottom: '8px',
                marginBottom: '14px',
              }}
            >
              Skills
            </h2>
            {skills.map((skill, index) => (
              <div key={index} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: '600', color: textColor, fontSize: '14px' }}>{skill.name}</span>
                  <span style={{ color: textMuted, fontSize: '13px' }}>{skill.level}%</span>
                </div>
                <div 
                  style={{ 
                    height: '8px',
                    backgroundColor: isDark ? '#4b5563' : '#e5e7eb',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{ 
                      width: `${skill.level}%`,
                      height: '100%',
                      background: headerGradient,
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h2 
              style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                color: textColor,
                borderBottom: `3px solid ${accentColor}`,
                paddingBottom: '8px',
                marginBottom: '14px',
              }}
            >
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div>
                    <h3 style={{ fontWeight: 'bold', color: textColor, fontSize: '16px', margin: '0' }}>{exp.role}</h3>
                    <p style={{ color: accentColor, fontSize: '14px', margin: '4px 0 0 0' }}>{exp.company}</p>
                  </div>
                  <span style={{ color: textMuted, fontSize: '13px', whiteSpace: 'nowrap' }}>{exp.duration}</span>
                </div>
                {exp.responsibilities && (
                  <ul style={{ margin: '10px 0 0 20px', padding: '0', color: textMuted, fontSize: '14px' }}>
                    {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: '5px', lineHeight: '1.5' }}>{resp.replace(/^[-•]\s*/, '')}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h2 
              style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                color: textColor,
                borderBottom: `3px solid ${accentColor}`,
                paddingBottom: '8px',
                marginBottom: '14px',
              }}
            >
              Projects
            </h2>
            {projects.map((project, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '16px',
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  marginBottom: '14px',
                }}
              >
                <h3 style={{ fontWeight: 'bold', color: textColor, fontSize: '16px', margin: '0 0 6px 0' }}>{project.title}</h3>
                {project.techStack && (
                  <p style={{ fontSize: '13px', color: accentColor, margin: '0 0 6px 0' }}>
                    <strong>Technologies:</strong> {project.techStack}
                  </p>
                )}
                {(project.githubUrl || project.liveUrl) && (
                  <p style={{ fontSize: '13px', margin: '0 0 8px 0' }}>
                    {project.githubUrl && (
                      <span>
                        <strong style={{ color: textColor }}>GitHub:</strong>{' '}
                        <a href={project.githubUrl} style={{ color: accentColor, textDecoration: 'none' }}>
                          {project.githubUrl}
                        </a>
                      </span>
                    )}
                    {project.githubUrl && project.liveUrl && <span style={{ margin: '0 8px', color: textMuted }}>|</span>}
                    {project.liveUrl && (
                      <span>
                        <strong style={{ color: textColor }}>Live:</strong>{' '}
                        <a href={project.liveUrl} style={{ color: accentColor, textDecoration: 'none' }}>
                          {project.liveUrl}
                        </a>
                      </span>
                    )}
                  </p>
                )}
                {project.description && (
                  <ul style={{ margin: '8px 0 0 20px', padding: '0', color: textMuted, fontSize: '14px' }}>
                    {project.description.split('\n').filter(d => d.trim()).map((desc, idx) => (
                      <li key={idx} style={{ marginBottom: '4px', lineHeight: '1.5' }}>{desc.replace(/^[-•]\s*/, '')}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h2 
              style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                color: textColor,
                borderBottom: `3px solid ${accentColor}`,
                paddingBottom: '8px',
                marginBottom: '14px',
              }}
            >
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontWeight: 'bold', color: textColor, fontSize: '16px', margin: '0' }}>{edu.degree}</h3>
                  <p style={{ color: textMuted, fontSize: '14px', margin: '4px 0 0 0' }}>{edu.institution}</p>
                  {edu.description && (
                    <p style={{ color: textMuted, fontSize: '13px', margin: '4px 0 0 0' }}>{edu.description}</p>
                  )}
                </div>
                <span style={{ color: textMuted, fontSize: '13px', whiteSpace: 'nowrap' }}>
                  {edu.startYear} - {edu.endYear}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPreview;
