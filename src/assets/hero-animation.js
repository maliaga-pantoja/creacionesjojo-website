// ============================================================
// hero-animation.js — Animación Three.js del fondo del Hero
// ============================================================
(function () {
    const container = document.getElementById('threejs-container-ANIMATION_9');
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Grupo de objetos
    const group = new THREE.Group();

    // Marco principal (wireframe)
    const frameGeom = new THREE.BoxGeometry(3, 3, 0.2);
    const wireMaterial = new THREE.MeshPhongMaterial({
        color: 0xbc13fe,
        wireframe: true,
        transparent: true,
        opacity: 0.5
    });
    const frame = new THREE.Mesh(frameGeom, wireMaterial);
    group.add(frame);

    // Estructura interior (TorusKnot)
    const innerGeom = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const innerMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        emissive: 0x333333,
        shininess: 100
    });
    const inner = new THREE.Mesh(innerGeom, innerMaterial);
    group.add(inner);

    // Pilares verticales
    const pillarGeom = new THREE.CylinderGeometry(0.05, 0.05, 4, 12);
    const pillarMat = new THREE.MeshPhongMaterial({ color: 0x666666 });
    for (let i = -1; i <= 1; i += 2) {
        for (let j = -1; j <= 1; j += 2) {
            const pillar = new THREE.Mesh(pillarGeom, pillarMat);
            pillar.position.set(i * 1.6, 0, j * 0.2);
            group.add(pillar);
        }
    }

    scene.add(group);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    function animate() {
        requestAnimationFrame(animate);
        group.rotation.y += 0.005;
        inner.rotation.x += 0.01;

        // Adaptar colores del modelo en tiempo real según el tema
        const isDark = document.documentElement.classList.contains('dark');
        inner.material.color.setHex(isDark ? 0xffffff : 0x1c1b1b);
        inner.material.emissive.setHex(isDark ? 0x333333 : 0xcccccc);

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });

    animate();
})();
