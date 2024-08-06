import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const projectsData = [
    {
        id: 1,
        title: 'Project A',
        category: 'Ongoing',
        description: 'Detailed description for Project A',
        image: 'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740',
        status: 'Ongoing'
    },
    {
        id: 2,
        title: 'Project B',
        category: 'Completed',
        description: 'Detailed description for Project B',
        image: 'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740',
        status: 'Completed'
    },
    {
        id: 3,
        title: 'Project C',
        category: 'Ongoing',
        description: 'Detailed description for Project C',
        image: 'https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740',
        status: 'Ongoing'
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(project => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">{project.title}</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src='https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1722870585~exp=1722874185~hmac=fcb9b17a49fe1cc035abd4f9808db5378c9122e8b183d113f21395c72c8f3487&w=740' className="img-fluid" alt={project.title} />
                    </div>
                    <div className="col-md-6">
                        <p>{project.description}</p>
                        <span className={`badge ${project.status === 'Ongoing' ? 'bg-success' : 'bg-secondary'}`}>{project.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
