import React from 'react'
import {OrbitControls} from "@react-three/drei"

const Box = () => {
    return (
        <>
            <mesh>
                <OrbitControls autoRotate={true} autoRotateSpeed={100}/>
                <boxBufferGeometry attach="geometry" args={[0.05,0.05,2]}/>
                <meshStandardMaterial attach="material"/>
            </mesh>
        </>
    )
}

export default Box