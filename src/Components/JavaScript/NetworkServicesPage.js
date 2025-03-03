import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Wifi,
    Router,
    Cable,
    Globe,
    Cloud,
    Shield
} from 'lucide-react';
import '../CSS/AWSServicesPage.css';

const NetworkServicesPage = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Network Architecture Design",
            icon: <Wifi className="service-icon" />,
            description: "Complete network architecture design for seamless connectivity",
            features: [
                "Custom VPC design and implementation",
                "Private subnet configuration",
                "Routing table management",
                "IP addressing scheme design",
                "Security group and NACL configuration"
            ]
        },
        {
            id: 2,
            title: "VPN & Direct Connect",
            icon: <Router className="service-icon" />,
            description: "Secure and scalable VPN and Direct Connect setup",
            features: [
                "VPN tunnel setup and configuration",
                "Site-to-Site VPN configuration",
                "Direct Connect setup for hybrid environments",
                "High availability VPN configurations",
                "Secure traffic routing"
            ]
        },
        {
            id: 3,
            title: "Network Security",
            icon: <Shield className="service-icon" />,
            description: "Comprehensive network security services to safeguard your infrastructure",
            features: [
                "DDoS protection implementation",
                "Web Application Firewall (WAF) setup",
                "Network intrusion detection and prevention",
                "Security monitoring and logging",
                "Access control list (ACL) configuration"
            ]
        },
        {
            id: 4,
            title: "Load Balancing & Traffic Management",
            icon: <Cloud className="service-icon" />,
            description: "Efficient load balancing and traffic management services",
            features: [
                "Elastic Load Balancer (ELB) setup",
                "Application Load Balancer (ALB) configuration",
                "Network Load Balancer (NLB) setup",
                "Global traffic distribution using Route 53",
                "SSL/TLS offloading configuration"
            ]
        },
        {
            id: 5,
            title: "Cloud Networking",
            icon: <Globe className="service-icon" />,
            description: "Advanced cloud networking and integration solutions",
            features: [
                "Hybrid cloud network integration",
                "Inter-region VPC peering",
                "Multi-cloud networking",
                "AWS Transit Gateway configuration",
                "Cloud CDN and edge network optimization"
            ]
        },
        {
            id: 6,
            title: "Network Monitoring & Management",
            icon: <Cable className="service-icon" />,
            description: "Proactive network monitoring and management services",
            features: [
                "Real-time network monitoring setup",
                "Network performance analysis",
                "Incident response and troubleshooting",
                "CloudWatch metrics and alarms",
                "Cost-effective monitoring solutions"
            ]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-wrapper">
                <div className="services-header">
                    <h1 className="services-title">Network Services</h1>
                    <p className="services-subtitle">
                        Robust and scalable network solutions to keep your business connected and secure.
                        From network design to traffic management, we ensure seamless connectivity.
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
                            <span className="cta-text">Contact Us for Consultation</span>
                            <div className="cta-overlay"></div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NetworkServicesPage;
