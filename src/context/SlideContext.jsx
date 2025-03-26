import { createContext, useContext, useReducer } from 'react';

const SlideContext = createContext();

const initialState = {
  slide: {
    title: 'Click to edit title',
    subtitle: 'Click to edit subtitle',
    body: 'Click to edit body text',
    image: null,
    theme: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      fontSizes: {
        title: '2.5rem',
        subtitle: '1.8rem',
        body: '1rem'
      }
    },
    elements: [] // For storing positions and sizes of elements
  }
};

const slideReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        slide: {
          ...state.slide,
          [action.payload.field]: action.payload.value
        }
      };
    
    case 'UPDATE_THEME':
      return {
        ...state,
        slide: {
          ...state.slide,
          theme: {
            ...state.slide.theme,
            ...action.payload
          }
        }
      };
    
    case 'UPDATE_IMAGE':
      return {
        ...state,
        slide: {
          ...state.slide,
          image: action.payload
        }
      };
    
    default:
      return state;
  }
};

export const SlideProvider = ({ children }) => {
  const [state, dispatch] = useReducer(slideReducer, initialState);

  return (
    <SlideContext.Provider value={{ state, dispatch }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
}; 