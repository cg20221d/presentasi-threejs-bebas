const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const points = [];
for (let i = 0; i < 20; i++) {
  const randomX = -2 + Math.round(Math.random() * 4);
  const randomY = -2 + Math.round(Math.random() * 4);
  const randomZ = -2 + Math.round(Math.random() * 4);
  points.push(new THREE.Vector3(randomX, randomY, randomZ));
}

const geometry = new THREE.ConvexGeometry(points);
const material = new THREE.MeshPhongMaterial({ color: 0x00aaff });
const mesh = new THREE.Mesh(geometry, material);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 0, 10);

scene.add(light);
scene.add(mesh);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
