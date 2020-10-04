import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarModel } from 'src/app/models/car-model';
import { FuelType } from 'src/app/models/fuel-type';
import { SearchService } from 'src/app/services/search.service';
import { Advert } from '../../models/advert';
import { AdvertsService } from '../../services/adverts.service';
import { CarModelService } from '../../services/car-model.service';
import { FuelTypeService } from '../../services/fuel-type.service';
import * as THREE from 'three';
import 'three/examples/js/controls/OrbitControls';
import { reduce } from 'rxjs/internal/operators';



@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css'],

})
export class VisitorComponent implements OnInit {

  adverts : Advert[];
  isLoading : boolean;
  searchTerm: string;
  searchFuel: string;
  searchExactly : string;
  listOfBrands: Brand[];
  listOfCarModels: CarModel[];
  listOfFuelTypes: FuelType[];
  listOfPrice = ['> 5000 <= 10000','> 10000 <= 15000', '> 15000 <= 20000', ' > 20000'];


  p: number = 1;


  initRenderer(){
  // init renderer function
  // initRenderer(){
  let container = document.getElementById('container');
  let renderer = new THREE.WebGLRenderer();

  // init scene function
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(96,window.innerWidth/window.innerHeight,100,10000);

  let starGeo = new THREE.Geometry();

  let starMaterial = new THREE.PointsMaterial({
    color: Math.random() * 0xffffff,
    size:0.4,
    opacity:1
  })

  let stars = new THREE.Points(starGeo,starMaterial); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    let addCamera = function(){
      scene.add(camera);
    }

    let addStars = function(){
      if (camera){
        console.log('une caméra existe');
        for (let i = 0; i < 5000; i++){
          let star = new THREE.Vector3(
            Math.random() * 600 - 200,
            Math.random() * 600 - 200,
            Math.random() * 600 - 200,  
          );

          starGeo.vertices.push(star)
        }
        scene.add(stars);
      }
    }

    let animate = function(){
      if(starGeo){
        console.log('stargeo existe');
        // starGeo.verticesNeedUpdate = true;
        stars.rotation.y += 0.0009;
        stars.rotation.x += 0.0009;
        requestAnimationFrame(animate);
        // stars.rotation.x += 0.01;
        // var OrbitControls = require('three-orbit-controls')(THREE)
  
        // let control = new OrbitControls(camera);
        // control.update()
        // stars.rotation.y += 0.01;
        // camera.position.z = 100;
        renderer.render(scene,camera);
      }
    }

    document.addEventListener('mousemove',onmousemove,true);
    function onmousemove(event){
      var mouseX = event.clientX - window.innerWidth/2;
      var mouseY = event.clientY - window.innerHeight/2;
      camera.position.x += (mouseX - camera.position.x) * 0.005;
      camera.position.y += (mouseY - camera.position.y) * 0.005;
      camera.position.z = 0.5;
      renderer.render(scene,camera);
    }
    

    addCamera();
    addStars();
    animate();
  }
  

  constructor(private fuelTypeService : FuelTypeService, private advertService : AdvertsService, private allbrand: SearchService, private allcarmodels : CarModelService) {  }

  
  onClick(){
    this.initRenderer();    
  }

  ngOnInit(): void {
    
    this.isLoading = true;

    this.fuelTypeService.getAll().subscribe(data=>{
      this.listOfFuelTypes = data['hydra:member'];
    })
    this.allbrand.getBrand().subscribe(data =>{
      this.listOfBrands = data['hydra:member'];
      this.allcarmodels.getAll().subscribe(data =>{
        this.listOfCarModels = data['hydra:member'];    
      this.advertService.getAll().subscribe(adverts => {
        this.adverts = adverts['hydra:member'];
        this.isLoading = false;
        });
      });
    });
    
  }
}
