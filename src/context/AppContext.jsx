import { createContext, useContext, useReducer, useEffect } from 'react';
import { defaultUserData, defaultTheme, defaultSettings } from '../data/defaultData';

const AppContext = createContext();

const actionTypes = {
  SET_PERSONAL: 'SET_PERSONAL',
  ADD_EDUCATION: 'ADD_EDUCATION',
  UPDATE_EDUCATION: 'UPDATE_EDUCATION',
  REMOVE_EDUCATION: 'REMOVE_EDUCATION',
  ADD_EXPERIENCE: 'ADD_EXPERIENCE',
  UPDATE_EXPERIENCE: 'UPDATE_EXPERIENCE',
  REMOVE_EXPERIENCE: 'REMOVE_EXPERIENCE',
  ADD_SKILL: 'ADD_SKILL',
  UPDATE_SKILL: 'UPDATE_SKILL',
  REMOVE_SKILL: 'REMOVE_SKILL',
  ADD_PROJECT: 'ADD_PROJECT',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  REMOVE_PROJECT: 'REMOVE_PROJECT',
  SET_THEME: 'SET_THEME',
  SET_SETTINGS: 'SET_SETTINGS',
  SET_SKILL_CATEGORIES: 'SET_SKILL_CATEGORIES',
  RESET_ALL: 'RESET_ALL',
  LOAD_DATA: 'LOAD_DATA',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PERSONAL:
      return { ...state, userData: { ...state.userData, personal: action.payload } };
    
    case actionTypes.ADD_EDUCATION:
      return {
        ...state,
        userData: {
          ...state.userData,
          education: [...state.userData.education, action.payload],
        },
      };
    
    case actionTypes.UPDATE_EDUCATION:
      return {
        ...state,
        userData: {
          ...state.userData,
          education: state.userData.education.map((item, idx) =>
            idx === action.payload.index ? action.payload.data : item
          ),
        },
      };
    
    case actionTypes.REMOVE_EDUCATION:
      return {
        ...state,
        userData: {
          ...state.userData,
          education: state.userData.education.filter((_, idx) => idx !== action.payload),
        },
      };
    
    case actionTypes.ADD_EXPERIENCE:
      return {
        ...state,
        userData: {
          ...state.userData,
          experience: [...state.userData.experience, action.payload],
        },
      };
    
    case actionTypes.UPDATE_EXPERIENCE:
      return {
        ...state,
        userData: {
          ...state.userData,
          experience: state.userData.experience.map((item, idx) =>
            idx === action.payload.index ? action.payload.data : item
          ),
        },
      };
    
    case actionTypes.REMOVE_EXPERIENCE:
      return {
        ...state,
        userData: {
          ...state.userData,
          experience: state.userData.experience.filter((_, idx) => idx !== action.payload),
        },
      };
    
    case actionTypes.ADD_SKILL:
      return {
        ...state,
        userData: {
          ...state.userData,
          skills: [...state.userData.skills, action.payload],
        },
      };
    
    case actionTypes.UPDATE_SKILL:
      return {
        ...state,
        userData: {
          ...state.userData,
          skills: state.userData.skills.map((item, idx) =>
            idx === action.payload.index ? action.payload.data : item
          ),
        },
      };
    
    case actionTypes.REMOVE_SKILL:
      return {
        ...state,
        userData: {
          ...state.userData,
          skills: state.userData.skills.filter((_, idx) => idx !== action.payload),
        },
      };
    
    case actionTypes.ADD_PROJECT:
      return {
        ...state,
        userData: {
          ...state.userData,
          projects: [...state.userData.projects, action.payload],
        },
      };
    
    case actionTypes.UPDATE_PROJECT:
      return {
        ...state,
        userData: {
          ...state.userData,
          projects: state.userData.projects.map((item, idx) =>
            idx === action.payload.index ? action.payload.data : item
          ),
        },
      };
    
    case actionTypes.REMOVE_PROJECT:
      return {
        ...state,
        userData: {
          ...state.userData,
          projects: state.userData.projects.filter((_, idx) => idx !== action.payload),
        },
      };
    
    case actionTypes.SET_THEME:
      return { ...state, theme: { ...state.theme, ...action.payload } };
    
    case actionTypes.SET_SETTINGS:
      return { ...state, settings: { ...state.settings, ...action.payload } };
    
    case actionTypes.SET_SKILL_CATEGORIES:
      return {
        ...state,
        userData: {
          ...state.userData,
          skillCategories: action.payload,
        },
      };
    
    case actionTypes.RESET_ALL:
      return { userData: defaultUserData, theme: defaultTheme, settings: defaultSettings };
    
    case actionTypes.LOAD_DATA:
      return action.payload;
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    userData: defaultUserData,
    theme: defaultTheme,
    settings: defaultSettings,
  });

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioBuilderData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Merge with defaults to ensure all new fields exist
        const mergedData = {
          userData: { 
            ...defaultUserData, 
            ...parsed.userData,
            // Ensure skillCategories is properly initialized
            skillCategories: {
              technical: parsed.userData?.skillCategories?.technical || [],
              tools: parsed.userData?.skillCategories?.tools || [],
              soft: parsed.userData?.skillCategories?.soft || [],
            }
          },
          theme: { ...defaultTheme, ...parsed.theme },
          settings: { ...defaultSettings, ...parsed.settings },
        };
        dispatch({ type: actionTypes.LOAD_DATA, payload: mergedData });
      } catch (error) {
        console.error('Failed to load saved data:', error);
      }
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('portfolioBuilderData', JSON.stringify(state));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch, actionTypes }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
