import React, { useState } from "react";
import Toolbar from "./Toolbar";
import ThemeSidebar from "./ThemeSidebar";

const MergedSlideEditor = () => {
  const [slides, setSlides] = useState([
    { id: 1, title: "Slide 1", subtitle: "Subtitle 1", body: "This is the content of Slide 1", theme: { backgroundColor: "#ffffff", textColor: "#000000" }, image: null },
    { id: 2, title: "Slide 2", subtitle: "Subtitle 2", body: "This is the content of Slide 2", theme: { backgroundColor: "#ffffff", textColor: "#000000" }, image: null },
    { id: 3, title: "Slide 3", subtitle: "Subtitle 3", body: "This is the content of Slide 3", theme: { backgroundColor: "#ffffff", textColor: "#000000" }, image: null },
  ]);

  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const handleSlideClick = (slide) => {
    setActiveSlide(slide);
  };

  const handleTextChange = (field, value) => {
    setSlides((prevSlides) =>
      prevSlides.map((slide) =>
        slide.id === activeSlide.id ? { ...slide, [field]: value } : slide
      )
    );
    setActiveSlide((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSlides((prevSlides) =>
          prevSlides.map((slide) =>
            slide.id === activeSlide.id ? { ...slide, image: reader.result } : slide
          )
        );
        setActiveSlide((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Slider */}
      <div className="w-1/4 bg-gray-100 border-r overflow-y-auto">
        <h2 className="text-lg font-bold p-4">Slides</h2>
        <ul>
          {slides.map((slide) => (
            <li
              key={slide.id}
              className={`p-4 cursor-pointer ${
                activeSlide.id === slide.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleSlideClick(slide)}
            >
              {slide.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Slide Editor */}
      <div className="flex-1 flex flex-col">
        <Toolbar />
        <div className="flex flex-1">
          <div className="flex-1 p-8">
            <div
              className="w-full h-[600px] rounded-lg shadow-lg p-8"
              style={{ backgroundColor: activeSlide.theme.backgroundColor }}
            >
              <div
                contentEditable
                className="text-5xl font-bold mb-4"
                style={{ color: activeSlide.theme.textColor }}
                onBlur={(e) => handleTextChange("title", e.target.textContent)}
                suppressContentEditableWarning
              >
                {activeSlide.title}
              </div>

              <div
                contentEditable
                className="text-3xl mb-8"
                style={{ color: activeSlide.theme.textColor }}
                onBlur={(e) => handleTextChange("subtitle", e.target.textContent)}
                suppressContentEditableWarning
              >
                {activeSlide.subtitle}
              </div>

              {activeSlide.image && (
                <img
                  src={activeSlide.image}
                  alt="Slide"
                  className="max-w-md mb-8"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4"
              />

              <div
                contentEditable
                className="text-lg"
                style={{ color: activeSlide.theme.textColor }}
                onBlur={(e) => handleTextChange("body", e.target.textContent)}
                suppressContentEditableWarning
              >
                {activeSlide.body}
              </div>
            </div>
          </div>
          <ThemeSidebar />
        </div>
      </div>
    </div>
  );
};

export default MergedSlideEditor;