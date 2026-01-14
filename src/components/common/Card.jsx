import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { getCardClass } from '../../styles/themes';

const Card = ({ children, className = '', animate = true }) => {
  const { state } = useAppContext();
  const cardClass = getCardClass(state.theme.cardStyle, state.theme.darkMode);

  const Component = animate ? motion.div : 'div';
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <Component
      {...animationProps}
      className={`${cardClass} rounded-xl shadow-lg p-6 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Card;
