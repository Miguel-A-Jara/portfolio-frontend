import { Suspense } from 'react';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

import useDarkMode from '../../hooks/useDarkMode';

const MySphere = () => {

  const { isDarkTheme } = useDarkMode();

  return (
    <>
      <ambientLight color={isDarkTheme ? '#72d4ee' : '#036248'} />
      <pointLight intensity={20} position={[10, 10, 0]} color={isDarkTheme ? '#036686' : '#034333'} />
      <Suspense fallback={null}>
        <Sphere
          visible
          args={[1, 8, 8]}
          scale={3}
        >
          <meshPhysicalMaterial
            color={isDarkTheme ? '#147ba6' : '#007c5b'}
            wireframe
          />
          <OrbitControls 
            autoRotate={true} 
            autoRotateSpeed={2} 
            enableZoom={false} 
          />
        </Sphere>
      </Suspense>
    </>
  )
}

export default MySphere;
