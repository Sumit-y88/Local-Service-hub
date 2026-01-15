import { useEffect, useState } from "react";

const texts = [
  "Electricians",
  "Plumbers",
  "Carpenters",
  "AC Technicians",
  "Home Keeper",
];


const TypeEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    if (!currentText) return;

    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      // Pause before switching mode
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <h2 className="mt-6 mb-3 text-2xl md:text-4xl text-black">
      We have{" "}
      <span className=" inline
    min-w-35
    sm:min-w-45
    md:min-w-75
    text-blue-500
    text-left">{text}</span>
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default TypeEffect;