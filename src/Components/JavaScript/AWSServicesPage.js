import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Cloud,
    Shield,
    DollarSign,
    Settings,
    Database,
    Monitor,
    RefreshCw,
    Network
} from 'lucide-react';
import '../CSS/AWSServicesPage.css'

const AWSServicesPage = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Infrastructure Setup & Management",
            icon: <Cloud className="service-icon" />,
            description: "Complete AWS infrastructure creation and management services",
            features: [
                "VPC architecture design and implementation",
                "EC2 instance deployment and configuration",
                "Auto-scaling setup and management",
                "Load balancer configuration",
                "Multi-region infrastructure setup"
            ]
        },
        {
            id: 2,
            title: "Security & Compliance",
            icon: <Shield className="service-icon" />,
            description: "Comprehensive security solutions and compliance management",
            features: [
                "Security group configuration",
                "IAM policy management",
                "Compliance auditing",
                "Security best practices implementation",
                "Regular security assessments"
            ]
        },
        {
            id: 3,
            title: "Cost Optimization",
            icon: <DollarSign className="service-icon" />,
            description: "AWS cost analysis and optimization services",
            features: [
                "Billing analysis and reporting",
                "Resource utilization optimization",
                "Reserved instance planning",
                "Cost allocation tagging",
                "Budget alerts setup"
            ]
        },
        {
            id: 4,
            title: "Maintenance & Patching",
            icon: <Settings className="service-icon" />,
            description: "Regular maintenance and update services",
            features: [
                "OS patching and updates",
                "Security patches implementation",
                "Performance optimization",
                "Regular maintenance schedules",
                "Update management"
            ]
        },
        {
            id: 5,
            title: "Database Management",
            icon: <Database className="service-icon" />,
            description: "Complete database setup and management solutions",
            features: [
                "RDS setup and configuration",
                "Database optimization",
                "Backup and recovery setup",
                "High availability configuration",
                "Performance monitoring"
            ]
        },
        {
            id: 7,
            title: "Migration Services",
            icon: <RefreshCw className="service-icon" />,
            description: "Seamless migration services to AWS cloud",
            features: [
                "Migration planning and strategy",
                "Data migration",
                "Application migration",
                "Infrastructure migration",
                "Post-migration optimization"
            ]
        },
        {
            id: 8,
            title: "Network Architecture",
            icon: <Network className="service-icon" />,
            description: "Advanced networking solutions and architecture",
            features: [
                "VPC design and implementation",
                "Subnet configuration",
                "Route table setup",
                "VPN and Direct Connect setup",
                "Network security configuration"
            ]
        }
        // ... rest of the services remain the same
    ];

    return (
        <div className="services-container">
            <div className="services-wrapper">
                <div className="services-header">
                    <h1 className="services-title">AWS Cloud Services</h1>
                    <p className="services-subtitle">
                        Comprehensive AWS solutions to help your business thrive in the cloud.
                        From infrastructure setup to optimization, we've got you covered.
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

export default AWSServicesPage;