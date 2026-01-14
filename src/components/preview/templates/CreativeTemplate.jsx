import { Mail, Phone, MapPin, Github, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { gradientPresets } from '../../../data/defaultData';

const CreativeTemplate = ({ userData, theme, visibleSections }) => {
  const { personal, education, experience, skills, projects, skillCategories } = userData;
  const fontSize = theme.fontSize === 'small' ? 'text-sm' : theme.fontSize === 'large' ? 'text-base' : 'text-[15px]';
  const hasCategories = skillCategories.technical.length > 0 || skillCategories.tools.length > 0 || skillCategories.soft.length > 0;

  // Get theme colors - use custom colors if set, otherwise use gradient preset
  const gradientConfig = gradientPresets[theme.gradient] || gradientPresets['ocean-breeze'];
  const primaryColor = theme.primaryColor || gradientConfig.from;
  const accentColor = theme.secondaryColor || gradientConfig.to;
  const headerGradient = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;

  return (
    <div className={`${fontSize} bg-white text-gray-900 p-8`}>
      {/* Creative Header with Gradient */}
      <div className="relative mb-8">
        <div 
          className="relative text-white rounded-2xl p-8"
          style={{ background: headerGradient }}
        >
          {personal.photo && (
            <img
              src={personal.photo}
              alt={personal.fullName}
              className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover mb-4"
            />
          )}
          <h1 className="text-4xl font-bold mb-2">
            {personal.fullName || 'YOUR NAME'}
          </h1>
          <p className="text-xl mb-4 opacity-90">{personal.jobTitle || 'Your Job Title'}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {personal.email && (
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Mail size={14} />
                {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Phone size={14} />
                {personal.phone}
              </span>
            )}
            {personal.location && (
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <MapPin size={14} />
                {personal.location}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Summary with Icon */}
      {visibleSections.summary && personal.summary && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: headerGradient }}
            >
              <Award className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-13">{personal.summary}</p>
        </div>
      )}

      {/* Skills with Visual Bars */}
      {visibleSections.skills && (hasCategories || skills.length > 0) && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: headerGradient }}
            >
              <Code className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>
          
          {hasCategories ? (
            <div className="space-y-4 pl-13">
              {skillCategories.technical.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.technical.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-white rounded-full text-sm font-medium"
                        style={{ background: headerGradient }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {skillCategories.tools.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: `${accentColor}20`, color: primaryColor }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {skillCategories.soft.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.soft.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-13">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${skill.level}%`, background: headerGradient }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Experience with Timeline */}
      {visibleSections.experience && experience.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: headerGradient }}
            >
              <Briefcase className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-6 pl-13">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-6 border-l-2"
                style={{ borderColor: accentColor }}
              >
                <div 
                  className="absolute w-4 h-4 rounded-full -left-[9px] top-0"
                  style={{ backgroundColor: accentColor }}
                />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-lg font-semibold mb-2" style={{ color: accentColor }}>{exp.company}</p>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {exp.responsibilities}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects with Cards */}
      {visibleSections.projects && projects.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: headerGradient }}
            >
              <Code className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 pl-13">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="border-2 rounded-xl p-4 transition-colors"
                style={{ borderColor: `${accentColor}40` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.split(',').map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${accentColor}20`, color: primaryColor }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                <div className="flex gap-4 text-sm">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 font-medium"
                      style={{ color: accentColor }}
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 font-medium"
                      style={{ color: accentColor }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {visibleSections.education && education.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: headerGradient }}
            >
              <GraduationCap className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-4 pl-13">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="rounded-xl p-4"
                style={{ background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {edu.startYear} - {edu.endYear}
                  </span>
                </div>
                <p className="text-lg font-semibold mb-1" style={{ color: accentColor }}>{edu.institution}</p>
                {edu.description && (
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeTemplate;
