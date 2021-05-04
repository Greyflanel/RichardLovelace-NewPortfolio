import "/css/main.css";
import image from "../static/html-logo.png"
import gsap from "gsap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";

// Loading



const loader = new GLTFLoader();

const textureLoader = new THREE.TextureLoader();

const star = textureLoader.load("./star.png");

// const normalTexture = textureLoader.load("");

// Debug
//  const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.SphereGeometry(0.001, 64, 64);

const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 15000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  // posArray[i] = Math.random()
  // posArray[i] = Math.random() - 0.5
  posArray[i] = (Math.random() - 0.5) * 6;
}
// // Materials

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

const material = new THREE.PointsMaterial({
  size: 0.0,
});

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.04,
  map: star,
  transparent: true,
  color: "#ffffff",
  blending: THREE.AdditiveBlending,
});

// // Mesh

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// 3D Models


let moon;
loader.load(
  "/models/moon.glb",
  function (gltf) {
    moon = gltf.scene;
    moon.rotation.y = -0.3;
    moon.rotation.x = -0.18;
   
    moon.position.y = -0.12;
    moon.position.x = -0.12;
    
    
    gltf.scene.scale.set(1.15, 1.15, 1.15);
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Light 1

// const pointLight1 = new THREE.PointLight(0x190039, 0.5);
// pointLight1.position.x = 2;
// pointLight1.position.y = -1;
// pointLight1.position.z = -1;
// scene.add(pointLight1);

// // Light 2

const pointLight2 = new THREE.PointLight(0x000000, 1);

pointLight2.position.set(-3, -6, 3.16);
pointLight2.intensity = 0.9;

scene.add(pointLight2);

// const light2 = gui.addFolder("Light 2");

// light2.add(pointLight2.position, "x").min(-3).max(3).step(0.01);
// light2.add(pointLight2.position, "y").min(-6).max(6).step(0.01);
// light2.add(pointLight2.position, "z").min(-6).max(6).step(0.01);
// light2.add(pointLight2, "intensity").min(0).max(10).step(0.01);

// Light 3
const pointLight3 = new THREE.PointLight(0x8a2be2, 0.8);

pointLight3.position.set(-8, 3, 8);
pointLight3.intensity = 2.8;

scene.add(pointLight3);

// const light3 = gui.addFolder("Light 3");

// light3.add(pointLight3.position, "x").min(-8).max(8).step(0.01);
// light3.add(pointLight3.position, "y").min(-8).max(8).step(0.01);
// light3.add(pointLight3.position, "z").min(-3).max(3).step(0.01);
// light3.add(pointLight3, "intensity").min(0).max(10).step(0.01);

// const pointLight4 = new THREE.DirectionalLight(0x350061, 0.5);

// pointLight4.position.set(10, 10, -10.5);
// pointLight4.intensity = 1;

// scene.add(pointLight4);

// const light4 = gui.addFolder("Light 4");

// light4.add(pointLight4.position, "x").min(-3).max(3).step(0.01);
// light4.add(pointLight4.position, "y").min(-6).max(6).step(0.01);
// light4.add(pointLight4.position, "z").min(-6).max(6).step(0.01);
// light4.add(pointLight4, "intensity").min(0).max(10).step(0.01);

// const light2Color = {
//   color: 0x400061,
// };

// light2.addColor(light2Color, "color").onChange(() => {
//   pointLight2.color.set(light1Color.color);
// });

// const light3Color = {
//   color: 0xfffff,
// };

// light3.addColor(light3Color, "color").onChange(() => {
//   pointLight3.color.set(light3Color.color);
// });

// const light4Color = {
//   color: 0xfffff,
// };

// light4.addColor(light4Color, "color").onChange(() => {
//   pointLight4.color.set(light4Color.color);
// });

// const pointLightHelper = new THREE.PointLightHelper(pointLight2, 1);

// scene.add(pointLightHelper);

// const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 1);

// scene.add(pointLightHelper2);

// const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1);

// scene.add(pointLightHelper4);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = -0.15;
camera.position.z = 1;
scene.add(camera);

//Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.update;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Mouse

document.addEventListener("mousemove", animatedParticles);

let mouseX = 1;
let mouseY = -1;

function animatedParticles(event) {
  mouseY = event.clientY;
  mouseX = event.clientX;
}

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // sphere.rotation.y = 0.5 * elapsedTime;
  // sphere.rotation.x = 0.5 * elapsedTime;
  // sphere.rotation.z = 0.5 * elapsedTime;

  
  particlesMesh.rotation.x = mouseX * (elapsedTime * -0.00002);
  particlesMesh.rotation.y = mouseY * (elapsedTime * -0.00003);

  // Update Orbital Controls
  // controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();


