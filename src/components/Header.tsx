import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image src="/saladin-logo.svg" alt="Saladin Ventures Logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-playfair text-2xl font-bold text-foreground tracking-wide">Saladin Ventures</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {/* Removed redundant Services navigation link */}
          <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all font-medium">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
