import React from 'react'
import { ChevronRight, Users } from 'lucide-react'
import "../CSS/About.css"

const stats = [
  { value: '5000+', label: 'Active Users' },
  { value: '1000+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Countries' }
]

const values = [
  {
    title: 'Innovation First',
    description: "We continuously push the boundaries of what's possible in development tools, creating solutions that make developers' lives easier."
  },
  {
    title: 'Developer Focused',
    description: 'Every feature we build starts with the developer experience in mind. We believe in creating tools that developers love to use.'
  },
  {
    title: 'Quality Driven',
    description: 'We maintain the highest standards in our code quality, documentation, and support to ensure reliable development experiences.'
  }
]

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former Google engineer with 10+ years of developer tools experience.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    bio: 'Full-stack expert specializing in developer productivity tools.'
  },
  {
    name: 'Alex Kim',
    role: 'Product Manager',
    bio: 'Passionate about creating intuitive developer experiences.'
  }
]

const AboutUs = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Elevating Developer Experience</h1>
          <p>We are passionate about creating tools that help developers soar to new heights</p>
          <button className="button button-primary">
            Get Started
            <ChevronRight className="icon" />
          </button>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team">
        <div className="team-container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">
                  <Users className="avatar-icon" />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of developers who are already using Developer Kite to improve their development workflow.</p>
          <button className="button button-primary">Start Free Trial</button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs