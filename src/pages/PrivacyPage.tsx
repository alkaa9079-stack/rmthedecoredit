import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const PrivacyPage = () => {
  useScrollFadeIn();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-14 scroll-fade-in">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
                Legal
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
                Privacy &amp; Disclosure
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your trust matters. Here's how we handle your data and our commercial relationships.
              </p>
            </div>

            <div className="space-y-12 scroll-fade-in">
              {/* Data Collection */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  What We Collect
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  When you use the Private Client Registry, we collect the recipient names, occasion
                  types, and dates you choose to save. If you join The Inner Circle, we store the
                  email address you provide. We do not collect payment information — all purchases
                  are completed directly on Amazon.co.uk.
                </p>
              </div>

              {/* GDPR — Registry */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Your Rights Under UK GDPR
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection
                  Act 2018, you have the right to:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1.5 ml-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data ("right to be forgotten")</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                  <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Registry data is stored securely and is only accessible to the account holder.
                  We retain your data for as long as your account is active. To exercise any of
                  these rights, contact us at{" "}
                  <span className="text-foreground">hello@rmthedecoredit.co.uk</span>.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Cookies &amp; Session Storage
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use essential cookies and session storage to remember your preferences
                  (such as dismissing the Inner Circle popup). We do not use tracking cookies
                  or share data with third-party advertisers. Amazon.co.uk may set its own
                  cookies when you follow affiliate links — please refer to Amazon's privacy
                  policy for details.
                </p>
              </div>

              {/* Amazon Affiliate Disclosure */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Amazon Affiliate Disclosure
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  RM The Decor Edit is a participant in the Amazon Services LLC Associates
                  Programme, an affiliate advertising programme designed to provide a means for
                  sites to earn advertising fees by advertising and linking to Amazon.co.uk.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  As an Amazon Associate, we earn from qualifying purchases. This means that
                  when you click a product link marked with <span className="text-foreground font-medium">#Ad</span> and
                  make a purchase, we may receive a small commission at no additional cost to you.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Product prices and availability are accurate as of the date/time indicated and
                  are subject to change. Any price and availability information displayed at the
                  time of purchase will apply to the purchase of the product.
                </p>
              </div>

              {/* ASA Compliance */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  UK ASA Advertising Standards
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In accordance with the Advertising Standards Authority (ASA) and Committee of
                  Advertising Practice (CAP) guidelines, all affiliate product links on this site
                  are clearly labelled with an <span className="text-foreground font-medium">#Ad</span> indicator.
                  This ensures full transparency about our commercial relationship with Amazon.co.uk.
                </p>
              </div>

              {/* Data Privacy Complaints */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Data Privacy Complaints
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  If you believe your personal data has been mishandled or you are dissatisfied
                  with our response to a data request, you may submit a formal complaint to us at{" "}
                  <span className="text-foreground">hello@rmthedecoredit.co.uk</span>.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  We aim to acknowledge all data privacy complaints within <span className="text-foreground font-medium">48 hours</span> and
                  to provide a full resolution within <span className="text-foreground font-medium">30 calendar days</span>.
                  If we require additional time, we will notify you of the reason and expected timeline.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you remain unsatisfied with our response, you have the right to escalate
                  your complaint to the{" "}
                  <span className="text-foreground">Information Commissioner's Office (ICO)</span> at{" "}
                  <span className="text-foreground">ico.org.uk</span>.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-border pt-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For any privacy-related enquiries, data requests, or questions about our
                  affiliate relationships, please contact:{" "}
                  <span className="text-foreground">hello@rmthedecoredit.co.uk</span>
                </p>
              </div>
            </div>

            <div className="text-center mt-16 scroll-fade-in">
              <Link
                to="/"
                className="text-xs uppercase tracking-[0.15em] px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
              >
                Return to The Edit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
