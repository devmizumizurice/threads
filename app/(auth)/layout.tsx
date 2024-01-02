import Providers from "@/components/shared/Providers";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A Next.js 14 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-dark-1 flex justify-center items-center h-screen`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
};
export default RootLayout;
