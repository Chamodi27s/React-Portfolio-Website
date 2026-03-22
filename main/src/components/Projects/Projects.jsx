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
import userDirectoryImg from "../assets/user-directory.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import melodyImg from "../assets/melody.jpg";
import filmImg from "../assets/film.jpg";

const projects = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Application (Music Store)",
    description:
      "A full-featured e-commerce platform for a music store with secure authentication, product management, and a smart cart system. Includes checkout flow, customer reviews, and an admin dashboard for managing inventory and orders.",
    image: melodyImg,
    link: "https://github.com/Chamodi27s/music-instrument-online-store.git",
  },
  {
    id: 2,
    title: "Netflix Clone Application",
    description:
      "A responsive Netflix-style web app built with React and Firebase. Features user authentication, dynamic movie listings, trailer previews, and smooth horizontal scrolling for an immersive user experience.",
    image: filmImg,
    link: "https://github.com/Chamodi27s/Netflix_Clone_Website.git",
  },
  {
    id: 3,
    title: "Smart AI Chatbot",
    description:
      "A web-based AI chatbot using Flask and OpenRouter API for real-time responses. Designed with a clean UI and interactive chat experience, supporting customizable and intelligent conversations.",
    image: chatbotImg,
    link: "https://github.com/Chamodi27s/SMART_AI_CHATBOT.git",
  },
  {
    id: 4,
    title: "Hotel Booking System",
    description:
      "A full-stack booking platform with role-based access for users and hotel owners. Includes room browsing, booking management, and a responsive dashboard for real-time operations.",
    image: hotelBookingImg,
    link: "https://github.com/Chamodi27s/Hotel_Booking_System.git",
  },
  {
    id: 5,
    title: "Event Booking System",
    description:
      "A modern event booking system with interactive event cards and seat selection. Provides a smooth booking flow with a responsive UI and backend integration for managing events and users.",
    image: eventImg,
    link: "https://github.com/Chamodi27s/Eventryaproject.git",
  },
  {
    id: 6,
    title: "Hotel Management System",
    description:
      "A dashboard system for managing hotel operations, including bookings, rooms, and staff. Features real-time updates and analytics with a clean and user-friendly interface.",
    image: hotelManageImg,
    link: "https://github.com/Chamodi27s/hotel_management_system-in-java.git",
  },
  {
    id: 7,
    title: "Travel Booking App",
    description:
      "A responsive travel booking website with dynamic package listings and form validation. Includes an admin panel for managing bookings and a modern UI for better user experience.",
    image: travelBookingImg,
    link: "https://github.com/Chamodi27s/SereneTripsLK.git",
  },
  {
    id: 8,
    title: "AI-SAAS System",
    description:
      "An AI-powered SaaS platform for generating articles, blogs, and images. Provides customizable prompts, SEO-friendly content, and a fast, intuitive interface for content creation.",
    image: aiImg,
    link: "https://github.com/Chamodi27s/AI_SAAS_Platform.git",
  },
  {
    id: 9,
    title: "Programming Learning Assistance",
    description:
      "A beginner-friendly C-based learning tool with tutorials, examples, and quizzes. Designed to help students understand core programming concepts through an interactive console interface.",
    image: cImg,
    link: "https://github.com/Chamodi27s/Chamodi27s-Programming_Learning_Assistant.git",
  },
  {
    id: 10,
    title: "LinkedIn Post Automation",
    description:
      "A Selenium-based automation tool for posting on LinkedIn. Supports multiple post types, validation with screenshots, and automated testing for reliable performance.",
    image: sImg,
    link: "https://github.com/Chamodi27s/LinkedIn_Post_Upload_Automation.git",
  },
  {
    id: 11,
    title: "Car Game in Pygame",
    description:
      "An arcade-style car game built with Python and Pygame. Features smooth controls, increasing difficulty levels, and a scoring system for an engaging gameplay experience.",
    image: carImg,
    link: "https://github.com/Chamodi27s/Python_Car_Game.git",
  },
  {
    id: 12,
    title: "User Directory Mobile App",
    description:"A Flutter-based mobile app that displays user data using REST APIs. Focuses on clean UI design, efficient data handling, and smooth navigation between user profiles.",
    image: userDirectoryImg,
    link: "https://github.com/Chamodi27s/flutter_user_directory.git",
  },
  {
    id: 13,
    title: "Smart Heathcare Appointment System",
    description:"A healthcare platform for managing doctor appointments and patient records. Includes real-time scheduling, availability tracking, and secure profile management.",
    image: healthcareImg,
    link: "https://github.com/Chamodi27s/suwasewana.git",
  },
  {
  id: 14,
    title: "TechStrike Club - Announcement Management System",
    description:
      "A full-stack web app for managing club announcements with CRUD operations. Supports image uploads, priority tagging, and category-based filtering with a modern UI.",
    image: teckstrikeImg,
    link: "https://github.com/TechstrikeCinec/Techstrike_WebSite.git",
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
