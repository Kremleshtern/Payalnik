import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as ASS from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'


@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    const render = new THREE.WebGLRenderer({ antialias: true });
    render.setPixelRatio(window.devicePixelRatio);
    render.setSize(1000, 1000);
    render.outputEncoding = THREE.sRGBEncoding;
    document.getElementById('3d-view')?.appendChild(render.domElement);


    const pmremGenerator = new THREE.PMREMGenerator(render);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    const controls = new OrbitControls(camera, render.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const loader = new ASS.GLTFLoader();

    loader.load('assets/jdm.gltf', function (gltf) {

      scene.add(gltf.scene);
      scene.scale.set(2, 2, 2)
      scene.rotateY(-10)

    }, undefined, function (error) {

      console.error(error);

    });

    camera.position.z = 3;
    camera.position.y = 1.5;
    camera.position.x = -1;
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      render.render(scene, camera);
    };

    animate();
  }


}
