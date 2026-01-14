export const getGradientClass = (gradient) => {
  const gradients = {
    'ocean-breeze': 'bg-gradient-to-br from-blue-900 via-cyan-600 to-cyan-400',
    'blue-purple': 'bg-gradient-to-br from-blue-500 to-purple-600',
    'pink-orange': 'bg-gradient-to-br from-pink-500 to-orange-500',
    'teal-green': 'bg-gradient-to-br from-teal-500 to-green-500',
  };
  return gradients[gradient] || gradients['ocean-breeze'];
};

export const getCardClass = (style, darkMode) => {
  if (style === 'glassmorphism') {
    return darkMode
      ? 'bg-white/10 backdrop-blur-lg border border-white/20'
      : 'bg-white/70 backdrop-blur-lg border border-white/30';
  }
  return darkMode ? 'bg-gray-800' : 'bg-white';
};
