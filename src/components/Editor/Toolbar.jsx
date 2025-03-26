import { useSlideContext } from '../../context/SlideContext';

const Toolbar = () => {
  const { dispatch } = useSlideContext();

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Export functionality to be implemented');
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center space-x-4">
        {/* Save Button */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            // TODO: Implement save functionality
            console.log('Save functionality to be implemented');
          }}
        >
          Save
        </button>

        {/* Preview Button */}
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          onClick={() => {
            // TODO: Implement preview functionality
            console.log('Preview functionality to be implemented');
          }}
        >
          Preview
        </button>

        {/* Export Button */}
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleExport}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Toolbar; 