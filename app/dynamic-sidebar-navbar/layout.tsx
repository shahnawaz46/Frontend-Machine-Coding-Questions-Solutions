// components
import Sidebar from "@/src/components/dynamicSidebarNavbar/Sidebar";
import Navbar from "@/src/components/dynamicSidebarNavbar/Navbar";
import { childrenType } from "@/src/interface/common";

export default function Layout({ children }: childrenType) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex w-full h-[calc(100%-64px)]">
        <Sidebar />
        <main className="min-h-full flex-1 flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
}
