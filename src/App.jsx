import { SlideProvider } from "./context/SlideContext";
import MergedSlideEditor from "./components/Editor/MergedSlideEditor"; // Import the merged component
import React from "react";

function App() {
  return (
    <SlideProvider>
      <MergedSlideEditor />
    </SlideProvider>
  );
}



export default App;
