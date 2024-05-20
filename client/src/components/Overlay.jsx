import {atom, useAtom} from "jotai"
import {useEffect, useState} from "react"
import {scenes} from "./Experience"
import img1 from "./1.png"
import img2 from "./2.png"

export const slideAtom = atom(0);

export const Overlay = () => {
    const [slide, setSlide] = useAtom(slideAtom);
    const [displaySlide, setDisplaySlide] = useState(slide);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 1000);
    }, []);

    useEffect(() => {
        setVisible(false);
        setTimeout(() => {
            setDisplaySlide(slide);
            setVisible(true);
        }, 2600);
    }, [slide]);

    return (
        <>
            <div
                className={`fixed z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-black ${
                    visible ? "" : "opacity-0"
                } transition-opacity duration-1000`}
            >
                <a  href="http://web3ddd.com"
                    target="_blank"
                    className="flex justify-end"
                >
                    <span className="content-center text-2xl bg-amber-400">ddd</span>
                    <img src={img2}
                         alt="designer"
                         className="w-10 h-10 pointer-events-auto cursor-pointer"
                    />
                </a>
                <div className="absolute top-0 left-0 right-0 flex-1 flex items-center justify-center p-4">
                    <img
                        src={img1}
                        className="w-40 h-35"
                    />
                </div>

                {/*<svg*/}
                {/*    className=" w-40 h-16 mx-auto mt-8 "*/}
                {/*    viewBox="0 0 342 35"*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*>*/}
                {/*</svg>*/}
                <div className="absolute top-0 bottom-0 left-0 right-0 flex-1 flex items-center justify-between p-4">

                    <svg
                        onClick={() =>
                            setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
                        onClick={() =>
                            setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
                <div className="bg-gradient-to-t from-white/90 pt-20 pb-10 p-4 flex items-center flex-col text-center">
                    <h1 className="text-5xl font-extrabold">
                        {scenes[displaySlide].name}
                    </h1>
                    <p className="text-opacity-60 italic">
                        {scenes[displaySlide].description}
                    </p>
                    <div className="flex items-center gap-12 mt-10">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                    />
                                </svg>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 254 254"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-15 h-15 -mr-3"

                                >
                                    <path
                                        d="M137.9 171.255C121.998 171.255 108.063 162.825 100.221 150.227H136.464V133.367H94.0329C93.7182 131.235 93.5019 129.074 93.5019 126.857C93.5019 124.64 93.7182 122.479 94.0329 120.349H136.464V103.489H100.221C108.063 90.8886 121.998 82.4586 137.9 82.4586C144.028 82.4586 149.972 83.6894 155.564 86.1201L162.279 70.6566C154.555 67.3015 146.352 65.5986 137.897 65.5986C112.393 65.5986 90.4867 81.27 81.2812 103.486H72.3088V120.346H76.9875C76.7627 122.487 76.6419 124.656 76.6419 126.857C76.6419 129.057 76.7627 131.226 76.9903 133.365H72.3117V150.225H81.284C90.4895 172.443 112.393 188.115 137.9 188.115C146.355 188.115 154.56 186.415 162.282 183.059L155.564 167.593C149.974 170.021 144.028 171.255 137.9 171.255Z"
                                        fill="black"/>
                                </svg>
                                <p className="font-semibold text-3xl">
                                    {scenes[displaySlide].price.toLocaleString()}
                                </p>
                            </div>
                            <p className="text-sm opacity-80">After Federal Tax Credit</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
