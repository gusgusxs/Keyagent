"use client";

import { useState } from "react";
import { ImageIcon, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  // ป้องกัน Error ถ้าไม่มีรูป
  if (!images || images.length === 0) return null;

  return (
    <>
      {/* 1. Grid 5 รูปแรก (หน้าปกติ) */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[300px] md:h-[480px] mb-12 rounded-3xl overflow-hidden">
        {/* รูปหลัก (ซ้าย) */}
        <div className="md:col-span-2 md:row-span-2 h-full cursor-pointer" onClick={() => setIsOpen(true)}>
          <img src={images[0]} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        {/* รูปเล็ก 1 */}
        <div className="hidden md:block col-span-1 row-span-1 h-full bg-gray-100 cursor-pointer" onClick={() => setIsOpen(true)}>
          {images[1] && <img src={images[1]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />}
        </div>

        {/* รูปเล็ก 2 */}
        <div className="hidden md:block col-span-1 row-span-1 h-full bg-gray-100 cursor-pointer" onClick={() => setIsOpen(true)}>
           {images[2] && <img src={images[2]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />}
        </div>

        {/* รูปเล็ก 3 */}
        <div className="hidden md:block col-span-1 row-span-1 h-full bg-gray-100 cursor-pointer" onClick={() => setIsOpen(true)}>
           {images[3] && <img src={images[3]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />}
        </div>

        {/* รูปเล็ก 4 + ปุ่มดูรูปทั้งหมด */}
        <div className="hidden md:block col-span-1 row-span-1 h-full relative group cursor-pointer overflow-hidden bg-gray-100" onClick={() => setIsOpen(true)}>
           {images[4] && <img src={images[4]} alt="Gallery" className="w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-500" />}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-2 text-white font-medium border-2 border-white px-5 py-2.5 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
              <ImageIcon className="w-4 h-4" /> ดูรูปทั้งหมด ({images.length})
            </span>
          </div>
        </div>
      </div>

      {/* 2. Modal Pop-up ดูรูปทั้งหมด (จะโชว์ก็ต่อเมื่อ isOpen เป็น true) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          {/* ปุ่มปิด */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="fixed top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* กล่องใส่รูปทั้งหมด เลื่อนลงได้เรื่อยๆ */}
          <div className="max-w-4xl mx-auto py-20 px-4 flex flex-col gap-6">
            <h2 className="text-white text-2xl font-bold mb-4 text-center">{title}</h2>
            {images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${title} - image ${index + 1}`} 
                className="w-full h-auto rounded-xl shadow-2xl" 
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}