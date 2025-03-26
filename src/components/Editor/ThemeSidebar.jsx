import { useSlideContext } from '../../context/SlideContext';

const ThemeSidebar = () => {
  const { state, dispatch } = useSlideContext();
  const { theme } = state.slide;

  const handleThemeChange = (property, value) => {
    dispatch({
      type: 'UPDATE_THEME',
      payload: { [property]: value }
    });
  };

  const handleFontSizeChange = (element, value) => {
    dispatch({
      type: 'UPDATE_THEME',
      payload: {
        fontSizes: {
          ...theme.fontSizes,
          [element]: value + 'rem'
        }
      }
    });
  };

  return (
    <div className="w-64 bg-gray-100 p-4 border-l border-gray-200">
      <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
      
      {/* Background Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Background Color
        </label>
        <input
          type="color"
          value={theme.backgroundColor}
          onChange={(e) => handleThemeChange('backgroundColor', e.target.value)}
          className="w-full h-10 rounded cursor-pointer"
        />
      </div>

      {/* Text Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Text Color
        </label>
        <input
          type="color"
          value={theme.textColor}
          onChange={(e) => handleThemeChange('textColor', e.target.value)}
          className="w-full h-10 rounded cursor-pointer"
        />
      </div>

      {/* Font Sizes */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Font Sizes</h3>
        
        <div className="space-y-3">
          {/* Title Font Size */}
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={parseFloat(theme.fontSizes.title)}
              onChange={(e) => handleFontSizeChange('title', e.target.value)}
              className="w-full"
            />
            <span className="text-sm">{theme.fontSizes.title}</span>
          </div>

          {/* Subtitle Font Size */}
          <div>
            <label className="block text-sm mb-1">Subtitle</label>
            <input
              type="range"
              min="1"
              max="4"
              step="0.1"
              value={parseFloat(theme.fontSizes.subtitle)}
              onChange={(e) => handleFontSizeChange('subtitle', e.target.value)}
              className="w-full"
            />
            <span className="text-sm">{theme.fontSizes.subtitle}</span>
          </div>

          {/* Body Font Size */}
          <div>
            <label className="block text-sm mb-1">Body</label>
            <input
              type="range"
              min="0.8"
              max="2"
              step="0.1"
              value={parseFloat(theme.fontSizes.body)}
              onChange={(e) => handleFontSizeChange('body', e.target.value)}
              className="w-full"
            />
            <span className="text-sm">{theme.fontSizes.body}</span>
          </div>
        </div>
      </div>

      {/* Preset Themes */}
      {/* <div className="mb-4">
        <h3 className="font-medium mb-2">Preset Themes</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              handleThemeChange('backgroundColor', '#ffffff');
              handleThemeChange('textColor', '#000000');
            }}
            className="p-2 bg-white border border-gray-300 rounded text-sm"
          >
            Light
          </button>
          <button
            onClick={() => {
              handleThemeChange('backgroundColor', '#1a1a1a');
              handleThemeChange('textColor', '#ffffff');
            }}
            className="p-2 bg-gray-800 text-white border border-gray-700 rounded text-sm"
          >
            Dark
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ThemeSidebar; 