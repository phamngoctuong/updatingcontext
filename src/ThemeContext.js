import { createContext } from 'react';
import themes from './themes';
export default createContext({
  theme: themes.dark,
  toggleTheme: () => {
  	
  }
});
