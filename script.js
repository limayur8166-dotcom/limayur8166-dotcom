// Typing Effect
const text = ["DevOps Engineer 🚀", "AWS Specialist ☁️", "Automation Lover 🔥"];
let i = 0, j = 0;

function type() {
  if (j < text[i].length) {
    document.getElementById("typing").innerHTML += text[i].charAt(j);
    j++;
    setTimeout(type, 80);
  }
}
type();

// GSAP Animation
gsap.from(".hero h1", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero p", { opacity: 0, duration: 2 });

// Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();