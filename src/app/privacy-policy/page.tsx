import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="px-6 py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-4">Effective Date: January 1, 2025</p>
            <p className="text-lg text-muted-foreground">Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our mobile applications and development services.</p>
          </div>
          
          <div className="prose prose-lg mx-auto text-left text-foreground max-w-none">
            <div className="space-y-8">
              
              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Personal Information:</strong> Name, email address, phone number (when provided)</p>
                  <p><strong>Usage Data:</strong> App interactions, feature usage, performance data, crash reports</p>
                  <p><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, IP address</p>
                  <p><strong>Location Data:</strong> Approximate location (only when explicitly permitted for prayer time calculations)</p>
                  <p><strong>Communications:</strong> Support requests, feedback, and correspondence with us</p>
                  <p><strong>AI Conversation Data:</strong> Anonymized chat interactions with our AI assistant for service improvement (no personal identifiers retained)</p>
                  <p><strong>Religious Preferences:</strong> Optional Islamic school of thought (madhab) and content preferences for personalized guidance</p>
                  <p><strong>Prayer and Study Patterns:</strong> Usage timing and frequency for daily affirmations and Quranic content (anonymized)</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Collect Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Directly from You:</strong> When you create accounts, contact support, or provide information</p>
                  <p><strong>Automatically:</strong> Through your use of our applications and services</p>
                  <p><strong>Third-Party SDKs:</strong> We use analytics and crash reporting tools with transparent data practices</p>
                  <p><strong>App Store Platforms:</strong> Basic account information from Apple App Store and Google Play Store</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Purpose of Data Collection</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>App Functionality:</strong> To provide core features and personalized experiences across our applications</p>
                  <p><strong>AI Enhancement:</strong> To improve our AI systems and content delivery (where applicable in specific applications)</p>
                  <p><strong>Content Personalization:</strong> To customize app content based on user preferences and settings</p>
                  <p><strong>Location-Based Services:</strong> To provide location-specific features when explicitly permitted (e.g., prayer times in faith-based apps)</p>
                  <p><strong>Notifications & Reminders:</strong> To deliver relevant notifications and content based on app-specific functionality</p>
                  <p><strong>User Support:</strong> To respond to inquiries and provide technical assistance</p>
                  <p><strong>Analytics & Improvement:</strong> To understand usage patterns and improve our applications and services</p>
                  <p><strong>Security:</strong> To detect fraud, abuse, and maintain platform security</p>
                  <p><strong>Legal Compliance:</strong> To comply with applicable laws and platform requirements</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Third Parties</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>No Sale of Data:</strong> We do not sell, rent, or trade your personal information</p>
                  <p><strong>Service Providers:</strong> We share data only with essential service providers (hosting, analytics, support) who maintain strict privacy standards</p>
                  <p><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or to protect rights and safety</p>
                  <p><strong>Business Transfers:</strong> In the event of a merger or acquisition, user data may be transferred with appropriate notice</p>
                  <p><strong>Third-Party SDKs:</strong> Our apps may use third-party services for analytics and functionality. These are disclosed and bound by privacy agreements.</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. User Consent and Control</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Explicit Consent:</strong> We obtain clear consent for data collection and processing</p>
                  <p><strong>App Tracking Transparency:</strong> We comply with Apple&apos;s ATT framework for tracking permissions</p>
                  <p><strong>Opt-Out Rights:</strong> You can withdraw consent and opt-out of non-essential data collection</p>
                  <p><strong>Data Access:</strong> You can request access to your personal data at any time</p>
                  <p><strong>Data Correction:</strong> You can request corrections to inaccurate personal information</p>
                  <p><strong>Data Deletion:</strong> You can request deletion of your personal data (subject to legal retention requirements)</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Encryption:</strong> We use industry-standard encryption for data transmission and storage</p>
                  <p><strong>Access Controls:</strong> Strict access controls limit who can access your personal information</p>
                  <p><strong>Security Audits:</strong> Regular security assessments and monitoring</p>
                  <p><strong>Data Minimization:</strong> We collect and retain only necessary data for specified purposes</p>
                  <p><strong>Breach Response:</strong> We have procedures in place to respond to potential security incidents</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Children&apos;s Privacy (COPPA Compliance)</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Age Restriction:</strong> Our applications are not intended for children under 13 years of age</p>
                  <p><strong>No Knowing Collection:</strong> We do not knowingly collect personal information from children under 13</p>
                  <p><strong>Parental Rights:</strong> If we become aware of child data collection, we will delete it promptly</p>
                  <p><strong>Child Safety:</strong> We comply with applicable child safety and protection regulations</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Global Compliance:</strong> We comply with GDPR, CCPA, and other applicable privacy laws</p>
                  <p><strong>Data Localization:</strong> We implement appropriate safeguards for international data transfers</p>
                  <p><strong>EU/UK Rights:</strong> European users have additional rights under GDPR including data portability</p>
                  <p><strong>California Rights:</strong> California residents have rights under CCPA including non-discrimination</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Policy Updates</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Regular Reviews:</strong> We review and update this policy regularly to ensure compliance</p>
                  <p><strong>Notification:</strong> We will notify users of material changes through app updates or email</p>
                  <p><strong>Continued Use:</strong> Continued use after policy updates constitutes acceptance of changes</p>
                  <p><strong>Platform Compliance:</strong> Updates ensure ongoing compliance with App Store and Play Store policies</p>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Company:</strong> Saladin Commercial Ventures</p>
                  <p><strong>Primary Contact:</strong> <a href="mailto:team@saladinventures.com" className="underline text-primary">team@saladinventures.com</a></p>
                  <p><strong>Privacy Inquiries:</strong> <a href="mailto:team@saladinventures.com" className="underline text-primary">team@saladinventures.com</a></p>
                  <p><strong>Address:</strong> F2-17-13, Tamarind Suites<br />63000 Cyberjaya, Selangor<br />Malaysia</p>
                  <p><strong>Data Protection Officer:</strong> For privacy-related requests, contact <a href="mailto:team@saladinventures.com" className="underline text-primary">team@saladinventures.com</a></p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h2 className="text-2xl font-bold text-foreground mb-4">Application-Specific Data Privacy</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>AI Conversation Processing:</strong> For applications with AI features, conversations are processed to improve functionality. All conversations are anonymized and personal identifiers are removed before processing.</p>
                  <p><strong>Sensitive Content Data:</strong> For applications handling sensitive content (religious, health, personal), we treat such data with utmost respect and confidentiality. This information is never shared or used for commercial purposes.</p>
                  <p><strong>AI Model Training:</strong> Anonymous conversation data from AI-enabled applications may be used to improve functionality and accuracy. No personal information is retained in training data.</p>
                  <p><strong>Cultural and Community Respect:</strong> For applications serving specific communities, we ensure all data processing respects community values and diverse interpretations.</p>
                  <p><strong>Ethical Data Practices:</strong> Our data handling practices are designed to align with ethical principles appropriate to each application&apos;s purpose, avoiding harmful or exploitative data usage.</p>
                  <p><strong>Location-Based Features:</strong> Location data for app-specific features (such as prayer times in faith-based apps) is processed locally when possible and immediately discarded after use.</p>
                  <p><strong>Community Feedback:</strong> We welcome user feedback on potential improvements to our applications&apos; content accuracy and cultural sensitivity.</p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">Legal Compliance Statement</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy complies with Apple App Store Guidelines, Google Play Store Policies, 
                  General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), 
                  Children&apos;s Online Privacy Protection Act (COPPA), and other applicable privacy regulations.
                  It also adheres to ethical guidelines for AI-generated content and cultural sensitivity requirements appropriate to each application&apos;s purpose and target community.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
