import * as THREE from "three"

export function createParticleSystem(container: HTMLElement, theme = "dark") {
  // Scene setup
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
  camera.position.z = 30

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // Particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 2000

  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

  // Theme-based colors: yellow for dark theme, emerald for light theme
  const particleColor = theme === "dark" ? 0xfbbf24 : 0x10b981
  const particleOpacity = theme === "dark" ? 0.8 : 0.4

  const particlesMaterial = new THREE.PointsMaterial({
    size: theme === "dark" ? 0.1 : 0.08,
    color: particleColor,
    transparent: true,
    opacity: particleOpacity,
    blending: THREE.AdditiveBlending,
  })

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Animation
  const animate = () => {
    requestAnimationFrame(animate)
    particlesMesh.rotation.x += 0.0005
    particlesMesh.rotation.y += 0.0005
    renderer.render(scene, camera)
  }

  // Handle resize
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }

  window.addEventListener("resize", handleResize)

  // Start animation
  animate()

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", handleResize)
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement)
    }
    particlesGeometry.dispose()
    particlesMaterial.dispose()
    renderer.dispose()
  }
}
