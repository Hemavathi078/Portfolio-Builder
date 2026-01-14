import { User, GraduationCap, Briefcase, Code, FolderGit2, Palette, FileText, Eye, Trash2, Sparkles, Upload, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ activeTab, setActiveTab, previewMode, setPreviewMode, onReset, onBackToHome }) => {
  const menuItems = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'summary', label: 'Auto Summary', icon: Sparkles },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'reference', label: 'Reference Upload', icon: Upload },
    { id: 'theme', label: 'Theme', icon: Palette },
  ];

  const previewItems = [
    { id: 'portfolio', label: 'Portfolio', icon: Eye },
    { id: 'resume', label: 'Resume', icon: FileText },
  ];

  return (
    <div className="w-full lg:w-64 bg-white dark:bg-gray-800 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 flex flex-col lg:h-screen">
      <div className="p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent mb-2">
          Portfolio Builder
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">Create your stunning portfolio</p>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-hide p-3">
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
            Edit Content
          </p>
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-400 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
            Preview
          </p>
          <div className="space-y-1">
            {previewItems.map((item) => {
              const Icon = item.icon;
              const isActive = previewMode === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setPreviewMode(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="p-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <button
          onClick={onBackToHome}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
        >
          <Home size={18} />
          <span className="font-medium text-sm">Back to Home</span>
        </button>
        
        <button
          onClick={onReset}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
        >
          <Trash2 size={18} />
          <span className="font-medium text-sm">Reset All Data</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
