import {Canvas} from "@react-three/fiber"
import {Experience} from "./components/Experience"
import {Overlay} from "./components/Overlay"
import Preloader from "./components/Preloader.jsx"
import {Suspense} from "react"
import {Leva} from "leva"
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Overlay/>
                <Suspense fallback={<Preloader/>}>
                    <Leva hidden={true}/>
                    <Canvas shadows camera={{position: [0, 0, 5], fov: 30}}>
                        <color attach="background" args={["#ececec"]}/>
                        <Experience/>
                    </Canvas>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default App;
