"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EventPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-card rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-background/50 hover:bg-background/80 text-foreground"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <Link href="/register" onClick={() => setIsOpen(false)}>
          <div className="relative aspect-[4/5] cursor-pointer group">
            <Image
              src="/images/upcoming-event.jpg"
              alt="Upcoming T10 Cricket Tournament - Click to Register"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                Upcoming Event
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-1 text-balance">
                National T10 Tennis Ball Cricket Championship 2026
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Click to register now and be part of India&apos;s biggest tennis ball cricket tournament!
              </p>
              <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Register Now
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
