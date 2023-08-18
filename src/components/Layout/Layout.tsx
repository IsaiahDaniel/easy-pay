import Sidebar from "../shared/Sidebar/Sidebar";
import Header from "../shared/Header/Header";
import { useState } from "react";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex items-center justify-between">
      <section className="hidden md:flex">
        <Sidebar />
      </section>
      <section className="flex-1">
        <div className="md:ml-[18%]">
          <Header />
        </div>
        <div className="md:ml-[18%] px-2">
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;
