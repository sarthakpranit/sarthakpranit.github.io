import { useState, useEffect } from "react";
import { loadAllCaseStudies, loadCaseStudyMetadata } from "@/utils/contentLoader";

const TestContent = () => {
  const [allStudies, setAllStudies] = useState<any[]>([]);
  const [metadata, setMetadata] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      console.log('Testing content loader...');
      
      const studies = loadAllCaseStudies();
      console.log('All studies:', studies);
      setAllStudies(studies);
      
      const meta = loadCaseStudyMetadata();
      console.log('Metadata:', meta);
      setMetadata(meta);
      
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading test...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Content Loader Test</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">All Studies ({allStudies.length})</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(allStudies, null, 2)}
        </pre>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Metadata ({metadata.length})</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(metadata, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TestContent; 