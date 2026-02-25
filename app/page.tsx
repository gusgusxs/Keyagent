import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ListingCard } from "@/components/ListingCard";
import { RECOMMENDED_LISTINGS } from "@/constants/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">ประกาศเช่าแนะนำ</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RECOMMENDED_LISTINGS.map((listing) => (
            <ListingCard 
              key={listing.id}
              {...listing} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}