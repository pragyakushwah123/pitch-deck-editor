import React, { useState } from "react";
import Toolbar from "./Toolbar";
import ThemeSidebar from "./ThemeSidebar";

const MergedSlideEditor = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "Slide 1",
      subtitle: "Subtitle 1",
      body: "This is the content of Slide 1",
      theme: {
        backgroundColor: "#ffffff",
        textColor: "#000000",
        fontSizes: { title: "2rem", subtitle: "1.5rem", body: "1rem" },
      },
      image: null,
    },
    {
      id: 2,
      title: "Slide 2",
      subtitle: "Subtitle 2",
      body: "This is the content of Slide 2",
      theme: {
        backgroundColor: "#f8f9fa",
        textColor: "#212529",
        fontSizes: { title: "2rem", subtitle: "1.5rem", body: "1rem" },
      },
      image: null,
    },
    {
      id: 3,
      title: "Slide 3",
      subtitle: "Subtitle 3",
      body: "This is the content of Slide 3",
      theme: {
        backgroundColor: "#e9ecef",
        textColor: "#495057",
        fontSizes: { title: "2rem", subtitle: "1.5rem", body: "1rem" },
      },
      image: null,
    },
    {
      id: 4,
      title: "Slide 4",
      subtitle: "Subtitle 4",
      body: "This is the content of Slide 4",
      theme: {
        backgroundColor: "#dee2e6",
        textColor: "#343a40",
        fontSizes: { title: "2rem", subtitle: "1.5rem", body: "1rem" },
      },
      image: null,
    },
    {
      id: 5,
      title: "Slide 5",
      subtitle: "Subtitle 5",
      body: "This is the content of Slide 5",
      theme: {
        backgroundColor: "#ced4da",
        textColor: "#6c757d",
        fontSizes: { title: "2rem", subtitle: "1.5rem", body: "1rem" },
      },
      image: null,
    },
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
            slide.id === activeSlide.id
              ? { ...slide, image: reader.result }
              : slide
          )
        );
        setActiveSlide((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThemeChange = (property, value) => {
    setSlides((prevSlides) =>
      prevSlides.map((slide) =>
        slide.id === activeSlide.id
          ? {
              ...slide,
              theme: {
                ...slide.theme,
                [property]:
                  property === "fontSizes"
                    ? { ...slide.theme.fontSizes, ...value }
                    : value,
              },
            }
          : slide
      )
    );
    setActiveSlide((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        [property]:
          property === "fontSizes"
            ? { ...prev.theme.fontSizes, ...value }
            : value,
      },
    }));
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
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
              style={{
                backgroundColor: activeSlide.theme.backgroundColor, // Apply background color
              }}
            >
              <div
                contentEditable
                className="mb-4"
                style={{
                  color: activeSlide.theme.textColor,
                  fontSize: activeSlide.theme.fontSizes.title, // Apply title font size
                }}
                onBlur={(e) => handleTextChange("title", e.target.textContent)}
                suppressContentEditableWarning
              >
                {activeSlide.title}
              </div>

              <div
                contentEditable
                className="mb-8"
                style={{
                  color: activeSlide.theme.textColor,
                  fontSize: activeSlide.theme.fontSizes.subtitle, // Apply subtitle font size
                }}
                onBlur={(e) =>
                  handleTextChange("subtitle", e.target.textContent)
                }
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
                style={{
                  color: activeSlide.theme.textColor,
                  fontSize: activeSlide.theme.fontSizes.body, // Apply body font size
                }}
                onBlur={(e) => handleTextChange("body", e.target.textContent)}
                suppressContentEditableWarning
              >
                {activeSlide.body}
              </div>
            </div>
          </div>
          <ThemeSidebar
            theme={activeSlide.theme}
            onThemeChange={handleThemeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MergedSlideEditor;
