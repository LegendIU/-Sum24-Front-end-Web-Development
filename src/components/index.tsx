import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Bio from './components/Bio';
import ProjectsList from './components/ProjectsList';
import Comic from './components/Comic';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Bio />
                <ProjectsList />
                <Comic />
            </main>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
