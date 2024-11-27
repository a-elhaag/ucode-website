import './globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import Header from '../components/Header';
import Footer from "@/components/Footer";


export const metadata = {
  title: 'U-Code',
  description: `U-Code: Redefining Online Learning Welcome to U-Code, where education meets innovation. Our platform offers live, online courses tailored to enhance your coding skills and empower your future. Explore a variety of interactive classes, connect with expert instructors, and embark on a learning journey designed for success. Whether you're a beginner or an aspiring professional, U-Code is here to fix your path to excellence.

  Features:

    Live online courses with real-time interaction.
Expert instructors to guide you every step of the way.
Intuitive course management system for seamless learning.
  Future-ready platform, preparing for AI integration and online coding tools.
Shape your future with U-Code—where knowledge and technology converge.`,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/Favicon.png" type="image/svg+xml" />
        </head>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
