import { Suspense } from 'react';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

import useDarkMode from '../../hooks/useDarkMode';

interface Props {
  quality?: number;
  scale  ?: number;
}

const MySphere = ({ quality = 8, scale = 3 }: Props) => {

  const { isDarkTheme } = useDarkMode();

  return (
    <>
      <ambientLight color={isDarkTheme ? '#72d4ee' : '#036248'} />
      <pointLight intensity={20} position={[10, 10, 0]} color={isDarkTheme ? '#036686' : '#034333'} />
      <Suspense fallback={null}>
        <Sphere
          visible
          args={[1, quality, quality]}
          scale={scale}
        >
          <meshPhysicalMaterial
            color={isDarkTheme ? '#147ba6' : '#007c5b'}
            wireframe
          />
          <OrbitControls
            enableRotate={false}
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
