import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-500 font-serif tracking-widest uppercase text-xs sm:text-sm relative overflow-hidden group";
  
  const variants = {
    primary: "bg-transparent border border-amber-600/50 text-amber-500 hover:text-amber-200 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)]",
    ghost: "text-zinc-500 hover:text-zinc-300 hover:tracking-[0.2em]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-amber-900/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      )}
    </button>
  );
};