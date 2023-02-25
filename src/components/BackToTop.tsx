import { useEffect, useState } from "react";

function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else setBackToTopButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          className="fixed bottom-10 right-10 h-10 w-10 rounded-lg bg-red-500 hover:bg-red-600 md:bottom-14  md:right-14 md:h-12 md:w-12"
          onClick={scrollToTop}
          title="backToTop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="m-auto h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
export default BackToTop;
