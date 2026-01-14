import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

const ModernTemplate = ({ userData, theme, visibleSections }) => {
  const { personal, education, experience, skills, projects, skillCategories } = userData;
  const hasCategories = skillCategories.technical.length > 0 || skillCategories.tools.length > 0;

  return (
    <div className="bg-white text-gray-900 flex">
      {/* Left Sidebar - Ocean Breeze Theme */}
      <div className="w-1/3 bg-gradient-to-br from-blue-900 to-cyan-600 text-white p-6">
        {/* Photo */}
        {personal.photo && (
          <div className="mb-6">
            <img
              src={personal.photo}
              alt={personal.fullName}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
        )}

        {/* Contact */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 border-b-2 border-cyan-400 pb-2">CONTACT</h3>
          <div className="space-y-2 text-sm">
            {personal.email && (
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-1 flex-shrink-0" />
                <span className="break-all">{personal.email}</span>
              </div>
            )}
            {personal.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" />
                <span>{personal.phone}</span>
              </div>
            )}
            {personal.location && (
              <div className="flex items-center gap-2">
                <MapPin size={14} className="flex-shrink-0" />
                <span>{personal.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {visibleSections.skills && (hasCategories || skills.length > 0) && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 border-b-2 border-cyan-400 pb-2">SKILLS</h3>
            {hasCategories ? (
              <div className="space-y-3 text-sm">
                {skillCategories.technical.length > 0 && (
                  <div>
                    <p className="font-semibold mb-1">Technical</p>
                    <p className="text-cyan-100">{skillCategories.technical.join(' • ')}</p>
                  </div>
                )}
                {skillCategories.tools.length > 0 && (
                  <div>
                    <p className="font-semibold mb-1">Tools</p>
                    <p className="text-cyan-100">{skillCategories.tools.join(' • ')}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Education */}
        {visibleSections.education && education.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-3 border-b-2 border-cyan-400 pb-2">EDUCATION</h3>
            <div className="space-y-3 text-sm">
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-cyan-100">{edu.institution}</p>
                  <p className="text-cyan-200 text-xs">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            {personal.fullName || 'YOUR NAME'}
          </h1>
          <p className="text-xl text-cyan-600 font-semibold">{personal.jobTitle || 'Your Job Title'}</p>
        </div>

        {/* Summary */}
        {visibleSections.summary && personal.summary && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-3 border-b-2 border-cyan-600 pb-1">
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {visibleSections.experience && experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-3 border-b-2 border-cyan-600 pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-sm text-cyan-600 font-semibold">{exp.duration}</span>
                  </div>
                  <p className="text-cyan-700 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                    {exp.responsibilities}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {visibleSections.projects && projects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3 border-b-2 border-cyan-600 pb-1">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  {project.techStack && (
                    <p className="text-xs text-cyan-600 mb-1">
                      {project.techStack}
                    </p>
                  )}
                  <p className="text-gray-700 text-sm mb-1">{project.description}</p>
                  <div className="flex gap-3 text-xs text-gray-600">
                    {project.githubUrl && (
                      <span className="flex items-center gap-1">
                        <Github size={10} />
                        GitHub
                      </span>
                    )}
                    {project.liveUrl && (
                      <span className="flex items-center gap-1">
                        <ExternalLink size={10} />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
