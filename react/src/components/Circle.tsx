import { useState, useEffect, useRef } from "react";

const Circle = () => {
  const [size, setSize] = useState(20);
  const growingRef = useRef(true); // Dùng useRef để lưu trạng thái

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (growingRef.current) {
          if (prevSize >= 400) {
            growingRef.current = false;
            return prevSize - 5;
          }
          return prevSize + 5;
        } else {
          if (prevSize <= 20) {
            growingRef.current = true;
            return prevSize + 5;
          }
          return prevSize - 5;
        }
      });
    }, 50);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []); // Chạy một lần duy nhất khi component mount

  // Styles được viết trực tiếp trong component
  const circleStyle: React.CSSProperties = {
    backgroundColor: "blue",
    borderRadius: "50%",
    transition: "width 0.1s linear, height 0.1s linear",
    width: `${size}px`,
    height: `${size}px`,
    position: "absolute", // Để căn giữa màn hình
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Căn giữa
  };

  return <div style={circleStyle} />;
};

export default Circle;