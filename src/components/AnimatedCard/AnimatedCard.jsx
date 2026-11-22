import { useState } from "react";

export function AnimatedCard({ children, onClose, className = "" }) {
  const [isClosing, setIsClosing] = useState(false);

  function requestClose() {
    setIsClosing(true);
  }

  function handleAnimationEnd(e) {
    if (e.target === e.currentTarget && isClosing) {
      onClose();
    }
  }

  return (
    <div
      className={`${isClosing ? "closing" : "opening"} ${className}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children({requestClose})}
    </div>
  );
}
