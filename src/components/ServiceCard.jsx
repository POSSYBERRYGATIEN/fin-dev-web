import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <button>En savoir plus</button>
    </div>
  );
}

export default ServiceCard;