
import CTASection from '@/components/CTASection';

const Alberta = () => {
  // Redirect this route or display that service is only in Lethbridge City
  return (
    <div className="py-24 flex flex-col items-center justify-center min-h-[60vh] bg-background text-center">
      <h1 className="text-4xl font-bold mb-6 text-secondary">Service Notice</h1>
      <p className="text-lg mb-6 max-w-lg text-foreground">
        Bridge Auto Detailing exclusively serves Lethbridge City, Canada.<br /> If you’re in Lethbridge City, book your service today!
      </p>
      <a href="/book-now" className="btn-gold">
        Book Your Detailing in Lethbridge City
      </a>
      <CTASection />
    </div>
  );
};

export default Alberta;
