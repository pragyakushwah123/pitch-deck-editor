import React, { useState } from "react";

function LeftSlider() {
  const [slides, setSlides] = useState([
    { id: 1, title: "Slide 1", content: "This is the content of Slide 1" },
    { id: 2, title: "Slide 2", content: "This is the content of Slide 2" },
    { id: 3, title: "Slide 3", content: "This is the content of Slide 3" },
    { id: 4, title: "Slide 4", content: "This is the content of Slide 4" },
    { id: 5, title: "Slide 5", content: "This is the content of Slide 5" },
  ]);

  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const handleSlideClick = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <div className="flex h-screen ">
      {/* Left Slider */}
      <div className="w-1/4 bg-gray-100 border-r overflow-y-auto">
        <h2 className="text-lg  font-bold p-4">Slides</h2>
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

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">{activeSlide.title}</h1>
        <p>{activeSlide.content}</p>
      </div>
    </div>
  );
}

export default LeftSlider;
