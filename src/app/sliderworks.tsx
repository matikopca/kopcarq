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


export default function Coverflow() {
    ;
    // const Coverflow = (props: { imagestst: string[] }) => {
    const imagestst = [
        '/edif1.jpg',
        '/edif2.jpg',
        '/edif3.jpg',
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
            let item = items[i] as HTMLDivElement;

            // Center item position and angle
            if (i === index) {
                setTransform(item, 0, 30, CENTER_ITEM_POP, 0);

                if (index === 0) {
                    // If the first item is clicked, set the last item to the left
                    //setTransform(items[lastIndex], -ITEM_DISTANCE, 30, 0, -ITEM_ANGLE);
                    let item = items[lastIndex] as HTMLDivElement
                    setTransform(item, -ITEM_DISTANCE, 30, 0, -ITEM_ANGLE);
                } else if (index === lastIndex) {
                    // If the last item is clicked, set the first item to the right
                    let item = items[0] as HTMLDivElement
                    setTransform(item, ITEM_DISTANCE, 30, 0, ITEM_ANGLE);
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
        <div className={`container flex relative justify-center items-center max-w-full w-full left-0 h-[60%] top-0 md:top-0 md:h-full md:w-2/3 md:relative bg-transparent`}>
            <div className="coverflow flex justify-center absolute top-[60%] h-1/2 w-2/3 md:h-full md:w-full md:top-1/4" ref={el}>
                {imagestst.map((it, index) =>
                    <div
                        onClick={() => target(index)}
                        key={index}
                        style={{ backgroundImage: `url(${it})` }}
                        // className='coverflow-item max-w-full h-48 md:h-[350px] md:max-h-[0.5] md:w-[550px] md:top-0 md:absolute'
                        className="coverflow-item absolute origin-center h-[200px] w-[350px] max-w-full lg:h-[350px] lg:w-[550px] 
                        border-2 border-red-600 rounded-lg bg-no-repeat bg-cover bg-center 
                        transition-all duration-500 ease-out">
                    </div>)
                }
            </div>
        </div>
    )
}

// export default Coverflow;