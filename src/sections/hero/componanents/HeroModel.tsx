import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { theme } from '../../../theme';

interface BrainModelProps {
  isHovered: boolean;
  mousePosition?: { x: number, y: number };
}

interface OrbitingParticlesProps {
  count: number;
  radius: number;
}

interface HeroModelProps {
  isHovered: boolean;
}

// Enhanced 3D brain model with responsive animation
const BrainModel = ({ isHovered, mousePosition = { x: 0, y: 0 } }: BrainModelProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isActive = hovered || isHovered;
  
  // Enhanced animation for the mesh
  useFrame((state) => {
    if (!mesh.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // Base animation (breathing effect)
    mesh.current.rotation.y = Math.sin(t / 4) / 4;
    mesh.current.rotation.x = Math.cos(t / 4) / 4;
    mesh.current.position.y = Math.sin(t / 1.5) / 10;
    
    // Mouse tracking rotation (subtle effect)
    if (mousePosition.x !== 0 || mousePosition.y !== 0) {
      mesh.current.rotation.y += mousePosition.x * 0.01;
      mesh.current.rotation.x += mousePosition.y * 0.01;
    }
    
    // Scale animation on hover
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      isActive ? 1.15 : 1,
      0.1
    );
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      isActive ? 1.15 : 1,
      0.1
    );
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      isActive ? 1.15 : 1,
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
          color="#2563EB" // blue-600 from theme
          attach="material"
          distort={isActive ? 0.4 : 0.3}
          speed={2.5}
          roughness={0.4}
          metalness={0.8}
          emissive={isActive ? "#60A5FA" : "#3B82F6"} // Subtle glow effect
          emissiveIntensity={isActive ? 0.4 : 0.2}
        />
      </mesh>
      
      {/* Orbiting particles with improved appearance */}
      <OrbitingParticles count={16} radius={2.2} />
    </Float>
  );
};

// Enhanced orbiting particles with varied colors and sizes
const OrbitingParticles = ({ count, radius }: OrbitingParticlesProps) => {
  const particles = useRef<(THREE.Mesh | null)[]>([]);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (!particle) return;
      
      // Calculate position on the orbit with varying speeds
      const speed = 0.3 + (i % 3) * 0.05; // Different speeds for variety
      const angle = (i / count) * Math.PI * 2 + t * speed;
      const phaseOffset = i * 0.2; // Different phase for each particle
      
      const x = Math.cos(angle) * radius * (0.8 + Math.sin(t * 0.3 + phaseOffset) * 0.2);
      const z = Math.sin(angle) * radius * (0.8 + Math.cos(t * 0.2 + phaseOffset) * 0.2);
      const y = Math.sin(t * 0.5 + i) * 0.7; // More vertical movement
      
      particle.position.set(x, y, z);
      
      // Pulse size effect
      const scale = 0.8 + Math.sin(t * 0.6 + i * 0.3) * 0.2;
      particle.scale.set(scale, scale, scale);
    });
  });
  
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        // Determine color based on index
        const getColor = () => {
          if (i % 3 === 0) return "#0D9488"; // teal-600
          if (i % 3 === 1) return "#2563EB"; // blue-600
          return "#F59E0B"; // amber-500
        };
        
        // Vary size based on index
        const getSize = () => {
          return 0.06 + (i % 4) * 0.02;
        };
        
        return (
          <mesh 
            key={i} 
            ref={(el) => (particles.current[i] = el)}
            position={[
              Math.cos((i / count) * Math.PI * 2) * radius,
              0,
              Math.sin((i / count) * Math.PI * 2) * radius
            ]}
          >
            <sphereGeometry args={[getSize(), 16, 16]} />
            <meshStandardMaterial 
              color={getColor()}
              emissive={getColor()}
              emissiveIntensity={0.6}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </>
  );
};

// Main component with mouse tracking
export const HeroModel = ({ isHovered }: HeroModelProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position relative to window center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <BrainModel isHovered={isHovered} mousePosition={mousePosition} />
        <Environment preset="city" />
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