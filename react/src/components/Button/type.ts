export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string; // Cho phép tùy chỉnh class từ bên ngoài
    children: React.ReactNode; // Nội dung nút bấm (text, icon, v.v.)
    disabled?: boolean;
  }
  