// src/components/AuthGuard.jsx - 权限控制组件
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  // const isAuthenticated = localStorage.getItem("token"); // 示例认证检查
  const isAuthenticated = "good job"; // 示例认证检查
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
export default AuthGuard;
