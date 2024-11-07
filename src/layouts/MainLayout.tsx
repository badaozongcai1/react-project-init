// src/layouts/MainLayout.jsx - 主布局组件
import { Outlet, Link } from "react-router-dom";
import { Suspense, memo } from "react";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="hover:text-blue-600">
                首页
              </Link>
              <Link to="/products" className="hover:text-blue-600">
                产品
              </Link>
              <Link to="/profile" className="hover:text-blue-600">
                个人中心
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Suspense fallback={<div>加载中...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-4 px-4">© 2024 示例网站</div>
      </footer>
    </div>
  );
};

export default memo(MainLayout);
