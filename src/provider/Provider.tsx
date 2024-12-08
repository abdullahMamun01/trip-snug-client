"use client";
import Loader from "@/components/Dashboard/common/Loader";
// app/providers.tsx

import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true); // Trigger loading animation when the route changes
    const timer = setTimeout(() => setIsLoading(false), 300); // Simulate a delay

    return () => clearTimeout(timer); // Cleanup timer
  }, [pathname]);
  const queryClient = new QueryClient();
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          {isLoading && <Loader />}
          {isLoading === false && children}
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
