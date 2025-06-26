import { Inter } from "next/font/google";
import "./globals.css"; 
import { ThemeProvider } from "@/components/ui/theme-provider";
import Headerr from "@/components/ui/header"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs' 
 
const inter = Inter({ subsets : ["latin"]}) ; 


export const metadata = {
  title: "AIspire360",
  description: "A 360 deg solution for your career",
};

export default function RootLayout({ children }) {
  return ( 
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      > 
      
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > 
          <Headerr></Headerr>
          <main className = "min-h-screen">{children}</main> 
          <footer className="bg-muted/50 py-12">
            <div className="container mx auto px-4 text-center">
              BY AYUSH GOYAL 
            </div>
          </footer>
          </ThemeProvider>
      </body>
    </html> 
    </ClerkProvider>
  );
}
