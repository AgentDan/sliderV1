import {atom, useAtom} from "jotai";
import {useEffect, useState} from "react";
import {scenes} from "./Experience";
import img from "./1.png"

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
                <img
                    src={img}
                    className="w-40 h-35 mx-auto mt-8"
                />
                {/*<svg*/}
                {/*    className=" w-40 h-16 mx-auto mt-8 "*/}
                {/*    viewBox="0 0 342 35"*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*>*/}
                {/*    <path*/}
                {/*        d="M89.5 38.0788L76.5 15.5622C76.0181 13.8859 76.0021 12.1101 76.4535 10.4254C76.9049 8.74066 77.8067 7.21076 79.0622 6L99.0622 40.641C97.3859 41.1229 95.6101 41.1389 93.9253 40.6875C92.2406 40.2361 90.7107 39.3343 89.5 38.0788Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M89.5 38.0788L76.5 15.5622C76.5 15.5622 76.0021 12.1101 76.4535 10.4254C76.9049 8.74066 77.8067 7.21076 79.0622 6L99.0622 40.641C97.3859 41.1229 95.6101 41.1389 93.9253 40.6875C92.2406 40.2361 90.7107 39.3343 89.5 38.0788Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M103.562 38.0788L116.562 15.5622C117.044 13.8859 117.06 12.1101 116.609 10.4254C116.157 8.74066 115.255 7.21076 114 6L94 40.641C95.6762 41.1229 97.4521 41.1389 99.1368 40.6875C100.821 40.2361 102.351 39.3343 103.562 38.0788Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M103.562 38.0788L116.562 15.5622C116.562 15.5622 117.06 12.1101 116.609 10.4254C116.157 8.74066 115.255 7.21076 114 6L94 40.641C95.6762 41.1229 97.4521 41.1389 99.1368 40.6875C100.821 40.2361 102.351 39.3343 103.562 38.0788Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M33 13H7C5.3074 12.5792 3.76142 11.7052 2.52813 10.4719C1.29484 9.23858 0.420837 7.6926 0 6H40.1C39.671 7.70508 38.782 9.25962 37.53 10.494C36.278 11.7284 34.711 12.5953 33 13Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M33 26.8H7C5.3074 26.3792 3.76142 25.5052 2.52813 24.2719C1.29484 23.0386 0.420837 21.4926 0 19.8H40.1C39.671 21.5051 38.782 23.0596 37.53 24.294C36.278 25.5284 34.711 26.3953 33 26.8Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M33 40.9H7C5.3074 40.4792 3.76142 39.6052 2.52813 38.3719C1.29484 37.1386 0.420837 35.5926 0 33.9H40.1C39.671 35.6051 38.782 37.1596 37.53 38.394C36.278 39.6284 34.711 40.4953 33 40.9Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path d="M160.8 39.4251H154V4.62514L160.8 4.62515L160.8 39.4251Z" fill="black"/>*/}
                {/*    <path d="M192.021 4.81381L175.302 23.6356L166.311 23.1251L182.311 4.81378L192.021 4.81381Z"*/}
                {/*          fill="black"/>*/}
                {/*    <path d="M192.021 4.81381L175.302 23.6356L166.311 23.1251L182.311 4.81378L192.021 4.81381Z"*/}
                {/*          fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M166.241 23.1252L182.408 39.3987L187.332 39.3987L192.255 39.3987L174.5 21.1449L166.241 23.1252Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M166.241 23.1252L182.408 39.3987L187.332 39.3987L192.255 39.3987L174.5 21.1449L166.241 23.1252Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path d="M236.7 38.9H230V17.9H268V38.9H261.3V24.9H236.7V38.9Z" fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M262 11H236C234.307 10.5792 232.761 9.70516 231.528 8.47187C230.295 7.23858 229.421 5.6926 229 4H269C268.579 5.6926 267.705 7.23858 266.472 8.47187C265.239 9.70516 263.693 10.5792 262 11Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M304 18.9H310.8L310.9 18.8V32H341C340.63 33.5365 340.089 34.9592 339.044 36.1444C337.998 37.3295 336.678 38.2411 335.2 38.8H304V18.9Z"*/}
                {/*        fill="black"/>*/}
                {/*    <path opacity="0.9" d="M341 4L334.101 4L334 32L341 32L341 4Z" fill="black"/>*/}
                {/*    <path*/}
                {/*        d="M335 11H310.11C308.632 10.5792 307.283 9.70515 306.207 8.47186C305.13 7.23857 304.367 5.6926 304 4H339C338.626 5.70508 335 11 335 11Z"*/}
                {/*        fill="black"/>*/}


                {/*<path*/}
                {/*  d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"*/}
                {/*  fill="currentColor"*/}
                {/*></path>*/}
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
    );
};
