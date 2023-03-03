import React from "react";

export default function projects(props) {
    const image = props.image
    const title = props.title
    const repoUrl = props.repo
    const deployedUrl = props.deployed
    return (
        <div className="projectItemCard">
            <div className="projectsInfo">
                <a href={deployedUrl}><h3>{title}</h3></a>
                <a href={repoUrl}>
                    <img src="github.png" alt="logo" className="publicImage"></img>
                </a>
            </div>
            <img src={image} alt="project" className="projectImg"></img>
        </div>
    )
}