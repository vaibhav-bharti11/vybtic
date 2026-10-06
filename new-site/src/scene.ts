import * as THREE from 'three';

export function createSignalScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#171a1e', 7, 20);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0.8, 1.3, 7.4);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor('#171a1e', 1);

  scene.add(new THREE.AmbientLight('#fff4e9', 1.7));
  const key = new THREE.DirectionalLight('#f08b5d', 4); key.position.set(-3, 5, 4); scene.add(key);
  const rim = new THREE.PointLight('#597cff', 18, 10); rim.position.set(3, 1, 3); scene.add(rim);
  const group = new THREE.Group(); scene.add(group);
  const nodes: THREE.Mesh[] = [];

  // A restrained orbital object gives the hero a cinematic focal point before the signal paths animate.
  const planet = new THREE.Mesh(new THREE.SphereGeometry(1.08, 48, 32), new THREE.MeshPhysicalMaterial({ color: '#263d52', roughness: .48, metalness: .12, clearcoat: .35, emissive: '#12212e', emissiveIntensity: .75 }));
  planet.position.set(.65, .05, -1.15); group.add(planet);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(1.27, 32, 24), new THREE.MeshBasicMaterial({ color: '#e36d42', transparent: true, opacity: .09, side: THREE.BackSide }));
  halo.position.copy(planet.position); group.add(halo);
  const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.55, .012, 8, 96), new THREE.MeshBasicMaterial({ color: '#d64b2a', transparent: true, opacity: .72 }));
  orbit.position.copy(planet.position); orbit.rotation.set(.75, -.28, .2); group.add(orbit);
  const starPositions = new Float32Array(420 * 3);
  for (let i = 0; i < starPositions.length; i += 3) { starPositions[i] = (Math.random() - .5) * 12; starPositions[i + 1] = (Math.random() - .5) * 7; starPositions[i + 2] = (Math.random() - .5) * 8 - 2; }
  const starGeometry = new THREE.BufferGeometry(); starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: '#d5e2ee', size: .018, transparent: true, opacity: .55 })); group.add(stars);

  const nodeMaterial = new THREE.MeshStandardMaterial({ color: '#f4f1ea', metalness: .82, roughness: .26 });
  [[-1.45, 1.05, -.15], [-1.2, -.35, .25], [1.3, .78, -.15], [1.65, -.6, -.2], [.25, .05, -.7]].forEach(([x, y, z], i) => {
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(i === 4 ? .34 : .24, 1), nodeMaterial.clone());
    mesh.position.set(x, y, z); mesh.userData.baseY = y; group.add(mesh); nodes.push(mesh);
  });

  const lineMaterial = (color: string) => new THREE.LineBasicMaterial({ color, transparent: true, opacity: .9 });
  const paths = [
    { points: [[-3.8, 1.2, -1.4], [-2, 1.05, -.65], [-1.45, 1.05, -.15], [.25, .05, -.7], [2.5, .6, -1.8]], color: '#d64b2a' },
    { points: [[-3.8, -.2, -1.2], [-2.2, -.35, -.4], [-1.2, -.35, .25], [.25, .05, -.7], [2.8, -.65, -1.8]], color: '#7994ff' },
    { points: [[-3.8, -1.25, -1.2], [-2.1, -1.05, -.25], [.25, .05, -.7], [1.65, -.6, -.2], [3.1, -1.1, -1.9]], color: '#e09d71' }
  ];
  paths.forEach(({ points, color }) => {
    const curve = new THREE.CatmullRomCurve3(points.map(([x,y,z]) => new THREE.Vector3(x,y,z)));
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)), lineMaterial(color)));
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(18, 12), new THREE.MeshStandardMaterial({ color: '#1e2329', metalness: .2, roughness: .8 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -1.65; floor.position.z = -1; group.add(floor);

  let progress = 0, pointerX = 0, pointerY = 0, raf = 0, visible = true;
  const resize = () => { const { width, height } = canvas.getBoundingClientRect(); camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix(); renderer.setSize(width, height, false); };
  const tick = () => { if (!visible) return; raf = requestAnimationFrame(tick); group.rotation.y += ((pointerX * .12 + progress * .38) - group.rotation.y) * .035; group.rotation.x += ((pointerY * -.06 - .04) - group.rotation.x) * .035; planet.rotation.y += .0018; orbit.rotation.z += .0012; stars.rotation.y -= .00008; nodes.forEach((n, i) => { n.position.y = n.userData.baseY + Math.sin(performance.now() * .0012 + i) * .035; }); renderer.render(scene, camera); };
  resize(); tick();
  return {
    setProgress: (value: number) => { progress = Math.max(0, Math.min(1, value)); },
    setPointer: (x: number, y: number) => { pointerX = x; pointerY = y; },
    setVisible: (value: boolean) => { visible = value; if (visible && !raf) tick(); if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; } },
    resize,
    dispose: () => { cancelAnimationFrame(raf); renderer.dispose(); scene.traverse((o) => { if (o instanceof THREE.Mesh || o instanceof THREE.Line) { o.geometry.dispose(); if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose()); else o.material.dispose(); } }); }
  };
}
