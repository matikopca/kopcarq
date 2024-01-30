'use client'
import { useEffect, useRef } from "react";

// const ITEM_DISTANCE = 250;
// const ITEM_ANGLE = -45;
// const CENTER_ITEM_POP = 500;
// const CENTER_ITEM_DISTANCE = 80;

const ITEM_DISTANCE = 80;
const ITEM_ANGLE = -45;
const CENTER_ITEM_POP = 300;
const CENTER_ITEM_DISTANCE = 100;


const Coverflow = (props: { imagestst: string[] }) => {
    const imagestst = [
        '/int1.png',
        '/int2.png',
        '/kopcarqlogo.png',
        '/int2.png',
    ];

    const el = useRef<HTMLDivElement>(null);

    // Help function to set element style transform property
    function setTransform(el: HTMLDivElement, xpos: number, ypos: number, zpos: number, yAngle: number) {
        el.style.transform = `translateX(${xpos}px) translateY(${ypos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
    }
    useEffect(() => {
        target(Math.floor(imagestst.length * 0.5));
    }, [imagestst]);

    // Target an item, bring it to center
    function target(index: number) {

        const items = el.current!.children;

        for (let i = 0; i < items.length; i++) {

            const item = items[i] as HTMLDivElement;

            // Center item position and angle
            if (i == index) {
                setTransform(item, 0, 0, CENTER_ITEM_POP, 0);
            }
            // Left items position and angle
            else if (i === index - 1) {
                //setTransform(item, (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE, 0, -ITEM_ANGLE);
                setTransform(item, (-ITEM_DISTANCE) - CENTER_ITEM_DISTANCE, 30, -100, -ITEM_ANGLE);
            }
            // Right items position and angle
            else if (i === index + 1) {
                //    setTransform(item, (i + index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE, 0, ITEM_ANGLE);
                setTransform(item, ITEM_DISTANCE + CENTER_ITEM_DISTANCE, 30, -100, ITEM_ANGLE);

            }
            else {
                setTransform(item, 0, 0, -100, 0);
            }
        }
    }

    return (
        <div className="container my-4 h-full w-full md:w-2/3 md:px-4 bg-transparent">
            <div className="coverflow h-full w-full" ref={el}>
                {imagestst.map((it, index) =>
                    <div
                        onClick={() => target(index)}
                        key={index}
                        style={{ backgroundImage: `url(${it})` }}
                        className='coverflow-item h-full w-full'>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Coverflow;