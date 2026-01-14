import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, Eye, Download, Layout, Sparkles, Users, GraduationCap, Briefcase, Code, Menu, X, ArrowRight, CheckCircle, Zap, Palette, Laptop, Award, Target, Lightbulb } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Fill Your Details',
      description: 'Enter your education, experience, skills, and projects using simple forms.',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Choose a Template',
      description: 'Select from built-in resume and portfolio templates designed for different roles.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Live Preview',
      description: 'See your resume or portfolio update instantly as you type.',
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Download & Share',
      description: 'Export your resume as a PDF or use your portfolio for online sharing.',
    },
  ];

  const templates = [
    { name: 'ATS-Friendly Resume', description: 'Clean & simple', icon: <FileText className="w-8 h-8" /> },
    { name: 'Modern Resume', description: 'Minimal & stylish', icon: <Sparkles className="w-8 h-8" /> },
    { name: 'Student / Fresher Resume', description: 'Perfect for beginners', icon: <GraduationCap className="w-8 h-8" /> },
    { name: 'Developer Portfolio', description: 'Showcase your projects', icon: <Laptop className="w-8 h-8" /> },
    { name: 'Creative Portfolio', description: 'Stand out visually', icon: <Palette className="w-8 h-8" /> },
  ];

  const steps = [
    {
      number: '1',
      title: 'Choose Resume or Portfolio',
      description: 'Start by selecting what you want to build.',
    },
    {
      number: '2',
      title: 'Fill in Your Information',
      description: 'Add your details with guided inputs and smart formatting.',
    },
    {
      number: '3',
      title: 'Customize & Download',
      description: 'Pick a template, adjust the design, and export when ready.',
    },
  ];

  const audience = [
    { icon: <GraduationCap className="w-6 h-6" />, label: 'Students & Freshers' },
    { icon: <Briefcase className="w-6 h-6" />, label: 'Job Seekers' },
    { icon: <Users className="w-6 h-6" />, label: 'Working Professionals' },
    { icon: <Code className="w-6 h-6" />, label: 'Developers & Designers' },
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-cyan-500 flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
                PortfolioPress
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Features
              </a>
              <a href="#templates" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Templates
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                How It Works
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/builder/resume')}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-cyan-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-4 space-y-3">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="#templates"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Templates
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  How It Works
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/builder/resume');
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 via-cyan-600 to-cyan-400 text-white rounded-lg font-semibold shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-600 to-cyan-400 py-16 md:py-24 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-cyan-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-900/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
              >
                <Zap size={16} className="text-cyan-400" />
                <span>Build in Minutes, Impress for Years</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-bold text-white mb-6 leading-tight">
                Create Your Resume &<br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                  {' '}Portfolio in Minutes
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed px-4">
                Fill in your details, choose a template, customize the design, and download a professional resume or portfolio instantly.
              </p>

              <p className="text-base sm:text-lg text-white/80 mb-10 max-w-3xl mx-auto px-4">
                Designed to help your profile stand out to recruiters and hiring managers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 px-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/builder/resume')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-2 group"
                >
                  <FileText size={24} />
                  <span>Build Your Resume</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/builder/portfolio')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-white text-blue-900 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles size={24} />
                  <span>Build Your Portfolio</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <p className="text-sm text-white/75 italic px-4">
                <Sparkles className="inline w-4 h-4 mr-1" /> Choose from ready-made templates and customize easily
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bold text-gray-900 mb-4">
              Everything You Need to Create a
              <span className="bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
                {' '}Professional Profile
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, powerful tools to build your career documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-cyan-600 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bold text-gray-900 mb-4">
              Professional Templates for
              <span className="bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
                {' '}Every Career Stage
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              All templates are easy to customize — fonts, colors, layout, and sections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-cyan-600/20 hover:border-cyan-600/50"
              >
                <div className="flex items-start gap-4">
                  <div className="text-cyan-600 flex-shrink-0">{template.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-bold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </div>
                  <CheckCircle className="text-cyan-600 flex-shrink-0" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/5 to-cyan-600/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-900 via-cyan-600 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold font-bold mx-auto mb-6 shadow-lg"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.description}</p>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-600 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bold text-gray-900 mb-4">
              Who Is This For?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              No design or technical skills required
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all text-center border border-cyan-600/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-cyan-600 to-cyan-400">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bold text-white mb-6">
              Your Resume Is Just a Few Steps Away
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10">
              Start building your professional profile today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/builder/resume')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="flex items-center gap-2">
                    <FileText size={20} />
                    Create My Resume
                  </span>
                  <span className="text-xs font-normal text-gray-600">Choose a template and get started</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/builder/portfolio')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-white text-blue-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="flex items-center gap-2">
                    <Sparkles size={20} />
                    Create My Portfolio
                  </span>
                  <span className="text-xs font-normal text-gray-600">Showcase your work beautifully</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <span className="text-xl font-bold font-bold">PortfolioPress</span>
              </div>
              <p className="text-white/70 text-sm">
                Build professional resumes and portfolios in minutes. No design skills required.
              </p>
            </div>

            <div>
              <h3 className="font-bold font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-white/70 hover:text-white transition-colors">Features</a>
                <a href="#templates" className="block text-white/70 hover:text-white transition-colors">Templates</a>
                <a href="#how-it-works" className="block text-white/70 hover:text-white transition-colors">How It Works</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold font-bold mb-4">Get Started</h3>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => navigate('/builder/resume')}
                  className="block text-white/70 hover:text-white transition-colors text-left"
                >
                  Build Resume
                </button>
                <button
                  onClick={() => navigate('/builder/portfolio')}
                  className="block text-white/70 hover:text-white transition-colors text-left"
                >
                  Build Portfolio
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2026 PortfolioPress. Made with ❤️ for job seekers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
