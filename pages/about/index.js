import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import Layout from "../../components/Layout";
import About from "../../components/About";
import RevealBento from "./Contact";
const ParticleRing = () => {
  return (
    <Layout>
      <About />
      <RevealBento />

      <div className="relative">
        <Canvas
          camera={{
            position: [10, -7.5, -5],
          }}
          style={{ height: "100vh" }}
          className="bg-slate-900"
        >
          <OrbitControls maxDistance={20} minDistance={10} />
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <PointCircle />
        </Canvas>

        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
          Hi there!
        </p>
      </div>
    </Layout>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  const MIN_RADIUS = 7.5;
  const MAX_RADIUS = 15;
  const DEPTH = 2;
  const LEFT_COLOR = "6366f1";
  const RIGHT_COLOR = "8b5cf6";
  const NUM_POINTS = 2500;

  const getGradientStop = (ratio) => {
    ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
    const c0 = LEFT_COLOR.match(/.{1,2}/g).map(
      (oct) => parseInt(oct, 16) * (1 - ratio)
    );
    const c1 = RIGHT_COLOR.match(/.{1,2}/g).map(
      (oct) => parseInt(oct, 16) * ratio
    );
    const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
    const color = ci
      .reduce((a, v) => (a << 8) + v, 0)
      .toString(16)
      .padStart(6, "0");

    return `#${color}`;
  };

  const calculateColor = (x) => {
    const maxDiff = MAX_RADIUS * 2;
    const distance = x + MAX_RADIUS;

    const ratio = distance / maxDiff;

    const stop = getGradientStop(ratio);
    return stop;
  };

  const randomFromInterval = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const pointsOuter = Array.from(
    { length: NUM_POINTS / 4 },
    (v, k) => k + 1
  ).map((num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
    const angle = Math.random() * Math.PI * 2;

    const x = Math.cos(angle) * randomRadius;
    const y = Math.sin(angle) * randomRadius;
    const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

    const color = calculateColor(x);

    return {
      idx: num,
      position: [x, y, z],
      color,
    };
  });

  const pointsInner = Array.from({ length: NUM_POINTS }, (v, k) => k + 1).map(
    (num) => {
      const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
      const randomAngle = Math.random() * Math.PI * 2;

      const x = Math.cos(randomAngle) * randomRadius;
      const y = Math.sin(randomAngle) * randomRadius;
      const z = randomFromInterval(-DEPTH, DEPTH);

      const color = calculateColor(x);

      return {
        idx: num,
        position: [x, y, z],
        color,
      };
    }
  );

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
