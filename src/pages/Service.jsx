import React from 'react';
import ServiceCard from '../components/ServiceCard';

function ServicesPage() {
  const allServices = [
    {
      title: 'Sécurité Événementielle Complète',
      description: 'Planification et exécution de la sécurité pour tous types d\'événements.',
      icon: '🛡️',
    },
    {
      title: 'Nettoyage de Bureaux Professionnel',
      description: 'Maintien de la propreté et de l\'hygiène de vos espaces de travail.',
      icon: '🏢',
    },
    {
      title: 'Aide Ménagère à Domicile',
      description: 'Services personnalisés pour l\'entretien de votre maison.',
      icon: '🧺',
    },
    // Ajoute d'autres services ici
  ];

  return (
    <main>
      <section className="all-services">
        <h2>Tous Nos Services</h2>
        <div className="services-grid">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;