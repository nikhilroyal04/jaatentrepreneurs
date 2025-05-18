import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import FloatingButton from "@/components/layouts/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaat Entrepreneurs | Web Development & Digital Solutions Agency",
  description: "Jaat Entrepreneurs is a top web development agency in Meerut, Muzaffarnagar, and India, offering custom websites, e-commerce solutions, and digital marketing.",
   keywords:[
    // 🔥 High-Intent + Geo-Targeted (Top Priority)
    "Jaat Entrepreneurs",
    "Jaat Entrepreneur",
    "jaatentrepreneur",
    "jaatentrepreneurs",
    "Jaat",
    "Jaat Developer",
    "Popular Jaat Entrepreneurs",
    "Jaat Entrepreneurs Meerut",
    "Jaat Entrepreneurs Muzaffarnagar",
    "Jaat Entrepreneurs India",
    "Jaat Entrepreneurs Web Development",
    "Jaat Entrepreneurs Digital Marketing",
    "Jaat Entrepreneurs E-commerce",
    "Jaat Entrepreneurs Mobile App Development",
    "Jaat Entrepreneurs Software Development",
    "Jaat Entrepreneurs Web Design",
    "Web Development Company in Meerut",
    "Web Development Company in Muzaffarnagar",
    "Web Design Agency in Meerut",
    "Web Design Agency in Muzaffarnagar",
    "Mobile App Development Company in Meerut",
    "Mobile App Development Company in Muzaffarnagar",
    "SEO Services in Meerut",
    "SEO Services in Muzaffarnagar",
    "Digital Marketing Company in Meerut",
    "Digital Marketing Company in Muzaffarnagar",
    "Cloud Services in Meerut",
    "Cloud Services in Muzaffarnagar",
    "App Development Agency in Meerut",
    "App Development Agency in Muzaffarnagar",
    "Custom Software Development in Meerut",
    "Custom Software Development in Muzaffarnagar",
    "Best IT Company in Meerut",
    "Best IT Company in Muzaffarnagar",
  
    // ⚙️ Stack / Framework / Service Specific
    "MERN Stack Development Meerut",
    "MERN Stack Development Muzaffarnagar",
    "React JS Developers in Meerut",
    "React JS Developers in Muzaffarnagar",
    "Next.js Development Company Meerut",
    "Next.js Development Company Muzaffarnagar",
    "Node.js Backend Development Meerut",
    "Node.js Backend Development Muzaffarnagar",
    "API Development in Meerut",
    "API Development in Muzaffarnagar",
    "Frontend Development in Meerut",
    "Frontend Development in Muzaffarnagar",
    "SaaS Development Company Meerut",
    "SaaS Development Company Muzaffarnagar",
    "Headless CMS Developers in Meerut",
    "Headless CMS Developers in Muzaffarnagar",
  
    // ⚡ Performance + Security + Hosting
    "Website Speed Optimization Meerut",
    "Website Speed Optimization Muzaffarnagar",
    "Secure Web Development in Meerut",
    "Secure Web Development in Muzaffarnagar",
    "Cloud Hosting Solutions in Meerut",
    "Cloud Hosting Solutions in Muzaffarnagar",
    "AWS Cloud Services Meerut",
    "AWS Cloud Services Muzaffarnagar",
  
    // 🧠 Bonus Local Search Value
    "IT Services in Meerut",
    "IT Services in Muzaffarnagar",
    "Software Company in Meerut",
    "Software Company in Muzaffarnagar",
    "Top Developers in Meerut",
    "Top Developers in Muzaffarnagar",
    "Website Designers in Meerut",
    "Website Designers in Muzaffarnagar",
    "Affordable Web Development Meerut",
    "Affordable Web Development Muzaffarnagar"
  ],
  authors: [{ name: "Jaat Entrepreneurs", url: "https://jaatentrepreneurs.com" }],
  creator: "Jaat Entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jaatentrepreneurs.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jaat Entrepreneurs",
              image: "https://jaatentrepreneurs.com/logo.png",
              url: "https://jaatentrepreneurs.com/",
              telephone: "+91-9068552519",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jaat Entrepreneurs",
                addressLocality: "Meerut",
                addressRegion: "Uttar Pradesh",
                postalCode: "250001",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.9845",
                longitude: "77.7064"
              },
              description: "Jaat Entrepreneurs is a leading web development agency in Meerut, Muzaffarnagar, and India, specializing in custom websites, e-commerce, and digital marketing.",
              areaServed: ["Meerut", "Muzaffarnagar", "India"],
              sameAs: [
                "https://www.facebook.com/jaatentrepreneurs",
                "https://www.linkedin.com/company/jaatentrepreneurs"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
