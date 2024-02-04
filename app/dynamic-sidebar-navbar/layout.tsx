import { Inter } from "next/font/google";
import Sidebar from "@/src/components/dynamicSidebarNavbar/Sidebar";
import Navbar from "@/src/components/dynamicSidebarNavbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
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
