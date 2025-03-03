import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Laptop,
    Headphones,
    Server,
    Shield,
    LifeBuoy,
} from 'lucide-react';
import '../CSS/AWSServicesPage.css';

const ITSupportServicesPage = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "24/7 Helpdesk Support",
            icon: <Headphones className="service-icon" />,
            description: "Round-the-clock IT support to resolve your issues promptly.",
            features: [
                "Live chat support",
                "Phone and email support",
                "Incident tracking and management",
                "Prioritized escalation procedures",
                "Remote desktop assistance"
            ]
        },
        {
            id: 2,
            title: "Network Monitoring & Management",
            icon: <Server className="service-icon" />,
            description: "Proactive monitoring and management of your IT network.",
            features: [
                "24/7 network monitoring",
                "Bandwidth and traffic management",
                "Network security monitoring",
                "Performance optimization",
                "Incident response and troubleshooting"
            ]
        },
        {
            id: 3,
            title: "Cloud Support & Maintenance",
            icon: <Laptop className="service-icon" />,
            description: "Comprehensive support for your cloud infrastructure.",
            features: [
                "Cloud environment setup and management",
                "Backup and disaster recovery solutions",
                "Security configuration for cloud resources",
                "Cloud performance monitoring",
                "Cost optimization for cloud services"
            ]
        },
        {
            id: 4,
            title: "IT Security & Compliance",
            icon: <Shield className="service-icon" />,
            description: "Secure your IT systems and stay compliant with industry standards.",
            features: [
                "Endpoint protection",
                "Firewall configuration and monitoring",
                "Antivirus and anti-malware management",
                "Compliance audits and assessments",
                "Penetration testing and vulnerability assessments"
            ]
        },
        {
            id: 5,
            title: "Software & Application Support",
            icon: <Shield className="service-icon" />,
            description: "Expert support for all your business software and applications.",
            features: [
                "Software installation and configuration",
                "Application troubleshooting",
                "Patch management and updates",
                "License management",
                "User training and documentation"
            ]
        },
        {
            id: 6,
            title: "IT Infrastructure Setup & Management",
            icon: <Server className="service-icon" />,
            description: "Design, implement, and manage your IT infrastructure.",
            features: [
                "Server setup and maintenance",
                "Storage configuration and management",
                "Data center management",
                "Virtualization services",
                "On-premise and hybrid infrastructure management"
            ]
        },
        {
            id: 7,
            title: "Disaster Recovery & Backup Solutions",
            icon: <LifeBuoy className="service-icon" />,
            description: "Ensure business continuity with disaster recovery planning.",
            features: [
                "Automated backup scheduling",
                "Cloud-based backup solutions",
                "Disaster recovery planning and testing",
                "Data restoration services",
                "Business continuity planning"
            ]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-wrapper">
                <div className="services-header">
                    <h1 className="services-title">IT Support Services</h1>
                    <p className="services-subtitle">
                        Comprehensive IT support solutions to keep your business running smoothly. From 24/7 helpdesk to network management, we are here to support your IT needs.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-card ${activeService === service.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                        >
                            <div className="service-card-overlay"></div>
                            <div className="service-content">
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>

                                <div className={`service-features ${activeService === service.id ? 'active' : ''}`}>
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <div className="feature-bullet"></div>
                                            <span className="feature-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="service-card-underline"></div>
                        </div>
                    ))}
                </div>

                <div className="cta-container">
                    <button className="cta-button">
                        <Link to="/contact" className="cta-button">
                            <span className="cta-text">Contact Us for IT Support</span>
                            <div className="cta-overlay"></div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ITSupportServicesPage;
