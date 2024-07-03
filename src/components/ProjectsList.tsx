// src/components/ProjectsList.tsx

import React from 'react';
import './ProjectsList.css';

const ProjectsList: React.FC = () => {
    return (
        <div className="projects-section">
            <h3>List of projects:</h3>
            <ul className="projects-list">
                <li>Research work for the All-Russian competition among the ninth grades (1st place)</li>
                <li>Teamwork on an application for sports by one of the major Nizhny Novgorod gym companies</li>
                <li>A little experience working on websites</li>
            </ul>
        </div>
    );
};

export default ProjectsList;
    