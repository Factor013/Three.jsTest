import * as THREE from 'three';

async function init() {
//cria a camera com alguns parametros       
  const scene = new THREE.Scene();      //Visao Vertical,tamanho da camera, distancia minima de renderização, distancia maxima de renderização
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//cria o renderizador
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight ); //seta o renderizador com tamanho da tela
  document.body.appendChild( renderer.domElement );

//cria o Objeto de fundo com uma textura
  const texture = new THREE.TextureLoader().load( './src/models/textures/fundo.jpg' );
  const material = new THREE.MeshBasicMaterial( { map: texture } );
  const geometry = new THREE.PlaneGeometry( 50,50);
  const background = new THREE.Mesh( geometry, material );
  background.position.z = -15;
  scene.add( background );
  

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

}

init();
