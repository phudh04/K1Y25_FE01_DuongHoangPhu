export interface InputProps {
    id: string;
    type?: "text" | "email" | "password" | "number"; // Các kiểu input phổ biến
    placeholder?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string; // Cho phép tùy chỉnh class từ bên ngoài
  }
  