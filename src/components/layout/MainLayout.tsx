import { Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh_-_3.5rem_-_10rem)] pb-[4rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
