// Password configuration using environment variables (Vite style)

// Fallback passwords (use only if env vars are not set)
const FALLBACK_PASSWORDS = {
  global: 'design2025',
  1: 'design2025',
  2: 'design2025', 
  3: 'design2025'
} as const;

/**
 * Get password for a specific case study from environment variables
 * Falls back to predefined passwords if env vars are not set
 */
export const getPassword = (caseStudyId?: number): string => {
  // Try to get individual case study password from env
  if (caseStudyId) {
    const envPassword = import.meta.env[`VITE_CASE_STUDY_${caseStudyId}_PASSWORD` as keyof ImportMetaEnv];
    if (envPassword) {
      return envPassword as string;
    }
  }
  
  // Try to get global password from env
  const globalEnvPassword = import.meta.env.VITE_GLOBAL_PASSWORD;
  if (globalEnvPassword) {
    return globalEnvPassword as string;
  }
  
  // Fallback to hardcoded passwords
  if (caseStudyId && FALLBACK_PASSWORDS[caseStudyId as keyof typeof FALLBACK_PASSWORDS]) {
    return FALLBACK_PASSWORDS[caseStudyId as keyof typeof FALLBACK_PASSWORDS];
  }
  
  return FALLBACK_PASSWORDS.global;
};

/**
 * Get session key for a specific case study
 */
export const getSessionKey = (caseStudyId?: number): string => {
  return caseStudyId ? `case-study-${caseStudyId}` : 'case-study-global';
};

/**
 * Check if password protection is enabled
 */
export const isPasswordProtectionEnabled = (): boolean => {
  // Check if any password is configured
  return !!(
    import.meta.env.VITE_GLOBAL_PASSWORD ||
    import.meta.env.VITE_CASE_STUDY_1_PASSWORD ||
    import.meta.env.VITE_CASE_STUDY_2_PASSWORD ||
    import.meta.env.VITE_CASE_STUDY_3_PASSWORD ||
    import.meta.env.VITE_DISABLE_PASSWORD_PROTECTION !== 'true'
  );
}; 