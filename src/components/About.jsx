import React from 'react'
import image from '../assets/about_page.png'; // with import

export default function About() {
    return (
        <div>
            <img style={{
                objectFit: 'contain',
                width: '100%'
            }} src={image} />
        </div>
    )
}
