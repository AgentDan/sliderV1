import {
  CameraControls,
  Environment,
  Grid,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { slideAtom } from "./Overlay";
import { Scene } from "./Scene";

export const scenes = [
  {
    path: "models/table_scene.glb",
    mainColor: "#f9c0ff",
    name: "Coffee table",
    description:
        "So, pour yourself a cup, sink into the embrace of the nearest sofa, and let the stories unfold.",
    price: 320,
    range: 660,
  },
  {
    path: "models/wineRack_scene.glb",
    mainColor: "#c0ffe1",
    name: "Wine Rack",
    description: "It's a symphony of flavors waiting to be uncorked.",
    price: 650,
    range: 576,
  },
  {
    path: "models/bookRack_scene.glb",
    mainColor: "#ffdec0",
    name: "Book Rack",
    description: "This isn't just a book rack; it's a gateway to adventure.",
    price: 450,
    range: 800,
  },
];

const CameraHandler = ({ slideDistance }) => {
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = useRef(0);

  const { dollyDistance } = useControls({
    dollyDistance: {
      value: 10,
      min: 0,
      max: 50,
    },
  });

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
        lastSlide.current * (viewport.width + slideDistance),
        3,
        dollyDistance,
        lastSlide.current * (viewport.width + slideDistance),
        0,
        0,
        true
    );

    await cameraControls.current.setLookAt(
        (slide + 1) * (viewport.width + slideDistance),
        1,
        dollyDistance,
        slide * (viewport.width + slideDistance),
        0,
        0,
        true
    );

    await cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0,
        true
    );
  };

  useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
          slide * (viewport.width + slideDistance),
          0,
          5,
          slide * (viewport.width + slideDistance),
          0,
          0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);
  return (
      <CameraControls
          ref={cameraControls}
          touches={{
            one: 0,
            two: 0,
            three: 0,
          }}
          mouseButtons={{
            left: 0,
            middle: 0,
            right: 0,
          }}
      />
  );
};

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  return (
      <>
        <ambientLight intensity={0.2} />
        <Environment preset={"city"} />
        <CameraHandler slideDistance={slideDistance} />
        <Grid
            position-y={-viewport.height / 2}
            sectionSize={1}
            sectionColor={"purple"}
            sectionThickness={1}
            cellSize={0.5}
            cellColor={"#6f6f6f"}
            cellThickness={0.6}
            infiniteGrid
            fadeDistance={50}
            fadeStrength={5}
        />
        {scenes.map((scene, index) => (
            <mesh
                key={index}
                position={[index * (viewport.width + slideDistance), 0, 0]}
            >
              <planeGeometry args={[viewport.width, viewport.height]} />
              <meshBasicMaterial toneMapped={false}>
                <RenderTexture attach="map">
                  <Scene {...scene} />
                </RenderTexture>
              </meshBasicMaterial>
            </mesh>
        ))}
      </>
  );
};