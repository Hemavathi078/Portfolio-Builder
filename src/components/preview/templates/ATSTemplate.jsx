const ATSTemplate = ({ userData, visibleSections }) => {
  const { personal, education, experience, skills, projects, skillCategories } = userData;
  const hasCategories = skillCategories?.technical?.length > 0 || skillCategories?.tools?.length > 0 || skillCategories?.soft?.length > 0;

  // Common heading style
  const sectionHeadingStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'uppercase',
    borderBottom: '1px solid #000000',
    paddingBottom: '10px',
    marginBottom: '18px',
  };

  // Section wrapper - prevents page break inside
  const sectionStyle = {
    marginBottom: '22px',
    pageBreakInside: 'avoid',
    breakInside: 'avoid',
  };

  // Item wrapper - prevents page break inside individual items
  const itemStyle = {
    pageBreakInside: 'avoid',
    breakInside: 'avoid',
  };

  // Bullet point style
  const bulletStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '8px',
    lineHeight: '1.6',
    color: '#000000',
  };

  const bulletDot = {
    minWidth: '24px',
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div 
      style={{ 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '14px',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '40px 50px',
        lineHeight: '1.5',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '18px', ...itemStyle }}>
        <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#000000', textTransform: 'uppercase', marginBottom: '8px' }}>
          {personal.fullName || 'YOUR NAME'}
        </h1>
        
        {/* Contact Info - Single Line */}
        <div style={{ fontSize: '13px', color: '#000000' }}>
          {[
            personal.linkedin && <span key="linkedin" style={{ color: '#0000EE' }}>{personal.linkedin}</span>,
            personal.email && <span key="email">{personal.email}</span>,
            personal.phone && <span key="phone">{personal.phone}</span>,
            personal.location && <span key="location">{personal.location}</span>,
          ].filter(Boolean).map((item, index, arr) => (
            <span key={index}>
              {item}
              {index < arr.length - 1 && <span style={{ margin: '0 8px' }}>|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Career Objective / Summary */}
      {visibleSections.summary && personal.summary && (
        <div style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Career Objective</h2>
          <p style={{ color: '#000000', textAlign: 'justify', lineHeight: '1.7' }}>{personal.summary}</p>
        </div>
      )}

      {/* Technical Skills - Category format */}
      {visibleSections.skills && (hasCategories || skills.length > 0) && (
        <div style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Technical Skills</h2>
          {hasCategories ? (
            <div style={{ lineHeight: '1.8' }}>
              {skillCategories?.technical?.length > 0 && (
                <p style={{ color: '#000000', margin: '0 0 8px 0' }}>
                  <strong>Programming Languages</strong> - {skillCategories.technical.join(', ')}
                </p>
              )}
              {skillCategories?.tools?.length > 0 && (
                <p style={{ color: '#000000', margin: '0 0 8px 0' }}>
                  <strong>Tools & Technologies</strong> - {skillCategories.tools.join(', ')}
                </p>
              )}
              {skillCategories?.soft?.length > 0 && (
                <p style={{ color: '#000000', margin: '0 0 8px 0' }}>
                  <strong>Core Competencies</strong> - {skillCategories.soft.join(', ')}
                </p>
              )}
            </div>
          ) : (
            <p style={{ color: '#000000' }}>
              <strong>Skills</strong> - {skills.map(skill => skill.name).join(', ')}
            </p>
          )}
        </div>
      )}

      {/* Work Experience */}
      {visibleSections.experience && experience.length > 0 && (
        <div style={{ marginBottom: '22px' }}>
          <h2 style={sectionHeadingStyle}>Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '20px', ...itemStyle }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{ fontWeight: 'bold', color: '#000000', fontSize: '15px', margin: '0' }}>
                  {exp.company}
                </p>
                <p style={{ color: '#000000', fontSize: '13px', margin: '0', whiteSpace: 'nowrap' }}>
                  {exp.duration}
                </p>
              </div>
              <p style={{ color: '#000000', margin: '2px 0 10px 0' }}>
                {exp.role}
              </p>
              
              {exp.responsibilities && (
                <div>
                  {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, idx) => (
                    <div key={idx} style={bulletStyle}>
                      <span style={bulletDot}>•</span>
                      <span style={{ flex: 1, textAlign: 'justify' }}>{resp.replace(/^[-•]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {visibleSections.projects && projects.length > 0 && (
        <div style={{ marginBottom: '22px' }}>
          <h2 style={sectionHeadingStyle}>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '18px', ...itemStyle }}>
              <p style={{ fontWeight: 'bold', color: '#000000', fontSize: '15px', margin: '0 0 2px 0' }}>
                {project.title}
              </p>
              {project.techStack && (
                <p style={{ color: '#000000', fontSize: '13px', margin: '0 0 4px 0' }}>
                  <strong>Technologies:</strong> {project.techStack}
                </p>
              )}
              {(project.githubUrl || project.liveUrl) && (
                <p style={{ color: '#0000EE', fontSize: '13px', margin: '0 0 8px 0' }}>
                  {project.githubUrl && (
                    <span>
                      <strong style={{ color: '#000000' }}>GitHub:</strong> {project.githubUrl}
                    </span>
                  )}
                  {project.githubUrl && project.liveUrl && <span style={{ margin: '0 8px', color: '#000000' }}>|</span>}
                  {project.liveUrl && (
                    <span>
                      <strong style={{ color: '#000000' }}>Live:</strong> {project.liveUrl}
                    </span>
                  )}
                </p>
              )}
              {project.description && (
                <div>
                  {project.description.split('\n').filter(d => d.trim()).map((desc, idx) => (
                    <div key={idx} style={bulletStyle}>
                      <span style={bulletDot}>•</span>
                      <span style={{ flex: 1, textAlign: 'justify' }}>{desc.replace(/^[-•]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {visibleSections.education && education.length > 0 && (
        <div style={{ marginBottom: '22px' }}>
          <h2 style={sectionHeadingStyle}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '16px', ...itemStyle }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{ fontWeight: 'bold', color: '#000000', fontSize: '15px', margin: '0' }}>
                  {edu.institution}
                </p>
                <p style={{ color: '#000000', fontSize: '13px', margin: '0', whiteSpace: 'nowrap' }}>
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
              <p style={{ color: '#000000', margin: '2px 0 0 0' }}>
                {edu.degree}
              </p>
              {edu.description && (
                <p style={{ color: '#000000', fontSize: '13px', margin: '4px 0 0 0' }}>{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ATSTemplate;
