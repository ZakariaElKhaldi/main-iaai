import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { theme } from '../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<'button'>> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}: ButtonProps) => {
  // Determine styles based on variant
  const getVariantStyles = (): string => {
    switch (variant) {
      case 'primary':
        return `bg-blue-600 hover:bg-blue-700 text-white shadow-md`;
      case 'secondary':
        return `bg-teal-600 hover:bg-teal-700 text-white shadow-md`;
      case 'outline':
        return `bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50`;
      case 'text':
        return `bg-transparent text-blue-600 hover:bg-blue-50 shadow-none`;
      default:
        return `bg-blue-600 hover:bg-blue-700 text-white shadow-md`;
    }
  };

  // Determine styles based on size
  const getSizeStyles = (): string => {
    switch (size) {
      case 'sm':
        return `text-sm py-1 px-3`;
      case 'md':
        return `text-base py-2 px-4`;
      case 'lg':
        return `text-lg py-3 px-6`;
      default:
        return `text-base py-2 px-4`;
    }
  };

  // Button animation
  const buttonAnimation = {
    tap: { scale: 0.98 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.button
      whileTap="tap"
      whileHover="hover"
      variants={buttonAnimation}
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${fullWidth ? 'w-full' : ''}
        rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props as any}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
    </motion.button>
  );
};

export default Button; 