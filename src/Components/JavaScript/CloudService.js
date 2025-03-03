import React from 'react';
import { Cloud, Server, Database, Shield, Globe, Cpu } from 'lucide-react';

const CloudService = () => {
  const services = [
    {
      icon: <Cloud />,
      title: "Cloud Infrastructure",
      description: "Custom cloud architecture using AWS, Azure, or Google Cloud Platform with scalable solutions."
    },
    {
      icon: <Server />,
      title: "Serverless Development",
      description: "Build modern serverless applications with automated scaling and reduced operational costs."
    },
    {
      icon: <Database />,
      title: "Database Solutions",
      description: "Cloud-native databases and data warehousing for efficient data management."
    },
    {
      icon: <Shield />,
      title: "Security Services",
      description: "Enterprise-grade security implementation with continuous monitoring and threat protection."
    },
    {
      icon: <Globe />,
      title: "Multi-Cloud Solutions",
      description: "Strategic multi-cloud deployments for optimal performance and redundancy."
    },
    {
      icon: <Cpu />,
      title: "DevOps Services",
      description: "Automated CI/CD pipelines and infrastructure as code for seamless deployment."
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Cloud Development Solutions</h1>
          <p>Transform your business with our enterprise cloud services</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Experience</h3>
            <p>10+ years of cloud expertise</p>
          </div>
          <div className="feature">
            <h3>Reliability</h3>
            <p>99.9% uptime guarantee</p>
          </div>
          <div className="feature">
            <h3>Support</h3>
            <p>24/7 technical assistance</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact our team for a free consultation</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default CloudService;