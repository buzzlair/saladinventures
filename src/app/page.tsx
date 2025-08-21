// ...existing code...
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

  <Header />

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-background to-secondary/20 font-sans">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We build apps that <span className="text-primary">scale</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
            Empowering startups and businesses with modern, robust, and beautiful digital products that grow with your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg font-sans">
              Start Your Project
            </a>
            <a href="#services" className="text-foreground border border-border px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-all font-sans">
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we handle every aspect of your digital product journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Mobile & Web Apps</h3>
              <p className="text-muted-foreground">Native and cross-platform applications built with the latest technologies.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">Beautiful, intuitive designs that users love and businesses thrive on.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Product Strategy</h3>
              <p className="text-muted-foreground">Strategic consulting to align your product vision with market needs.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Support & Growth</h3>
              <p className="text-muted-foreground">Ongoing maintenance and feature development as your business scales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to build something amazing?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a digital solution that drives your business forward.
          </p>
          <a href="/contact" className="bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg">
            Let&apos;s Talk
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
