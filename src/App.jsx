import { SlideProvider } from './context/SlideContext';
import SlideEditor from './components/Editor/SlideEditor';
import SlidePreview from './components/Preview/SlidePreview';
import { useSlideEditor } from './hooks/useSlideEditor';
import LeftSlider from './components/Editor/LeftSlider';

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
    <div className="flex min-h-screen bg-gray-50">
      {/* LeftSlider positioned on the left */}
      <LeftSlider />

      {/* Main content area */}
      <div className="flex-1">
        <SlideEditor onPreview={() => setIsPreviewMode(true)} />
        {isPreviewMode && (
          <SlidePreview onClose={() => setIsPreviewMode(false)} />
        )}
      </div>
    </div>
  );
}

export default App;