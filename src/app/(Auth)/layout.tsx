import { ReactNode } from "react";
import "@/css/style.css";
export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="flex h-screen w-full flex-col">{children}</div>;
}
