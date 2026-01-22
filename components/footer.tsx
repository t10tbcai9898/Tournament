"use client"

import Link from "next/link"
import { Trophy, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">TTBCAI</span>
                <span className="text-xs text-muted-foreground">
                  T10 Tennis Ball Cricket
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm text-pretty">
              The official governing body for T10 Tennis Ball Cricket in India. 
              Promoting the sport across all states and union territories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/association-members", label: "Association Members" },
                { href: "/gallery", label: "Gallery" },
                { href: "/register", label: "Player Registration" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@ttbcai.org"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@ttbcai.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    National Cricket Academy Building,
                    <br />
                    Connaught Place, New Delhi - 110001
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/ttbcai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ttbcai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ttbcai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/ttbcai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <Link href="/auth/login">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Secretary Portal
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} T10 Tennis Ball Cricket Association of India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
