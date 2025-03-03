import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Code,
    Settings,
    FileText,
    Monitor,
    GitMerge,
    Database,
} from 'lucide-react';
import '../CSS/AWSServicesPage.css';

const DevelopmentSupportServicesPage = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Custom Software Development",
            icon: <Code className="service-icon" />,
            description: "Tailored development solutions to meet your unique business needs.",
            features: [
                "Custom application development",
                "Web and mobile app development",
                "API development and integrations",
                "Cross-platform development",
                "Scalable architecture design"
            ]
        },
        {
            id: 2,
            title: "Software Maintenance & Support",
            icon: <Settings className="service-icon" />,
            description: "Comprehensive maintenance and ongoing support for your software.",
            features: [
                "Bug fixes and updates",
                "Feature enhancements",
                "Performance optimization",
                "Security patches and updates",
                "24/7 support for critical issues"
            ]
        },
        {
            id: 3,
            title: "Software Testing & Quality Assurance",
            icon: <FileText className="service-icon" />,
            description: "Ensure your software is bug-free and high quality with our QA services.",
            features: [
                "Manual and automated testing",
                "Performance testing",
                "Integration testing",
                "User acceptance testing (UAT)",
                "Test case creation and execution"
            ]
        },
        {
            id: 4,
            title: "DevOps & CI/CD Implementation",
            icon: <Monitor className="service-icon" />,
            description: "Streamline your development process with DevOps and CI/CD solutions.",
            features: [
                "Continuous integration and deployment",
                "Version control with Git",
                "Automated testing and deployment pipelines",
                "Infrastructure as code (IaC)",
                "Monitoring and alerting for production"
            ]
        },
        {
            id: 5,
            title: "Cloud App Development & Migration",
            icon: <Database className="service-icon" />,
            description: "Develop and migrate applications to the cloud for scalability and efficiency.",
            features: [
                "Cloud-native application development",
                "Cloud migration strategy and execution",
                "Multi-cloud architecture design",
                "Performance optimization on the cloud",
                "Cloud-based database solutions"
            ]
        },
        {
            id: 6,
            title: "Version Control & Collaboration",
            icon: <GitMerge className="service-icon" />,
            description: "Efficient version control and collaborative development for teams.",
            features: [
                "Git-based version control setup",
                "GitHub, GitLab, Bitbucket integration",
                "Code branching and merging strategies",
                "Collaboration and code review processes",
                "Release management and deployment"
            ]
        },
        {
            id: 7,
            title: "API Development & Integration",
            icon: <Database className="service-icon" />,
            description: "Develop robust APIs and integrate third-party services into your application.",
            features: [
                "RESTful API development",
                "GraphQL API design",
                "API documentation and testing",
                "Third-party API integrations",
                "API security best practices"
            ]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-wrapper">
                <div className="services-header">
                    <h1 className="services-title">Development Support Services</h1>
                    <p className="services-subtitle">
                        From custom software development to ongoing maintenance and cloud migration, our development support services help you build, improve, and optimize your applications.
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
                            <span className="cta-text">Get In Touch for Development Support</span>
                            <div className="cta-overlay"></div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentSupportServicesPage;
