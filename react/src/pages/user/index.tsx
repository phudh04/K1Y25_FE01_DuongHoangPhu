import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function User() {
  const [cookies] = useCookies(['user']);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Danh sách các trang không yêu cầu đăng nhập
    const publicRoutes = ['/about', '/circle', '/shape']; // Thêm các trang công khai vào đây

    // Kiểm tra nếu không có cookie 'user' và không phải là trang công khai
    if (!cookies.user && !publicRoutes.includes(location.pathname)) {
      navigate('/login');
    }
  }, [cookies.user, navigate, location.pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}