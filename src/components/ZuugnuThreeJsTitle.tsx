'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ZuugnuThreeJsTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Fully transparent background
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting - bright with pink accent
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const pinkLight = new THREE.PointLight(0xff1493, 2);
    pinkLight.position.set(-10, -10, 10);
    scene.add(pinkLight);

    // Create particle geometry
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;

      // Vibrant neon colors - bright pink, magenta, purple, cyan
      const colorType = Math.random();
      if (colorType < 0.3) {
        // Bright Hot Pink
        colors[i] = 1;
        colors[i + 1] = 0.1;
        colors[i + 2] = 0.8;
      } else if (colorType < 0.5) {
        // Bright Magenta
        colors[i] = 1;
        colors[i + 1] = 0;
        colors[i + 2] = 1;
      } else if (colorType < 0.75) {
        // Hot Pink/Fuchsia
        colors[i] = 1;
        colors[i + 1] = 0.2;
        colors[i + 2] = 0.9;
      } else {
        // Cyan accent
        colors[i] = 0;
        colors[i + 1] = 1;
        colors[i + 2] = 1;
      }
    }

    const geometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    const colorAttribute = new THREE.BufferAttribute(colors, 3);

    geometry.setAttribute('position', positionAttribute);
    geometry.setAttribute('color', colorAttribute);

    const material = new THREE.PointsMaterial({
      size: 0.03,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: false,
      fog: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let time = 0;
    const startTime = performance.now();

    // Animation loop
    const animate = (currentTime: number) => {
      time = (currentTime - startTime) * 0.0005;

      // Rotate particles
      points.rotation.x = time * 0.3;
      points.rotation.y = time * 0.5;

      // Update positions with wave effect
      const pos = geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArray = pos.array as Float32Array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];

        posArray[i] = x + Math.sin(time + y * 0.5) * 0.5;
        posArray[i + 1] = y + Math.cos(time + x * 0.5) * 0.5;
        posArray[i + 2] = z + Math.sin(time + z * 0.5) * 0.3;
      }

      pos.needsUpdate = true;
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}
