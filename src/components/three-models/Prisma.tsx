import { Suspense } from 'react';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

import useDarkMode from '../../hooks/useDarkMode';

const MyPrisma = () => {

  const { isDarkTheme } = useDarkMode();

  return (
    <>
      <ambientLight color={isDarkTheme ? '#72d4ee' : '#036248'} />
      <pointLight intensity={20} position={[10, 10, 0]} color={isDarkTheme ? '#036686' : '#034333'} />
      <Suspense fallback={null}>
        <Sphere
          visible
          args={[0.5, 0, 0]}
          scale={4}
        >
          <MeshDistortMaterial 
            color={isDarkTheme ? '#147ba6' : '#007c5b'}
            wireframe
            speed={1}
          />
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={-5}
            enableZoom={false} 
          />
        </Sphere>
      </Suspense>
    </>
  )
}

export default MyPrisma;
