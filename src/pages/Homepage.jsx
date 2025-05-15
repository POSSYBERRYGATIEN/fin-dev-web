import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
function HomePage() {
  const services = [
    {
      title: 'Sécurité Événementielle',
      description: 'Des agents qualifiés pour assurer la sécurité de vos residance et de vos événements.',
      icon: '🛡️', // Exemple d'icône
    },
    {
      title: 'Entretien Bureaux & Cites',
      description: 'Un service de nettoyage professionnel pour des espaces impeccables.',
      icon: '🧹',
    },
    {
      title: 'Services Domestiques',
      description: 'Des aides à domicile pour faciliter votre quotidien.',
      icon: '🏡',
    },
  ];

  return (
    <main>
      <HeroSection />
      <section className="services-overview">
        <h2>Nos Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      {/* Tu peux ajouter d'autres sections comme des témoignages, un appel à l'action supplémentaire, etc. */}
    </main>
  );
}

export default HomePage;