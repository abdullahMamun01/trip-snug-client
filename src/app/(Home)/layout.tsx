// import "jsvectormap/dist/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
// import "@/css/satoshi.css";
import "@/css/style.css";

import NavItem from "@/components/Navbar/NavItem";
import Footer from "@/components/home/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavItem />
      {children}
      <Footer />
    </>
  );
}
