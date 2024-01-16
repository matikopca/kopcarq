import React from 'react';
import Carousel from './carousel';
import { DiVim } from 'react-icons/di';

export default function Home() {
    let slides = [
        { id: 1, src: "/int1.png" },
        { id: 2, src: "/int2.png" },
        { id: 3, src: "/kopcarqlogo.png" },
    ];

    return (
        <>
            <Carousel images={slides} />
        </>
    );
}
