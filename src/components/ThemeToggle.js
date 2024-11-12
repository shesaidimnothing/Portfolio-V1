import { useTheme } from '../context/ThemeContext';
import { Icon } from '@iconify/react';

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 left-6 z-[60] p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Icon 
          icon="ph:sun-bold" 
          className="w-6 h-6 text-yellow-400" 
        />
      ) : (
        <Icon 
          icon="ph:moon-bold" 
          className="w-6 h-6 text-gray-800" 
        />
      )}
    </button>
  );
};

export default ThemeToggle;