// src/app/news/page.tsx
import { Metadata } from "next";
import AboutBanner from "@/components/about/AboutBanner";
import NewsGrid from "@/components/news/NewsGrid";

export const metadata: Metadata = {
  title: "News & Insights | Sortbrands",
  description: "Stay updated with the latest news, insights, and trends in marketing, design, and branding from Sortbrands.",
};

export default function NewsPage() {
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="News & Insights"
        subtitle="Stay updated with the latest trends, insights, and news in the world of branding and marketing."
        backgroundImage="/images/contact-us-banner.jpg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "News & Insights" }
        ]}
      />
      
      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-black mb-3">Latest Articles</h2>
            <div className="w-16 h-1 bg-[#D4AF34]"></div>
          </div>
          
          <NewsGrid />
        </div>
      </section>
    </main>
  );
}