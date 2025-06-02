import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { theme } from '../../../theme';

interface BrainModelProps {
  isHovered: boolean;
}

interface OrbitingParticlesProps {
  count: number;
  radius: number;
}

interface HeroModelProps {
  isHovered: boolean;
}

// Floating brain model representing AI and smart education
const BrainModel = ({ isHovered }: BrainModelProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animate the mesh on hover
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t / 4) / 4;
    mesh.current.rotation.x = Math.cos(t / 4) / 4;
    mesh.current.position.y = Math.sin(t / 1.5) / 10;
    
    // Scale up slightly when hovered
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered || isHovered ? 1.1 : 1,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered || isHovered ? 1.1 : 1,
      0.1
    );
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      hovered || isHovered ? 1.1 : 1,
      0.1
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#2563EB"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
      
      {/* Orbiting particles */}
      <OrbitingParticles count={12} radius={2} />
    </Float>
  );
};

// Particles orbiting around the brain
const OrbitingParticles = ({ count, radius }: OrbitingParticlesProps) => {
  const particles = useRef<(THREE.Mesh | null)[]>([]);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (!particle) return;
      
      // Calculate position on the orbit
      const angle = (i / count) * Math.PI * 2 + t * 0.3;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(t * 0.5 + i) * 0.5;
      
      particle.position.set(x, y, z);
    });
  });
  
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => (particles.current[i] = el)}
          position={[
            Math.cos((i / count) * Math.PI * 2) * radius,
            0,
            Math.sin((i / count) * Math.PI * 2) * radius
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#0D9488" : "#2563EB"}
            emissive={i % 2 === 0 ? "#0D9488" : "#2563EB"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </>
  );
};

// Main component that wraps the 3D scene
export const HeroModel = ({ isHovered }: HeroModelProps) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <BrainModel isHovered={isHovered} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
}; 