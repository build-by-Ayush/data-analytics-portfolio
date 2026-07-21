import { motion } from 'framer-motion';

export default function GlassPanel({
  children,
  className = '',
  hover = false,
  onClick,
  delay = 0,
  as = 'div',
}) {
  const Component = onClick ? motion.button : motion[as] || motion.div;

  return (
    <Component
      className={`glass-panel ${hover ? 'glass-panel-hover cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </Component>
  );
}
