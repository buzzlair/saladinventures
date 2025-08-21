import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-xl text-foreground mb-4">Saladin Ventures</div>
            <p className="text-muted-foreground">Building digital products that scale with your success.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>Mobile Development</div>
              <div>Web Applications</div>
              <div>UI/UX Design</div>
              <div>Consulting</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/tos" className="block text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Saladin Commercial Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
