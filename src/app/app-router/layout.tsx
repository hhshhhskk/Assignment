import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>app-router 공통 layout 입니다.</div>
      {children}
    </div>
  );
};

export default Layout;
