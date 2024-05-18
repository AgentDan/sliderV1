import {Canvas} from "@react-three/fiber"
import {Leva} from "leva"
import {Experience} from "./components/Experience"
import {Overlay} from "./components/Overlay"
import Preloader from "./components/Preloader.jsx"
import Box from "./components/Box.jsx"
import {Suspense} from "react"

function App() {
    return (
        <>
            <Leva hidden/>
            <Overlay/>
            <Canvas shadows camera={{position: [0, 0, 5], fov: 30}}>
                <color attach="background" args={["#ececec"]}/>
                <Suspense fallback={<Box/>}>
                    <Experience/>
                </Suspense>
            </Canvas>
        </>
    )
}

export default App;
