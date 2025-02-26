import React, { useRef, useEffect, useState } from "react";

const AnimatedShape = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [percentage, setPercentage] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0); // Biến đếm số lần lặp
  const speed = 0.1; // Tốc độ lan tỏa

  // Danh sách màu gradient để thay đổi
  const gradients = [
    "linear-gradient(0deg, red, white)", // Gradient từ đỏ sang trắng
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const drawShape = () => {
      // Xóa canvas trước khi vẽ lại
      context.clearRect(0, 0, canvas.width, canvas.height);
    
      // Tạo gradient từ đỏ sang trắng
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "red"); // Màu đỏ ở trên
      gradient.addColorStop(1, "white"); // Màu trắng ở dưới
    
      // Vẽ hình dạng
      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(canvas.width, 0);
      context.lineTo(canvas.width, (canvas.height * percentage) / 100);
      context.lineTo(0, (canvas.height * percentage) / 100);
      context.closePath();
      context.fill();
    };

    let animationFrameId: number;

    const animate = () => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + speed;

        if (newPercentage >= 100) {
          setColorIndex((prevColorIndex) => (prevColorIndex + 1) % gradients.length);
          setLoopCount((prevCount) => prevCount + 1); // Tăng biến đếm số lần lặp

          if (loopCount >= 2) {
            // Dừng animation sau 3 lần lặp (vì loopCount bắt đầu từ 0)
            cancelAnimationFrame(animationFrameId);
            return 100; // Giữ nguyên trạng thái cuối cùng
          }

          return 0; // Reset về 0 để bắt đầu lặp lại
        }

        return newPercentage;
      });

      drawShape();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function
    return () => cancelAnimationFrame(animationFrameId);
  }, [percentage, colorIndex, loopCount, gradients]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={250}
      style={{
        transform: "skewX(75deg) rotate(-20deg)",
        background: "black",
      }}
    />
  );
};

export default AnimatedShape;