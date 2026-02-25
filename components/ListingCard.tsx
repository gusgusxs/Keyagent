import { Heart, EyeOff, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ListingProps } from '@/types/property';

export function ListingCard({
  id,
  title,
  price,
  location,
  specs,
  images,  // 🌟 รับเป็น Array มาถูกต้องแล้ว
  verified = false,
  pricePerSqm
}: ListingProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
      {/* Header / Agent Name */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100">
        <span className="font-medium text-sm text-gray-900">สุริยา เบียดนอก</span>
        {verified && <CheckCircle2 className="h-4 w-4 text-green-500" fill="currentColor" stroke="white" />}
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gray-100 group">
        <Link href={`/property/${id}`} className="block w-full h-full">
          {/* 🌟 แก้ไขตรงนี้: เติม [0] เพื่อดึงรูปแรกใน Array มาเป็นหน้าปก */}
          <img
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Overlay Icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-1.5 bg-black/30 rounded-full hover:bg-black/50 backdrop-blur-sm">
            <EyeOff className="h-5 w-5 text-white" />
          </button>
          <button className="p-1.5 bg-black/30 rounded-full hover:bg-black/50 backdrop-blur-sm">
            <Heart className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Carousel Dots Placeholder */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="text-xl font-bold text-gray-900">{price} <span className="text-sm font-normal text-gray-500">/เดือน</span></h3>
          <span className="text-xs text-gray-400">{pricePerSqm}</span>
        </div>

        <Link href={`/property/${id}`}>
          <h4 className="font-bold text-gray-900 mb-1 hover:text-red-600 transition-colors line-clamp-1">{title}</h4>
        </Link>
        <p className="text-sm text-gray-500 mb-3">{location}</p>

        <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded text-xs">{specs}</span>
        </div>

        <Link href={`/property/${id}`} className="w-full py-2.5 rounded-full border border-gray-900 font-medium text-sm hover:bg-gray-50 flex items-center justify-center gap-2 text-gray-900">
          รายละเอียด
        </Link>
      </div>
    </div>
  );
}