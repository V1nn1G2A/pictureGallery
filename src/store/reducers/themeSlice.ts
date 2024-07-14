import { createSlice } from '@reduxjs/toolkit';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', localStorage.getItem('app-theme') || defaultTheme);

interface Theme {
  theme: string;
}

const initialState: Theme = {
  theme: localStorage.getItem('app-theme') || defaultTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: { theme: string }) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('app-theme', newTheme);

      return { ...state, theme: newTheme };
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
