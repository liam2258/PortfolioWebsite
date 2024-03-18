import React from "react";
import '../App.css';
import github from '../Images/github.svg';

/**
 * Renders a list of project cards based on the provided project data.
 * Each project card displays the project title, description, tools used, and a link to the GitHub repository.
 * 
 * @component
 * @example
 * // Usage:
 * <ProjectCards />
 */
function ProjectCards() {
  const projects = [
    {
      title: 'Pymail',
      description: 'A RESTful API written in Python that turns requests into emails and sends them. It also tracks sent messages using a PostgreSQL database.',
      tools: 'Python, Docker, JSON, REST, Heroku',
      githubLink: 'https://github.com/liam2258/Pymail'
    },
    {
      title: 'Huffman CompAndDecomp',
      description: 'A Huffman compression and decompression program written in C++.',
      tools: 'C++, Binary Trees, Hash Tables',
      githubLink: 'https://github.com/liam2258/HuffmanCompAndDecomp'
    },
    {
      title: 'FaceRecognizer',
      description: 'A full-stack web application that locates the face on given images. Includes a functioning registration and login system.',
      tools: 'JavaScript, React, JSON, REST, PostgreSQL, Heroku',
      githubLink: 'https://github.com/liam2258/FaceRecognition'
    },
    {
      title: 'TFTPy',
      description: 'An implementation of a TFTP server using Python. Server accepts arguments using arg parser and processes read and write requests.',
      tools: 'Python',
      githubLink: 'https://github.com/liam2258/TFTPy'
    },
    {
      title: 'TravelingSalesmanEA',
      description: 'An implementation of the traveling salesman problem using evolutionary algorithms. Tests different mutations and compares results.',
      tools: 'C++',
      githubLink: 'https://github.com/liam2258/TravelingSalesmanEA'
    },
    {
      title: 'JobWebScraper',
      description: 'A Python script to scrape job data from GlassDoor. Compiles data on preferred programming languages, location, and employer to a CSV.',
      tools: 'Python, Selenium',
      githubLink: 'https://github.com/liam2258/JobWebScraper'
    }
  ];

  return (
        <div className='cardHolder'>
          {projects.map((project, index) => (
            <div className='card' key={index}>
              <div className='cardTitle'>
                <h2>{project.title}</h2>
              </div>
              <div className='cardBody'>
                <p>{project.description}</p>
              </div>
              <div className='cardSkills'>
                Tools used: {project.tools}
              </div>
              <div className='cardIcons'>
                <a target="_blank" rel="noreferrer" href={project.githubLink}>
                  <img src={github} alt="Github icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
  );
}

export default ProjectCards;
