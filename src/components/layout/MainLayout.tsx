import { Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

// Global help/chat icon
export function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh_-_3.5rem_-_10rem)] pb-[4rem]">
        <Outlet />
      </main>
      <Footer />

      /* Fixed help/chat icon */
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center bg-[color:#4A0E24] text-[color:#FFFFFF] rounded-full drop-shadow-lg hover:bg-[color:#3E0F22] transition-colors">
          <span className="text-[0.75rem]">?</span>
        </div>
      </div>
    </>
  );
}