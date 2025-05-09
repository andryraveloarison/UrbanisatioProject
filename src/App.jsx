import { useState, useEffect, useRef } from 'react';
import './App.css';
import chat from './assets/chat2.gif'
import banner from './assets/banner.jpeg'
import mika from './assets/mika.jpeg'
import andry from './assets/andry.jpeg'
import koloina from './assets/koloina.jpg'
import tantely from './assets/tantely.jpg'

export default function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Références pour les sections
  const teamSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const homeRef = useRef(null);
  const contactSectionRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Fonction pour faire défiler vers une section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      id: 1,
      name: "RAVELOARISON Andry Daniel",
      studentId: "SI 2020 0057",
      role: "Developpeur Backend",
      image: andry
    },
    {
      id: 2,
      name: "RAKOTONDRAVONY Mickael",
      studentId: "SI 2020 0033",
      role: "Développeur web",
      image: mika
    },
    {
      id: 3,
      name: "Andrianirina Koloina Tsiorintsoa",
      studentId: "SI 2020 0035",
      role: "Développeur mobile",
      image: koloina
    },
    {
      id: 4,
      name: "RAZAFINDRABE Tantely",
      studentId: "SE 2020 0057",
      role: "Développeur desktop",
      image: tantely
    }
  ];

  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className={`app-container ${isVisible ? 'visible' : ''}`}>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <h1 className="header-title">Tambazotra</h1>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item" onClick={() => scrollToSection(homeRef)}>Accueil</li>
            <li className="nav-item" onClick={() => scrollToSection(teamSectionRef)}>Équipe</li>
            <li className="nav-item" onClick={() => scrollToSection(projectSectionRef)}>Projet</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section" ref={homeRef}>
        <h1 className="hero-title animate-fade-in-down">
          Projet urbanisation des SI
        </h1>
        <p className="hero-description animate-fade-in-up">
        Tambazotra est un réseau social rapide et sécurisé
        </p>
        <img src={chat} style={{width:"5pc"}} />
      </div>

      {/* Team Section */}
      <div className="team-section" ref={teamSectionRef}>
        <h2 className="section-title">Notre Équipe</h2>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`team-card ${activeCard === member.id ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(member.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="member-image-container ">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image" 
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-id">N° Étudiant: {member.studentId}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div className="project-section" ref={projectSectionRef}>
        <h2 className="section-title">Notre Projet</h2>
        <div className="project-container">
          <div className="project-image-container">
            <div className="project-image-wrapper">
              <img 
                src={banner} 
                alt="Project preview" 
                className="project-image" 
              />
              <div className="project-image-overlay">
                <div className="project-image-text">
                  <h3 className="project-title">Tambazotra</h3>
                  <p className="project-subtitle">Une application de discussion </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3 className="content-title">Description</h3>
            <p className="project-description">
              Notre projet est une application de chat en temps réel, sécurisée grâce au chiffrement des messages. Elle est conçue pour être multiplateforme : accessible sur le web, mobile et desktop. Nous avons mis l’accent sur la sécurité, la rapidité et une expérience utilisateur fluide sur tous les appareils.
            </p>
            <h3 className="content-title">Technologies</h3>
            <ul className="tech-list">
              <li className="tech-item">
                <span className="tech-dot"></span>
                React
              </li>
              <li className="tech-item">
                <span className="tech-dot"></span>
                Node.js
              </li>
              <li className="tech-item">
                <span className="tech-dot"></span>
                TypeScript
              </li>
              <li className="tech-item">
                <span className="tech-dot"></span>
                Flutter
              </li>
              <li className="tech-item">
                <span className="tech-dot"></span>
                Python
              </li>
            </ul>
          </div>

        </div>
      </div>


      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} - Projet Urbanisation - Tous droits réservés</p>
        <p></p>
        <p className="footer-subtext">Projet saika tsy vita</p>
      </footer>
    </div>
  );
}