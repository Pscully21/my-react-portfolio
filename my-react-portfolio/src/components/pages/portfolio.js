import React from "react";
import Projects from '../projects';

const projectItems = [
    {
        title: 'Intentional Health',
        image: 'intentional-health.png',
        repo: 'https://github.com/Pscully21/Project-2-Intentional-Health',
        deployed: 'https://intentional-health.herokuapp.com/'
    },
    {
        title: 'Movie Finder',
        image: 'movie.png',
        repo: 'https://github.com/Pscully21/Project-1-Movies',
        deployed: 'https://pscully21.github.io/Project-1-Movies/'
    },
    {
        title: 'Arsenal-JS Quiz',
        image: 'arsenal-js-quiz.png',
        repo: 'https://github.com/Pscully21/Arsenal-quiz',
        deployed: ''
    },
]
export default function Portfolio() {
    return (
        <div>
            <h2>My Portfolio</h2>
            <div className='projectItem'>
                {projectItems.map((projects) => {
                    return Projects(projects)
                })}
            </div>
        </div>
    )
}