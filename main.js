import './style.css'
import * as THREE from 'three';


// let fov = 75;
// let aspect = window.innerWidth / window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({canvas: document.querySelector('#bg')});

renderer.setPixelRatio(window.pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(camera, scene);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xf37112, wireframe: true});
const torus = new THREE.Mesh(geometry, material);


scene.add(torus);


function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  torus.scale.x += 0.01;
  torus.scale.y += 0.005;
  torus.scale.z += 0.01;
  renderer.render(scene, camera);
}

animate();