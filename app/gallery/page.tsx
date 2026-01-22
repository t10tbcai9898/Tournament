"use client"

import { useState } from "react"
import { ImageIcon, Video, X } from "lucide-react"
import { TopHeader } from "@/components/top-header"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const galleryItems = [
  {
    type: "image",
    src: "/images/gallery-1.jpg",
    title: "Championship Match 2025",
    category: "matches",
  },
  {
    type: "image",
    src: "/images/gallery-2.jpg",
    title: "Victory Celebration",
    category: "celebrations",
  },
  {
    type: "image",
    src: "/images/gallery-3.jpg",
    title: "Bowling Action",
    category: "matches",
  },
  {
    type: "image",
    src: "/images/gallery-4.jpg",
    title: "Award Ceremony",
    category: "ceremonies",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/hero-cricket.jpg",
    title: "Tournament Highlights 2025",
    category: "videos",
  },
  {
    type: "image",
    src: "/images/president.jpg",
    title: "President Address",
    category: "ceremonies",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/gallery-1.jpg",
    title: "Final Match Highlights",
    category: "videos",
  },
  {
    type: "image",
    src: "/images/hero-cricket.jpg",
    title: "Opening Ceremony",
    category: "ceremonies",
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "matches", label: "Matches" },
  { id: "celebrations", label: "Celebrations" },
  { id: "ceremonies", label: "Ceremonies" },
  { id: "videos", label: "Videos" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <TopHeader />
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo & Video <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Relive the best moments from our tournaments, ceremonies, and celebrations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-16 bg-background z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-secondary"
                )}
              >
                {category.id === "videos" && <Video className="h-4 w-4 mr-1" />}
                {category.id !== "videos" && category.id !== "all" && (
                  <ImageIcon className="h-4 w-4 mr-1" />
                )}
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer bg-card"
                onClick={() => setLightboxItem(item)}
              >
                <ImageIcon
                  src={item.type === "video" ? item.thumbnail || item.src : item.src}
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/80 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Video className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground hover:bg-secondary"
            onClick={() => setLightboxItem(null)}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </Button>

          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === "image" ? (
              <div className="relative aspect-video">
                <ImageIcon
                  src={lightboxItem.src || "/placeholder.svg"}
                  alt={lightboxItem.title}
                  className="object-contain rounded-lg"
                />
              </div>
            ) : (
              <div className="relative aspect-video">
                <iframe
                  src={lightboxItem.src}
                  title={lightboxItem.title}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            )}
            <h3 className="text-foreground font-semibold text-center mt-4">
              {lightboxItem.title}
            </h3>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
