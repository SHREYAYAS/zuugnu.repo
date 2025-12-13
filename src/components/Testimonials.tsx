import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Zuugnu changed my freelancing game! The pre-paid gigs and escrow system gave me the security I needed to focus on my work.',
      author: 'Priya Sharma',
      role: 'Content Creator',
      avatar: 'https://ui-avatars.com/api/?name=PS&background=6366f1&color=fff&bold=true',
    },
    {
      text: "The bidding feature helped me land high-paying projects. Zuugnu's training programs also upskilled me in social media analytics!",
      author: 'Rahul Patel',
      role: 'Digital Marketer',
      avatar: 'https://ui-avatars.com/api/?name=RP&background=8b5cf6&color=fff&bold=true',
    },
    {
      text: "As a small business owner, Zuugnu's UGC services helped me build my brand authentically and affordably.",
      author: 'Ananya Gupta',
      role: 'E-commerce Entrepreneur',
      avatar: 'https://ui-avatars.com/api/?name=AG&background=ec4899&color=fff&bold=true',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-transparent" id="testimonials">
      <div className="container mx-auto max-w-6xl px-3 sm:px-5">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Community Says</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-5 sm:p-8 shadow-md border border-white/20 hover:bg-white/20 transition-all">
              <p className="italic text-sm sm:text-base text-gray-200 mb-5 sm:mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
