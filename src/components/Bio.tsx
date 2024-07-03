// src/components/Bio.tsx

import React from 'react';
import './Bio.css';

const Bio: React.FC = () => {
    return (
        <div className="bio">
            <img src="images/myfoto.jpg" alt="My Photo" className="profile-photo" />
            <div className="profile-details">
                <h2>Galkin Vladislav Vadimovich</h2>
                <p><strong>Date of birth:</strong> 05/13/2006</p>
                <p><strong>Born in:</strong> Nizhny Novgorod</p>
                <p><strong>2012-2023:</strong> Studied at Lyceum #165 named after the 65th anniversary of GAZ</p>
                <p>At the moment I am studying at Innopolis University, I live in the city of Innopolis</p>
            </div>
        </div>
    );
};

export default Bio;
