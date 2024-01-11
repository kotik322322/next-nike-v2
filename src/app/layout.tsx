import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike Store",
  description: "We will make your wallet cry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f6f6f6]`}>
        <Layout>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style:{
                  background: 'black',
                  color:'white'
                }
              }
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
