export default function Features() {
  const features = [
    {
      icon: '💰',
      title: 'Pre-Paid Gigs',
      description: 'Access confirmed, pre-paid demand for services and products. No more chasing payments—just fulfill and earn.',
    },
    {
      icon: '⚖️',
      title: 'Bid & Win',
      description: 'Compete for assignments based on your skills, pricing, or reputation. Win gigs that match your expertise.',
    },
    {
      icon: '🛡️',
      title: 'Escrow Security',
      description: 'All payments are held in escrow until gig completion. Transparent, secure, and dispute-free transactions.',
    },
    {
      icon: '👥',
      title: 'Community-Driven',
      description: 'Join a thriving community of freelancers, creators, and businesses. Collaborate, learn, and grow together.',
    },
    {
      icon: '🎓',
      title: 'Skills Training',
      description: 'Upskill with certified training in UGC, SMA, and digital branding. Earn while you learn.',
    },
    {
      icon: '📈',
      title: 'Growth Opportunities',
      description: 'From gigs to long-term projects, Zuugnu helps you scale your income and build your brand.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Zuugnu?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
