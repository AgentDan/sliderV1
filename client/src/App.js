import {Canvas} from "@react-three/fiber"
import {Experience} from "./components/Experience"
import {Overlay} from "./components/Overlay"
import Preloader from "./components/Preloader.jsx"
import {Suspense} from "react"
import {Leva} from "leva"

function App() {
    return (
        <>
            <Suspense fallback={<Preloader/>}>
                <Leva hidden={true}/>
                <Overlay/>
                <Canvas shadows camera={{position: [0, 0, 5], fov: 30}}>
                    <color attach="background" args={["#ececec"]}/>
                    <Experience/>
                </Canvas>
            </Suspense>
        </>
    )
}

export default App;
