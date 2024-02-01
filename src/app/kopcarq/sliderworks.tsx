'use client'
import { useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
// const ITEM_DISTANCE = 250;
// const ITEM_ANGLE = -45;
// const CENTER_ITEM_POP = 500;
// const CENTER_ITEM_DISTANCE = 80;

const ITEM_DISTANCE = 200;
const ITEM_ANGLE = -45;
const CENTER_ITEM_POP = 400;
const CENTER_ITEM_DISTANCE = 80;


const Coverflow = (props: { imagestst: string[] }) => {
    const imagestst = [
        '/int1.png',
        '/int2.png',
        '/kopcarqlogo.png',
        '/int2.png',
    ];

    const el = useRef<HTMLDivElement>(null);

    // Help function to set element style transform property
    function setTransform(el: HTMLDivElement | any, xpos: number, ypos: number, zpos: number, yAngle: number) {
        el.style.transform = `translateX(${xpos}px) translateY(${ypos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
    }
    useEffect(() => {
        target(Math.floor(imagestst.length * 0.5));
    }, [imagestst]);

    // Target an item, bring it to center
    function target(index: number) {
        const items = el.current!.children;
        // Assuming 'index' is the current index of the clicked item
        const lastIndex = items.length - 1;

        for (let i = 0; i < items.length; i++) {
            const item = items[i] as HTMLDivElement;

            // Center item position and angle
            if (i === index) {
                setTransform(item, 0, 30, CENTER_ITEM_POP, 0);

                if (index === 0) {
                    // If the first item is clicked, set the last item to the left
                    setTransform(items[lastIndex], -ITEM_DISTANCE, 30, 0, -ITEM_ANGLE);
                } else if (index === lastIndex) {
                    // If the last item is clicked, set the first item to the right
                    setTransform(items[0], ITEM_DISTANCE, 30, 0, ITEM_ANGLE);
                }
            }
            // Left items position and angle
            else if (i === (index - 1 + items.length) % items.length) {
                setTransform(item, -ITEM_DISTANCE, 30, 0, -ITEM_ANGLE);
            }
            // Right items position and angle
            else if (i === (index + 1) % items.length) {
                setTransform(item, ITEM_DISTANCE, 30, 0, ITEM_ANGLE);
            } else {
                setTransform(item, 0, 0, 0, 0);
            }
        }
    }

    return (
        <div className={`container my-4 left-0 h-full w-full md:w-2/3 md:px-4 md:absolute bg-transparent`}>
            <div className="coverflow h-full w-full md:top-1/4" ref={el}>
                {imagestst.map((it, index) =>
                    <div
                        onClick={() => target(index)}
                        key={index}
                        style={{ backgroundImage: `url(${it})` }}
                        className='coverflow-item max-w-full max-h-3/5 md:h-[350px] md:max-h-[0.5] md:w-[550px] md:top-0 md:absolute'>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Coverflow;