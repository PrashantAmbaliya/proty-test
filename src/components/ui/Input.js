import React from 'react';

const Input = ({ 
  label,
  error,
  helperText,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  ...props 
}) => {
  const inputClasses = `block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''} ${inputClassName}`;
  
  return (
    <div className={className}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className={`mt-1 text-sm text-red-600 ${errorClassName}`}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;