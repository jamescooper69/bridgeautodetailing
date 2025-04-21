
const About = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">About Bridge Auto Detailing</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <p className="text-lg mb-6">
            At Bridge Auto Detailing, we believe that every vehicle deserves to look its best. What started 
            as a passion for automotive perfection quickly became a mission to provide the highest quality 
            mobile detailing services throughout Alberta and British Columbia.
          </p>
          
          <p className="text-lg mb-6">
            Our team consists of dedicated professionals who share a common goal: to restore, 
            maintain, and protect your vehicle while providing exceptional customer service. 
            We understand the pride you take in your car, which is why we treat every vehicle 
            with the utmost care and attention.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">Our Story</h2>
          <p className="text-lg mb-6">
            Bridge Auto Detailing was founded on the principle that quality detailing should be 
            convenient, thorough, and personalized. Our founder's passion for automotive care 
            led to the creation of a service that comes directly to you, eliminating the need 
            to spend hours waiting at a detailing shop.
          </p>
          
          <p className="text-lg mb-6">
            What began as a small local operation has grown into a trusted mobile detailing service 
            covering major areas throughout Alberta and British Columbia. Throughout our growth, 
            we've remained committed to our core values of quality, convenience, and customer satisfaction.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">Our Approach</h2>
          <p className="text-lg mb-6">
            We take pride in our meticulous attention to detail and use only premium products that 
            deliver exceptional results. Whether it's interior detailing, exterior detailing, or a 
            complete auto detailing package, we ensure that your vehicle receives the care it deserves.
          </p>
          
          <p className="text-lg">
            Our mobile service brings professional detailing directly to your doorstep, saving you time 
            and hassle. We work around your schedule to provide maximum convenience without compromising 
            on quality.
          </p>
        </div>
        
        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Experience the Bridge Auto Detailing Difference</h2>
          <p className="text-lg mb-6">
            Book your mobile detailing appointment today and see why our customers keep coming back!
          </p>
          <a 
            href="/book-now" 
            className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
