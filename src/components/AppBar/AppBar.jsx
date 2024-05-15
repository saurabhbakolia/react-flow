import React from 'react';
import './AppBar.css';

const AppBar = ({ handleComponentChange, componentMap }) => {
    return (
        <div className='app-bar'>
            {Object.keys(componentMap).map((componentName) => (
                <button key={componentName} onClick={() => handleComponentChange(componentName)}>
                    {componentName}
                </button>
            ))}
        </div>
    )
}

export default AppBar