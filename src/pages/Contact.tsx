
const Contact = () => {
  return (
    <div className="py-16 bg-background min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-xl bg-card p-10 rounded-2xl shadow-xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4" style={{color: "#222831"}}>Contact - Bridge Auto Detailing</h1>
        <p className="text-xl mb-10 text-foreground">
          Need to get in touch? We're here to help. Reach out for bookings, general questions, or more information.
        </p>
        <div className="space-y-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-1" style={{color: "#1E90FF"}}>Email</h3>
            <a href="mailto:tahamehtar5@gmail.com" className="text-primary hover:underline text-lg" style={{color: "#1E90FF"}}>
              tahamehtar5@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1" style={{color: "#1E90FF"}}>Phone</h3>
            <a href="tel:+14377660838" className="text-primary hover:underline text-lg" style={{color: "#1E90FF"}}>
              +1 (437) 766-0838
            </a>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2" style={{color: "#1E90FF"}}>Our Service Area</h3>
          <p className="mb-2 text-foreground">
            We provide premium mobile car detailing exclusively in Lethbridge City, Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
