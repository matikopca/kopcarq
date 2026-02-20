'use client'
import { useEffect, useRef } from "react";

const ITEM_DISTANCE = 200;
const ITEM_ANGLE = -45;
const CENTER_ITEM_POP = 400;
const CENTER_ITEM_Y = 50;
const SIDE_ITEM_Y = 5;
const CENTER_SCALE = 1.15;

type CoverflowProps = {
    activeIndex?: number;
    onIndexChange?: (index: number) => void;
};

export default function Coverflow({ activeIndex = 0, onIndexChange }: CoverflowProps) {
    ;
    // const Coverflow = (props: { imagestst: string[] }) => {
    const imagestst = [
        '/edif1.jpg',
        '/edif2.jpg',
        '/edif3.jpg',
        '/int2.png',
    ];

    const el = useRef<HTMLDivElement>(null);

    function setTransform(el: HTMLDivElement | any, xpos: number, ypos: number, zpos: number, yAngle: number, scale = 1) {
        el.style.transform = `translateX(${xpos}px) translateY(${ypos}px) translateZ(${zpos}px) rotateY(${yAngle}deg) scale(${scale})`;
    }
    useEffect(() => {
        target(activeIndex);
    }, [activeIndex]);

    // Target an item, bring it to center
    function target(index: number) {
        const items = el.current!.children;
        // Assuming 'index' is the current index of the clicked item
        const lastIndex = items.length - 1;

        for (let i = 0; i < items.length; i++) {
            let item = items[i] as HTMLDivElement;

            // Center item: bigger, lower, front
            if (i === index) {
                setTransform(item, 0, CENTER_ITEM_Y, CENTER_ITEM_POP, 0, CENTER_SCALE);

                if (index === 0) {
                    const lastItem = items[lastIndex] as HTMLDivElement;
                    setTransform(lastItem, -ITEM_DISTANCE, SIDE_ITEM_Y, 0, -ITEM_ANGLE);
                } else if (index === lastIndex) {
                    const firstItem = items[0] as HTMLDivElement;
                    setTransform(firstItem, ITEM_DISTANCE, SIDE_ITEM_Y, 0, ITEM_ANGLE);
                }
            }
            // Left items
            else if (i === (index - 1 + items.length) % items.length) {
                setTransform(item, -ITEM_DISTANCE, SIDE_ITEM_Y, 0, -ITEM_ANGLE);
            }
            // Right items
            else if (i === (index + 1) % items.length) {
                setTransform(item, ITEM_DISTANCE, SIDE_ITEM_Y, 0, ITEM_ANGLE);
            } else {
                setTransform(item, 0, 0, 0, 0);
            }
        }
    }

    return (
        <div className="container flex relative justify-center items-center w-full h-full max-w-full bg-transparent">
            <div className="coverflow flex justify-center relative w-2/3 md:w-full h-full min-h-[180px] md:min-h-[200px]" ref={el}>
                {imagestst.map((it, index) =>
                    <div
                        onClick={() => { target(index); onIndexChange?.(index); }}
                        key={index}
                        style={{ backgroundImage: `url(${it})` }}
                        // className='coverflow-item max-w-full h-48 md:h-[350px] md:max-h-[0.5] md:w-[550px] md:top-0 md:absolute'
                        className="coverflow-item absolute origin-center h-[100px] w-[175px] max-w-full lg:h-[350px] lg:w-[550px] 
                        border border-zinc-200 rounded-lg bg-no-repeat bg-cover bg-center shadow-lg 
                        transition-all duration-500 ease-out">
                    </div>)
                }
            </div>
        </div>
    )
}

// export default Coverflow;
