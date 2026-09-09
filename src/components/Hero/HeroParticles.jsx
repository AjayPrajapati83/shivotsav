import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Ember particles + god-ray planes for the hero 3D layer.
 * Particle count is controlled by the parent via props.
 */
export function HeroParticles({ count = 800 }) {
  const pointsRef = useRef();
  const raysRef = useRef();

  // Generate random positions for ember particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;       // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;   // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;   // z
      sizes[i] = Math.random() * 3 + 1;
      speeds[i] = Math.random() * 0.3 + 0.1;
    }

    return { positions, sizes, speeds };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Drift upward + slight horizontal wave
      pos[i * 3 + 1] += particles.speeds[i] * 0.015;
      pos[i * 3] += Math.sin(time * 0.5 + i) * 0.002;

      // Reset particles that go too high
      if (pos[i * 3 + 1] > 10) {
        pos[i * 3 + 1] = -10;
        pos[i * 3] = (Math.random() - 0.5) * 20;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Rotate god-ray planes slowly
    if (raysRef.current) {
      raysRef.current.rotation.z = Math.sin(time * 0.15) * 0.1;
      raysRef.current.children.forEach((child, i) => {
        child.material.opacity = 0.03 + Math.sin(time * 0.3 + i * 1.5) * 0.025;
      });
    }
  });

  return (
    <>
      {/* Ember particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#f5a623"
          size={0.06}
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* God-ray planes */}
      <group ref={raysRef} position={[0, 0, -3]}>
        {[...Array(3)].map((_, i) => (
          <mesh
            key={i}
            rotation={[0, 0, (i - 1) * 0.3 + Math.PI * 0.1]}
            position={[(i - 1) * 2, 1, 0]}
          >
            <planeGeometry args={[0.5, 15]} />
            <meshBasicMaterial
              color="#d4a843"
              transparent
              opacity={0.04}
              blending={THREE.AdditiveBlending}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>

      {/* Ambient light for the scene */}
      <ambientLight intensity={0.2} />
    </>
  );
}

export default HeroParticles;
