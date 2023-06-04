import { useState, useEffect } from "react";


export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, [theme]);

  useEffect(() => {
    setTheme()
  }, [])

  return { theme, switchTheme };
}


