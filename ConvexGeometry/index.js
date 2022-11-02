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
for (var i = 0; i < 10; i++) {
  const randomX = -2.5 + Math.round(Math.random() * 5);
  const randomY = -2.5 + Math.round(Math.random() * 5);
  const randomZ = -2.5 + Math.round(Math.random() * 5);
  points.push(new THREE.Vector3(randomX, randomY, randomZ));
}
console.log(points);
const geometry = new THREE.ConvexGeometry(points);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
