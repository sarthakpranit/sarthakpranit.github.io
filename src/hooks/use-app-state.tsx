import { createContext, useContext, useReducer, useCallback, ReactNode, useEffect } from 'react';

// State types
interface AppState {
  // Navigation state
  currentPage: string;
  isNavigating: boolean;
  
  // Loading states
  isLoading: boolean;
  loadingMessage: string;
  
  // UI states
  sidebarOpen: boolean;
  modalOpen: boolean;
  modalType: string | null;
  
  // User preferences
  animationsEnabled: boolean;
  reducedMotion: boolean;
  
  // Scroll state
  scrollY: number;
  isScrolled: boolean;
  
  // Viewport state
  viewport: {
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
  
  // Error state
  error: string | null;
}

// Action types
type AppAction =
  | { type: 'SET_CURRENT_PAGE'; payload: string }
  | { type: 'SET_NAVIGATING'; payload: boolean }
  | { type: 'SET_LOADING'; payload: { isLoading: boolean; message?: string } }
  | { type: 'SET_SIDEBAR_OPEN'; payload: boolean }
  | { type: 'SET_MODAL_OPEN'; payload: { open: boolean; type?: string } }
  | { type: 'SET_ANIMATIONS_ENABLED'; payload: boolean }
  | { type: 'SET_REDUCED_MOTION'; payload: boolean }
  | { type: 'SET_SCROLL_Y'; payload: number }
  | { type: 'SET_VIEWPORT'; payload: { width: number; height: number } }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_STATE' };

// Initial state
const initialState: AppState = {
  currentPage: '/',
  isNavigating: false,
  isLoading: false,
  loadingMessage: '',
  sidebarOpen: false,
  modalOpen: false,
  modalType: null,
  animationsEnabled: true,
  reducedMotion: false,
  scrollY: 0,
  isScrolled: false,
  viewport: {
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  },
  error: null,
};

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    
    case 'SET_NAVIGATING':
      return { ...state, isNavigating: action.payload };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        loadingMessage: action.payload.message || '',
      };
    
    case 'SET_SIDEBAR_OPEN':
      return { ...state, sidebarOpen: action.payload };
    
    case 'SET_MODAL_OPEN':
      return {
        ...state,
        modalOpen: action.payload.open,
        modalType: action.payload.open ? action.payload.type || null : null,
      };
    
    case 'SET_ANIMATIONS_ENABLED':
      return { ...state, animationsEnabled: action.payload };
    
    case 'SET_REDUCED_MOTION':
      return { ...state, reducedMotion: action.payload };
    
    case 'SET_SCROLL_Y':
      return {
        ...state,
        scrollY: action.payload,
        isScrolled: action.payload > 10,
      };
    
    case 'SET_VIEWPORT':
      const { width, height } = action.payload;
      return {
        ...state,
        viewport: {
          width,
          height,
          isMobile: width < 768,
          isTablet: width >= 768 && width < 1024,
          isDesktop: width >= 1024,
        },
      };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'RESET_STATE':
      return initialState;
    
    default:
      return state;
  }
}

// Context
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // Convenience methods
  setCurrentPage: (page: string) => void;
  setLoading: (isLoading: boolean, message?: string) => void;
  setSidebarOpen: (open: boolean) => void;
  setModalOpen: (open: boolean, type?: string) => void;
  setError: (error: string | null) => void;
  resetState: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook
export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
};

// Provider component
interface AppProviderProps {
  children: ReactNode;
  initialState?: Partial<AppState>;
}

export const AppProvider = ({ children, initialState: customInitialState }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    ...customInitialState,
  });

  // Convenience methods
  const setCurrentPage = useCallback((page: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  }, []);

  const setLoading = useCallback((isLoading: boolean, message?: string) => {
    dispatch({ type: 'SET_LOADING', payload: { isLoading, message } });
  }, []);

  const setSidebarOpen = useCallback((open: boolean) => {
    dispatch({ type: 'SET_SIDEBAR_OPEN', payload: open });
  }, []);

  const setModalOpen = useCallback((open: boolean, type?: string) => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: { open, type } });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const resetState = useCallback(() => {
    dispatch({ type: 'RESET_STATE' });
  }, []);

  // Handle viewport changes
  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: 'SET_VIEWPORT',
        payload: { width: window.innerWidth, height: window.innerHeight },
      });
    };

    const handleScroll = () => {
      dispatch({ type: 'SET_SCROLL_Y', payload: window.scrollY });
    };

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      dispatch({ type: 'SET_REDUCED_MOTION', payload: e.matches });
    };

    // Initialize
    handleResize();
    handleScroll();
    dispatch({ type: 'SET_REDUCED_MOTION', payload: mediaQuery.matches });

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    mediaQuery.addEventListener('change', handleReducedMotion);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  // Persist some state to localStorage
  useEffect(() => {
    const persistState = {
      animationsEnabled: state.animationsEnabled,
      currentPage: state.currentPage,
    };
    localStorage.setItem('app-state', JSON.stringify(persistState));
  }, [state.animationsEnabled, state.currentPage]);

  // Load persisted state on mount
  useEffect(() => {
    const persisted = localStorage.getItem('app-state');
    if (persisted) {
      try {
        const parsed = JSON.parse(persisted);
        if (parsed.animationsEnabled !== undefined) {
          dispatch({ type: 'SET_ANIMATIONS_ENABLED', payload: parsed.animationsEnabled });
        }
        if (parsed.currentPage) {
          dispatch({ type: 'SET_CURRENT_PAGE', payload: parsed.currentPage });
        }
      } catch (error) {
        console.warn('Failed to parse persisted app state:', error);
      }
    }
  }, []);

  const contextValue: AppContextType = {
    state,
    dispatch,
    setCurrentPage,
    setLoading,
    setSidebarOpen,
    setModalOpen,
    setError,
    resetState,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}; 