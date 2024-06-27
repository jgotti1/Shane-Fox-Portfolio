import React from 'react';
import '../Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description for project one.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description for project two.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description for project three.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Description for project four.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'Description for project five.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'Description for project six.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="portfolio">
      {projects.map(project => (
        <div className="card" key={project.id}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
