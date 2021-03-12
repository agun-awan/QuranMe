import React from 'react';

const Banner = (props) => {
    return (
        <div className="banner-panel">
            <div className="banner-title">
                <h5>Assalamualaikum</h5>
                <h3>John Doe</h3>
            </div>
            <div className="banner-info">
                <div className="banner-box">
                    <p>Last Read</p>
                    <h3>Al - Fatihah</h3>
                    <p>Ayah No 1</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;