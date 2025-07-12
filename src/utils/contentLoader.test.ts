// Simple test for content loader functionality
import { loadAllCaseStudies, loadCaseStudyById, loadCaseStudyMetadata } from './contentLoader';

// Test function to verify content loading
export function testContentLoader() {
  console.log('Testing content loader...');
  
  try {
    // Test loading all case studies
    const allStudies = loadAllCaseStudies();
    console.log('All case studies loaded:', allStudies.length);
    
    // Test loading metadata
    const metadata = loadCaseStudyMetadata();
    console.log('Case study metadata:', metadata);
    
    // Test loading specific case study
    if (metadata.length > 0) {
      const firstStudy = loadCaseStudyById(metadata[0].id);
      console.log('First case study loaded:', firstStudy?.frontmatter.title);
    }
    
    return true;
  } catch (error) {
    console.error('Content loader test failed:', error);
    return false;
  }
} 