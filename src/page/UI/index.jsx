import React from 'react'
import "./UI.css"
const UI = ({ title }) => {
    return (
        <section className="title-item">
            <div className="text-center container">
                <h2>{title}</h2>
            </div>
        </section>
    );
};

export default UI;