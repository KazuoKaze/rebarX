import React, { useState } from "react";
import { motion } from "framer-motion";

interface SlideData {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    icon: "Infrastructure",
    title: "Building smarter futures",
    description:
      "We are redefining what infrastructure can be — combining advanced composites and intelligent design to create sustainable, resilient frameworks that stand the test of time and serve generations to come.",
  },
  {
    id: 2,
    icon: "Innovation",
    title: "Revolutionary Materials",
    description:
      "Our GFRP rebars represent a breakthrough in construction technology, offering superior strength, corrosion resistance, and longevity compared to traditional steel reinforcement.",
  },
  {
    id: 3,
    icon: "Sustainability",
    title: "Environmental Excellence",
    description:
      "Committed to sustainable construction practices, we develop eco-friendly solutions that reduce environmental impact while maintaining the highest standards of structural integrity.",
  },
  {
    id: 4,
    icon: "Quality",
    title: "Precision Engineering",
    description:
      "Every product undergoes rigorous testing and quality control processes, ensuring that our GFRP rebars meet and exceed international standards for construction applications.",
  },
  {
    id: 5,
    icon: "Partnership",
    title: "Collaborative Growth",
    description:
      "We work closely with architects, engineers, and contractors to deliver customized solutions that meet specific project requirements and drive industry innovation forward.",
  },
  {
    id: 6,
    icon: "Future",
    title: "Tomorrow's Construction",
    description:
      "Leading the transformation of the construction industry through advanced composite materials that offer unmatched durability, performance, and sustainability for future generations.",
  },
];

const FeatureSlider: React.FC = ({ carousel  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate how many cards are visible at once (responsive)
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1200) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2; // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(12, slides.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 3, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 3, 0));
  };

  const cardWidth = 100 / visibleCards; // Percentage width for each visible card
  const translateX = -(currentIndex * cardWidth);

  return (
    <section
      className="section feature-slider-home-b"
      style={{ backgroundColor: carousel.blockBgColor }}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-feature-slider">
          <div className="heading-feature-slider">
            <h2 className="no-margins">{carousel.sectionTitle}</h2>
          </div>
        </div>

        <div className="slider-features w-slider">
          <motion.div
            className="mask-features w-slider-mask"
            animate={{
              x: `${translateX}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50,
            }}
          >
            <motion.div className="carousel-container">
              {carousel.cards.map((slide, index) => (
                <div
                  key={index}
                  className="slide-feature w-slide"
                  style={{
                    flex: `0 0 ${(100 / slides.length) * visibleCards}%`,
                    padding: "0 12px",
                  }}
                >
                  <div
                    className="feature-card-slide"
                    style={{ backgroundColor: slide.cardBgColor }}
                  >
                    <div className="feature-card-slide-top-tile">
                      <div
                        className="icon-feature-card-slide w-embed"
                        style={{ color: slide.smallHeadingColor }}
                      >
                        <p>{slide.smallHeading}</p>
                      </div>
                      <div className="text-h4">{slide.heading}</div>
                    </div>
                    <p className="text-body">{slide.bio}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="testimonial-slider-button left w-slider-arrow-left"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
            style={{
              opacity: currentIndex === 0 ? 0.5 : 1,
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              pointerEvents: "none",
            }}
          >
            <div className="icon-testimonial-arrow w-embed">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1L2 9L10 17"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </button>

          <button
            className="testimonial-slider-button w-slider-arrow-right"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label="Next slide"
            style={{
              opacity: currentIndex === maxIndex ? 0.5 : 1,
              cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
              pointerEvents: "none",
            }}
          >
            <div className="icon-testimonial-arrow w-embed">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 17L9 9L0.999999 1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </button>

          <div className="slider-navgiation-hidden w-slider-nav w-round w-num">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-slider-dot ${
                  index === currentIndex ? "w-active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to position ${index + 1}`}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: index === currentIndex ? "#333" : "#ccc",
                  margin: "0 4px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        data-w-id="4b7ce82f-5605-3ab4-da8e-da37ea74094b"
        className="circle-left-slider-home-b"
      ></div>
      <div
        data-w-id="c0bedb34-4d08-7aa4-1e6a-dec2b11ff24f"
        className="circle-right-slider-home-b"
      ></div>
    </section>
  );
};

export default FeatureSlider;
