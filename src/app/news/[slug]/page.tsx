// src/app/news/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import AboutBanner from "@/components/about/AboutBanner";

// This would typically come from a CMS or database
const getArticleBySlug = (slug: string) => {
  // Sample article data - replace with actual data fetching
  return {
    title: "Top 10 Branding Trends to Watch in 2025",
    slug: "top-branding-trends-2025",
    excerpt: "Discover the emerging branding trends that will shape how businesses connect with their audiences in 2025.",
    content: `
      <p>The branding landscape continues to evolve at a rapid pace, driven by technological advancements, changing consumer behaviors, and new market dynamics. As we move further into 2025, brands must stay ahead of these trends to remain relevant and competitive.</p>
      
      <h2>1. Hyper-Personalization</h2>
      <p>With advances in AI and data analytics, brands can now create highly personalized experiences for consumers. This goes beyond simply addressing customers by name - it's about delivering content, products, and services tailored to individual preferences and behaviors.</p>
      
      <h2>2. Purpose-Driven Branding</h2>
      <p>Consumers increasingly support brands that align with their values. Brands that authentically demonstrate their commitment to social causes, sustainability, and ethical practices will forge stronger connections with their audience.</p>
      
      <h2>3. Minimalist Design</h2>
      <p>The trend toward simplicity continues to gain momentum. Clean, uncluttered designs that focus on essential elements help brands cut through the noise and create memorable visual identities.</p>
      
      <h2>4. Voice and Audio Branding</h2>
      <p>With the proliferation of voice assistants and podcasts, brands are developing distinctive audio identities. This includes custom sounds, jingles, and voice characteristics that make brands recognizable even in audio-only environments.</p>
      
      <h2>5. Immersive Brand Experiences</h2>
      <p>Augmented reality (AR) and virtual reality (VR) technologies are creating new opportunities for brands to deliver immersive experiences. These technologies allow consumers to interact with products and services in novel ways, creating deeper engagement.</p>
      
      <h2>6. Human-Centered Designs</h2>
      <p>Brands are increasingly focusing on creating designs that prioritize human emotions and experiences. This approach emphasizes empathy and understanding of user needs, resulting in more intuitive and emotionally resonant brand interactions.</p>
      
      <h2>7. Dynamic Brand Identities</h2>
      <p>Static logos are giving way to flexible, adaptable brand identities that can change based on context while maintaining recognizability. These dynamic systems allow brands to remain fresh and relevant across various platforms and touchpoints.</p>
      
      <h2>8. Authenticity and Transparency</h2>
      <p>Consumers value authenticity more than ever. Brands that communicate honestly about their practices, admit mistakes, and provide transparent information about their products and services build trust and loyalty.</p>
      
      <h2>9. Sustainable Branding</h2>
      <p>Environmental consciousness continues to influence branding decisions. From eco-friendly packaging to climate-neutral operations, sustainability is becoming a core element of brand identity rather than just a marketing angle.</p>
      
      <h2>10. Cross-Cultural Branding</h2>
      <p>As global markets become more interconnected, brands are developing identities that resonate across cultures while respecting local sensibilities. This requires a deep understanding of cultural nuances and values.</p>
      
      <p>By embracing these trends, brands can create more meaningful connections with their audiences and stand out in an increasingly competitive marketplace. However, it's important to remember that trends should be adapted to align with your brand's core values and audience expectations rather than followed blindly.</p>
    `,
    image: "/images/news/branding-trends.jpg",
    category: "Branding",
    date: "May 18, 2025",
    author: "Sarah Johnson",
    authorTitle: "Senior Brand Strategist",
    authorImage: "/images/team/sarah-johnson.jpg"
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  
  return {
    title: `${article.title} | SortBrands News`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  return (
    <main>
      {/* Banner */}
      <AboutBanner
        title="News & Insights"
        subtitle=""
        backgroundImage="/images/contact-us-banner.jpg"
        breadcrumbs={[
          { label: "Home", url: "/" },
          { label: "News & Insights", url: "/news" },
          { label: article.title }
        ]}
      />
      
      <article className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              href="/news" 
              className="inline-flex items-center text-gray-600 hover:text-[#D4AF34] transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to News
            </Link>
          </div>
          
          {/* Article header */}
          <header className="max-w-4xl mx-auto mb-8">
            <div className="inline-block bg-[#D4AF34] text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
              {article.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {article.date}
              </div>
              
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{article.author}</p>
                  <p className="text-xs text-gray-500">{article.authorTitle}</p>
                </div>
              </div>
              
              {/* Share buttons */}
              <div className="flex items-center ml-auto">
                <span className="text-sm mr-2 flex items-center">
                  <Share2 className="w-4 h-4 mr-1" /> Share:
                </span>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#D4AF34] hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#D4AF34] hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#D4AF34] hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </header>
          
          {/* Featured image */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-md">
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700 font-medium">Tags:</span>
                <Link href="/news?tag=branding" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors">
                  Branding
                </Link>
                <Link href="/news?tag=trends" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors">
                  Trends
                </Link>
                <Link href="/news?tag=design" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors">
                  Design
                </Link>
                <Link href="/news?tag=marketing" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors">
                  Marketing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related articles section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <div className="w-16 h-1 bg-[#D4AF34] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample related articles - would come from actual related content */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                {/* Image container */}
                <div className="relative pt-[60%] overflow-hidden">
                  <Image
                    src={`/images/news/related-${i}.jpg`}
                    alt="Related article"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-[#D4AF34]">
                      {["Branding", "Design", "Digital Marketing"][i-1]}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {[
                      "How to Build a Memorable Brand Identity",
                      "Designing for Accessibility: Best Practices",
                      "Digital Marketing Metrics That Actually Matter"
                    ][i-1]}
                  </h3>
                  
                  <Link 
                    href={`/news/related-article-${i}`}
                    className="inline-flex items-center text-[#D4AF34] text-sm font-medium hover:text-black transition-colors"
                  >
                    Read Article <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}