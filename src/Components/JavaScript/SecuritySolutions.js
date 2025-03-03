import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield,
    Lock,
    AlertTriangle,
    FileText,
    CloudOff,
    Server
} from 'lucide-react';
import '../CSS/AWSServicesPage.css';

const SecuritySolutionsPage = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Network Security",
            icon: <Shield className="service-icon" />,
            description: "Protect your network from internal and external threats with advanced security measures.",
            features: [
                "Firewall configuration and management",
                "Intrusion Detection Systems (IDS)",
                "Virtual Private Network (VPN) setup",
                "Network traffic analysis",
                "DDoS protection and mitigation"
            ]
        },
        {
            id: 2,
            title: "Data Encryption & Privacy",
            icon: <Lock className="service-icon" />,
            description: "Ensure the confidentiality and integrity of your data both at rest and in transit.",
            features: [
                "End-to-end data encryption",
                "SSL/TLS encryption for websites",
                "Database encryption and key management",
                "Encryption at rest and in transit",
                "Compliance with data privacy regulations (GDPR, CCPA)"
            ]
        },
        {
            id: 3,
            title: "Incident Response & Monitoring",
            icon: <AlertTriangle className="service-icon" />,
            description: "Rapid response and monitoring for security incidents to minimize damage and mitigate risks.",
            features: [
                "24/7 security monitoring",
                "Real-time incident detection",
                "Incident containment and response planning",
                "Forensic analysis of breaches",
                "Root cause analysis and resolution"
            ]
        },
        {
            id: 4,
            title: "Access Control & Identity Management",
            icon: <Shield className="service-icon" />,
            description: "Manage user identities and control access to critical systems with best-in-class IAM solutions.",
            features: [
                "Role-based access control (RBAC)",
                "Single Sign-On (SSO) implementation",
                "Multi-factor authentication (MFA)",
                "User provisioning and de-provisioning",
                "Identity and access auditing"
            ]
        },
        {
            id: 5,
            title: "Vulnerability Assessment & Penetration Testing",
            icon: <FileText className="service-icon" />,
            description: "Identify and fix vulnerabilities in your systems with regular assessments and penetration testing.",
            features: [
                "Comprehensive vulnerability scanning",
                "Penetration testing (ethical hacking)",
                "Security posture assessment",
                "Risk analysis and mitigation",
                "Security patch management"
            ]
        },
        {
            id: 6,
            title: "Cloud Security Solutions",
            icon: <CloudOff className="service-icon" />,
            description: "Secure your cloud infrastructure and services with specialized security measures for cloud environments.",
            features: [
                "Cloud access security broker (CASB) implementation",
                "Cloud security posture management",
                "Secure cloud configurations and monitoring",
                "Compliance with cloud security standards",
                "Identity and access management (IAM) for cloud environments"
            ]
        },
        {
            id: 7,
            title: "Endpoint Security",
            icon: <Server className="service-icon" />,
            description: "Protect all devices within your network against cyber threats and ensure endpoint security.",
            features: [
                "Antivirus and anti-malware solutions",
                "Endpoint detection and response (EDR)",
                "Mobile device management (MDM)",
                "Security patching for endpoints",
                "Encryption for endpoint devices"
            ]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-wrapper">
                <div className="services-header">
                    <h1 className="services-title">Security Solutions</h1>
                    <p className="services-subtitle">
                        Comprehensive security services to protect your business from evolving cyber threats. From network security to incident response, we ensure your systems are secure.
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
                            <span className="cta-text">Contact Us for Security Solutions</span>
                            <div className="cta-overlay"></div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecuritySolutionsPage;
