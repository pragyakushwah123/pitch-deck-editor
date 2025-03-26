import { SlideProvider } from './context/SlideContext';
import SlideEditor from './components/Editor/SlideEditor';
import SlidePreview from './components/Preview/SlidePreview';
import { useSlideEditor } from './hooks/useSlideEditor';

function App() {
  return (
    <SlideProvider>
      <AppContent />
    </SlideProvider>
  );
}

function AppContent() {
  const { isPreviewMode, setIsPreviewMode } = useSlideEditor();

  return (
    <div className="min-h-screen bg-gray-50">
      <SlideEditor onPreview={() => setIsPreviewMode(true)} />
      {isPreviewMode && (
        <SlidePreview onClose={() => setIsPreviewMode(false)} />
      )}
    </div>
  );
}

export default App; 