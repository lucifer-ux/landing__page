import React from "react";
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
       
       <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
         
         <div className="column">
          <h2 className="slide-title">{slide.title}
          <p className="slide-text">{slide.description}</p>
          </h2>
          </div>
         <div className="column">
          <img className="slide-image" src={slide.urls} alt="" />
          </div>
         
        </div>
        
      ))}
    </section>
  );
}

export default SliderContent;