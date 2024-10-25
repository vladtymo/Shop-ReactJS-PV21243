import React from 'react'
import image from '../assets/home.png'; // with import

export default function Home() {
    return (
        <div>
            <img style={{
                objectFit: 'contain',
                width: '100%'
            }} src={image} />
        </div>
    )
}
