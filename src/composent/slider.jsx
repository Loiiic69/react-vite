import img1 from "/img/1.webp"
import img2 from "/img/9.jpg"
import img3 from "/img/6.jpg"
import { useEffect, useState } from "react";

export function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [img1, img2, img3]

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    };

    useEffect(function(){
        const autoSwip = setInterval(handleNextClick, 10000)

        return ()=> clearInterval(autoSwip)
    }, [activeIndex])

    return (
        <div className="mb-5 relative h-100 overflow-hidden">
            <div className="flex">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute w-full h-auto ${activeIndex === index ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-500`}
                    />
                ))}
            </div>
            <div className="h-full transform  left-0 right-0 flex justify-between items-center">
              
            </div>
        </div>

    )
}