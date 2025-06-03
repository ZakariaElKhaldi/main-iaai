import { type ReactNode, createElement, type ElementType } from 'react';

interface ContainerProps<T extends ElementType = 'div'> {
  children: ReactNode;
  className?: string;
  as?: T;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  centerContent?: boolean;
  fluid?: boolean;
  responsiveSpacing?: boolean;
}

export const Container = <T extends ElementType = 'div'>({
  children,
  className = '',
  as,
  maxWidth = 'xl',
  padding = true,
  centerContent = false,
  fluid = false,
  responsiveSpacing = true,
}: ContainerProps<T>) => {
  const Component = as || 'div';
  
  const getMaxWidthClass = () => {
    if (fluid) return 'max-w-full';
    
    switch (maxWidth) {
      case 'xs':
        return 'max-w-xs';
      case 'sm':
        return 'max-w-sm';
      case 'md':
        return 'max-w-md';
      case 'lg':
        return 'max-w-lg';
      case 'xl':
        return 'max-w-xl';
      case '2xl':
        return 'max-w-7xl';
      case 'full':
        return 'max-w-full';
      default:
        return 'max-w-xl';
    }
  };
  
  const getPaddingClass = () => {
    if (!padding) return '';
    
    return responsiveSpacing 
      ? 'px-4 sm:px-6 md:px-8 lg:px-12' 
      : 'px-4';
  };
  
  const getCenterContentClass = () => {
    return centerContent ? 'flex flex-col items-center' : '';
  };

  return createElement(
    Component,
    {
      className: `w-full mx-auto ${getMaxWidthClass()} ${getPaddingClass()} ${getCenterContentClass()} ${className}`,
    },
    children
  );
};

export default Container; 