import React from 'react';
import '../Portfolio.css';
import StarWarsQuizImage from '../Star Wars Quiz Screen Shot.png';
import ToDoImage from '../TO-Do App Screen Shot.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Star Wars Quiz Game',
      description: 'A Star Wars quiz game using HTML, CSS, & Javascript.',
      image: StarWarsQuizImage,
      link: 'https://foxshane997.github.io/StarWarsQuiz.github.io/' 
    },
    {
      id: 2,
      title: 'To-Do Application',
      description: 'A To-Do Application built using React.',
      image: ToDoImage,
      link: 'https://foxshane997.github.io/SF-To-Do-List.github.io/' 
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description for project three.',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com/your-username/project-three'
    },
    // {
    //   id: 4,
    //   title: 'Project Four',
    //   description: 'Description for project four.',
    //   image: 'https://via.placeholder.com/150',
    //   link: 'https://github.com/your-username/project-four'
    // },
    // {
    //   id: 5,
    //   title: 'Project Five',
    //   description: 'Description for project five.',
    //   image: 'https://via.placeholder.com/150',
    //   link: 'https://github.com/your-username/project-five' 
    // },
    // {
    //   id: 6,
    //   title: 'Project Six',
    //   description: 'Description for project six.',
    //   image: 'https://via.placeholder.com/150',
    //   link: 'https://github.com/your-username/project-six' 
    // }
  ];

  return (
    <div className="portfolio">
      {projects.map(project => (
        <a href={project.link} className="card" key={project.id} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  );
}

export default Portfolio;
