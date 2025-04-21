
const Contact = () => {
  return (
    <div className="py-16 bg-background min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-2xl bg-card p-10 rounded-2xl shadow-xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-primary">Contact - Bridge Auto Detailing</h1>
        <p className="text-xl text-muted mb-10">
          Need to get in touch? We're here to help. Reach out for bookings, general questions, or more information.
        </p>
        <div className="space-y-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-1 text-secondary">Email</h3>
            <a href="mailto:info@rightcardetailing.ca" className="text-accent hover:underline text-lg">
              info@rightcardetailing.ca
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-secondary">Phone</h3>
            <a href="tel:+14031234567" className="text-accent hover:underline text-lg">
              (403) 123-4567
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-secondary">Business Hours</h3>
            <p className="text-muted">
              Mon - Fri: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 5:00 PM<br />
              Sunday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2 text-primary">Our Service Area</h3>
          <p className="text-muted mb-2">
            We provide premium mobile car detailing exclusively in Lethbridge City, Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
