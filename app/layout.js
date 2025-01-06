import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import Script from "next/script";
import Footer from "./Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DevGallery | Your Programming Gallery",

  description:
    "DevGallery is your go-to resource for programming tips, roadmaps, and tutorials. Learn about JavaScript, Python, HTML, CSS, Java, and more. Perfect for developers of all levels.",
  keywords: [
    "programming",
    "coding",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Java",
    "developer roadmaps",
    "coding tips",
    "programming tutorials",
    "web development",
    "software development",
    "Programming  posts",
    "Programming  tips",
    "Programming  resources",
    "Programming  tutorials",
    "Programming  roadmaps",
    "Programming  guides",
    "php",
    "rust",
    "c++",
    "c#",
    "ruby",
    "swift",
    "kotlin",
    "dart",
    "go",
    "typescript",
    "react",
    "vue",
    "variables",
    "data  types",
    "operators",
    "control  structures",
    "functions",
    "arrays",
    "objects",
    "classes",
    "modules",
    "promises",
    "async/await",
    "error  handling",
    "testing",
    "debugging",
  ],
  authors: [{ name: "Massa Medi", url: "https://www.devgallary.com" }],
  openGraph: {
    title: "DevGallery | Your Programming DevGallery ",
    description:
      "DevGallery is your go-to resource for programming tips, roadmaps, and tutorials. Learn about JavaScript, Python, HTML, CSS, Java, and more.",
    url: "https://www.devgallary.com",
    siteName: "DevGallery",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.devgallary.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#2d3748",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics-external"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SL6DSLH2WN"
        />

        {/* Initialize gtag */}
        <Script id="google-analytics-inline" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SL6DSLH2WN');
        `}
        </Script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
