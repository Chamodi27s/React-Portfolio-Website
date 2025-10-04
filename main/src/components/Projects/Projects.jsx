// Projects.jsx
import React from "react";
import "./Projects.css";

import teckstrikeImg from "../assets/teckstrike.jpg";
import chatbotImg from "../assets/chatbot.jpg";
import hotelBookingImg from "../assets/hotel-booking.jpg";
import eventImg from "../assets/event.png";
import hotelManageImg from "../assets/hotel-manage.jpg";
import travelBookingImg from "../assets/travel-booking.jpg";
import aiImg from "../assets/AI.jpg";
import cImg from "../assets/3.jpg";
import sImg from "../assets/4.jpeg";
import carImg from "../assets/car.jpg";

const projects = [
  {
    id: 1,
    title: "TechStrike Club - Announcement Management System",
    description:
      "Full-stack web app for managing club announcements with CRUD operations, image uploads (up to 5MB), priority & category badges, and marking important posts. Built with React, Node.js, Express, MongoDB, Multer, and CSS.",
    image: teckstrikeImg,
    link: "https://github.com/TechstrikeCinec/Techstrike_WebSite.git",
  },
  {
    id: 2,
    title: "Smart AI Chatbot",
    description:
      "A web-based AI chatbot built with Python (Flask) and HTML/CSS/JS, using OpenRouter API (e.g., Mistral-7B) for real-time AI responses. Features an interactive, responsive interface with a simple and customizable design.",
    image: chatbotImg,
    link: "https://github.com/Chamodi27s/SMART_AI_CHATBOT.git",
  },
  {
    id: 3,
    title: "Hotel Booking System",
    description:
      "A full-stack hotel booking platform built with React.js and Tailwind CSS. Features role-based access for guests and hotel owners, room browsing, bookings, and a real-time dashboard for hotel management. Responsive and user-friendly interface.",
    image: hotelBookingImg,
    link: "https://github.com/Chamodi27s/Hotel_Booking_System.git",
  },
  {
    id: 4,
    title: "Event Booking System",
    description:
      "The Event Booking System is a responsive web application that allows users to view ongoing and upcoming events, check event details through interactive cards, and book their seats with a simple and user-friendly flow. By clicking the Book Now button, users are directed to a seat layout page where they can complete their booking easily. The system enhances event visibility while providing a smooth and modern booking experience. Built using React, Node.js, MongoDB, and Tailwind CSS, it ensures both functionality and a clean interface.",
    image: eventImg,
    link: "https://github.com/Chamodi27s/Eventryaproject.git",
  },
  {
    id: 5,
    title: "Hotel Management System",
    description:
      "Full-stack dashboard for managing hotel operations, bookings, rooms, and staff with real-time updates and analytics. Built with React.js, Tailwind CSS, Node.js, and Chart.js.",
    image: hotelManageImg,
    link: "https://github.com/Chamodi27s/hotel_management_system-in-java.git",
  },
  {
    id: 6,
    title: "Travel Booking App",
    description:
      "Responsive travel booking site with package browsing, booking form validation, and admin panel. Built with PHP & MySQL. It features a user-friendly booking form with validation, dynamic package listings, sticky navigation, and a modern UI with animations. The admin panel enables managing bookings and packages efficiently, while the backend (PHP & MySQL) handles data storage and processing.",
    image: travelBookingImg,
    link: "https://github.com/Chamodi27s/SereneTripsLK.git",
  },
  {
    id: 7,
    title: "AI-SAAS System",
    description:
      "A cloud-based platform that uses AI to generate high-quality articles, blog posts, and images on demand. Users can create content quickly with customizable prompts, automated SEO-friendly text, and AI-generated visuals, all through an intuitive, responsive web interface. The app streamlines content creation for marketers, bloggers, and businesses, saving time while enhancing creativity.",
    image: aiImg,
    link: "https://github.com/Chamodi27s/AI_SAAS_Platform.git",
  },
  {
    id: 8,
    title: "Programming Learning Assistance",
    description:
      "A simple C-based console program designed to help beginners learn C programming. Includes topic explanations, code examples, and quizzes. Features an interactive menu for easy navigation. Great for students who want to practice and understand core C concepts like loops, functions, and variables.",
    image: cImg,
    link: "https://github.com/Chamodi27s/Chamodi27s-Programming_Learning_Assistant.git",
  },
  {
    id: 9,
    title: "LinkedIn Post Automation",
    description:
      "Automates LinkedIn posting using Java and Selenium WebDriver. Supports creating text posts, long posts, posts with special characters, and empty posts, while verifying outcomes automatically. Includes screenshot capture for validation. Technologies: Java, Selenium WebDriver, WebDriverManager, ChromeDriver, Apache Commons IO",
    image: sImg,
    link: "https://github.com/Chamodi27s/LinkedIn_Post_Upload_Automation.git",
  },
  {
    id: 10,
    title: "Car Game in Pygame",
    description:
      "An arcade-style Python game where the player drives a car along a 3-lane road, avoiding randomly appearing vehicles. The game gets progressively harder as the score increases, featuring smooth controls, score tracking, and a Game Over screen.",
    image: carImg,
    link: "https://github.com/Chamodi27s/Python_Car_Game.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      {/* Animated bubbles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: `${Math.random() * 40 + 10}px`,
            height: `${Math.random() * 40 + 10}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <h1 className="projects-title">
        {"My Projects".split("").map((char, idx) => (
          <span key={idx} className="title-letter" style={{ "--i": idx }}>
            {char}
          </span>
        ))}
      </h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
