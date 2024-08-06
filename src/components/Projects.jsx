import { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Project A',
        category: 'Ongoing',
        description: 'Description for Project A',
        image: 'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740',
        status: 'Ongoing'
    },
    {
        id: 2,
        title: 'Project B',
        category: 'Completed',
        description: 'Description for Project B',
        image: 'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740',
        status: 'Completed'
    },
    {
        id: 3,
        title: 'Project C',
        category: 'Ongoing',
        description: 'Description for Project C',
        image: 'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740',
        status: 'Ongoing'
    }
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <div className="projects-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">Our Projects</h2>
                <div className="categories text-center mb-4">
                    <button 
                        className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => handleCategoryChange('All')}>All</button>
                    <button 
                        className={`btn ${selectedCategory === 'Ongoing' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => handleCategoryChange('Ongoing')}>Ongoing</button>
                    <button 
                        className={`btn ${selectedCategory === 'Completed' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => handleCategoryChange('Completed')}>Completed</button>
                </div>
                <div className="row">
                    {filteredProjects.map(project => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div className="card project-card">
                                <img src='https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740' className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={`/projects/${project.id}`} className="btn btn-outline-primary">Read More</a>
                                    <span className={`badge ${project.status === 'Ongoing' ? 'bg-success' : 'bg-secondary'}`}>{project.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
