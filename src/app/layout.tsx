import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex h-screen w-full flex-col">{children}</div>
      </body>
    </html>
  );
}
