import { Suspense } from 'react';
import { Sphere, OrbitControls } from '@react-three/drei';

import useDarkMode from '../../hooks/useDarkMode';
import useScrollPosition from '../../hooks/useScrollPosition';

interface Props {
  quality?: number;
  scale  ?: number;
}

const MySphere = ({ quality = 8, scale = 3 }: Props) => {

  const { isDarkTheme } = useDarkMode();

  const { x, y } = useScrollPosition();

  return (
    <>
      <ambientLight color={isDarkTheme ? '#72d4ee' : '#21ABA1'} />
      <pointLight intensity={20} position={[10, 10, 0]} color={isDarkTheme ? '#036686' : '#0F4D49'} />
      <Suspense fallback={null}>
        <Sphere
          visible
          args={[1, quality, quality]}
          rotation={[0, (y * 0.0025), 0]}
          scale={scale}
        >
          <meshPhysicalMaterial
            color={isDarkTheme ? '#147ba6' : '#A4D6D3'}
            wireframe
          />
          <OrbitControls
            enableRotate={true}
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
