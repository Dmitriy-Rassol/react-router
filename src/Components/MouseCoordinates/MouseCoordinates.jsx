import { useState, useEffect } from "react";

const MouseCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div>
        <p>
          Координаты курсора: X={coordinates.x}, Y={coordinates.y}
        </p>
      </div>
    </>
  );
};

export default MouseCoordinates;
