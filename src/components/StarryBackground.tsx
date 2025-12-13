"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarryBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frameId: number;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer with dark navy background
    const renderer = new THREE.WebGLRenderer({ 
      alpha: false, 
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x1a1a2e, 1); // Dark navy background
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    const starSizes = [];
    const starColors = [];

    // Create 2000 stars with varying positions, sizes, and colors
    for (let i = 0; i < 2000; i++) {
      // Random position in 3D space
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      
      starVertices.push(x, y, z);
      
      // Varying star sizes
      starSizes.push(Math.random() * 1.5 + 0.5);
      
      // Mix of white and orange/yellow stars
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        // White stars (70%)
        starColors.push(1, 1, 1);
      } else if (colorChoice < 0.85) {
        // Orange stars (15%)
        starColors.push(1, 0.7, 0.3);
      } else {
        // Yellow stars (15%)
        starColors.push(1, 0.9, 0.5);
      }
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    // Custom shader material for glowing stars
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      map: createCircleTexture(),
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add some brighter accent stars
    const accentGeometry = new THREE.BufferGeometry();
    const accentVertices = [];
    const accentSizes = [];
    
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 80;
      
      accentVertices.push(x, y, z);
      accentSizes.push(Math.random() * 2 + 1);
    }

    accentGeometry.setAttribute('position', new THREE.Float32BufferAttribute(accentVertices, 3));
    accentGeometry.setAttribute('size', new THREE.Float32BufferAttribute(accentSizes, 1));

    const accentMaterial = new THREE.PointsMaterial({
      size: 0.3,
      color: 0xffa500, // Orange glow
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      map: createCircleTexture(),
    });

    const accentStars = new THREE.Points(accentGeometry, accentMaterial);
    scene.add(accentStars);

    // Animation
    let time = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);
      time += 0.001;
      
      // Slow rotation for subtle movement
      stars.rotation.y = time * 0.05;
      stars.rotation.x = time * 0.02;
      
      accentStars.rotation.y = time * 0.08;
      accentStars.rotation.x = time * 0.03;
      
      // Gentle twinkling effect
      const positions = starsGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const index = i / 3;
        const offset = Math.sin(time * 2 + index * 0.1) * 0.01;
        positions[i + 2] += offset;
      }
      starsGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      accentGeometry.dispose();
      accentMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

// Helper function to create a circular texture for stars
function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.4)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
