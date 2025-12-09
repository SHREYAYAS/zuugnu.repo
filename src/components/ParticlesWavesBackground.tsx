"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticlesWavesBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight / 2;
    let frameId: number;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent

    // Geometry
    const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 20;
    let particles: THREE.Points;
    let count = 0;
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const geometry = new THREE.BufferGeometry();

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z
        i += 3;
      }
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0x2196f3, size: 8 });
    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    function animate() {
      const positions = geometry.attributes.position.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] = Math.sin((ix + count) * 0.3) * 20 + Math.sin((iy + count) * 0.5) * 20;
          i += 3;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.1;
      frameId = requestAnimationFrame(animate);
    }

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
