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
    author: "Kelvin Musioma",
    authorTitle: "Chairman & CEO",
    authorImage: "/images/team/kelvin.jpg"
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  
  return {
    title: `${article.title} | Sortbrands News`,
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
    </main>
  );
}


{/* <section className="py-16 relative overflow-hidden bg-white">
 
  <div 
    className="absolute inset-0 z-0 opacity-5" 
    style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0 h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")', 
    }}
  ></div>
  
 
  <div className="absolute inset-0 z-0">
    
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#D4AF34]/10"></div>
    
   
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D4AF34]/5"></div>
    

    <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF34]/30 to-transparent"></div>
    <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF34]/30 to-transparent"></div>
  </div>
  

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-10 relative">
    
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D4AF34] rounded-tl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D4AF34] rounded-br-2xl"></div>
      
      <div className="text-center">
        <div className="w-16 h-1 bg-[#D4AF34] mx-auto mb-6"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Take Your Brand to the <span className="text-[#D4AF34]">Next Level?</span>
        </h2>
        
        <p className="text-gray-600 text-lg mb-8">
          Our team of experts is ready to help you achieve your marketing and branding goals.
          Let's create something amazing together.
        </p>
        
        <Link 
          href="/contacts" 
          className="inline-flex items-center bg-[#D4AF34] hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-md"
        >
          Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
</section> */}