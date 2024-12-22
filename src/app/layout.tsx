import { ReactNode } from "react";
import "@/css/style.css";
import toast, { Toaster } from "react-hot-toast";
import { Providers } from "@/provider/Provider";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen w-full flex-col">
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}
