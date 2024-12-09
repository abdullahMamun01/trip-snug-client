import { Providers } from "@/provider/Provider";
import { ReactNode } from "react";
import "@/css/style.css";
import toast, { Toaster } from 'react-hot-toast';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex h-screen w-full flex-col">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
