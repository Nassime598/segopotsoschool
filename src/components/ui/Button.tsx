import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded transition-all duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    secondary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50',
    outline: 'border-2 border-blue-800 text-blue-800 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    text: 'text-blue-800 hover:underline focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-50 bg-transparent',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;