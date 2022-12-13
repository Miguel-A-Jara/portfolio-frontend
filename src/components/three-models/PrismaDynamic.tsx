import { Suspense, useMemo } from 'react';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

import useDarkMode from '../../hooks/useDarkMode';
import useScrollPosition from '../../hooks/useScrollPosition';

const PrismaDynamic = () => {

  const { y } = useScrollPosition();
  const { isDarkTheme } = useDarkMode();

  const randomNumber = useMemo(() => Math.random() * 5, []);

  return (
    <>
      <ambientLight color={isDarkTheme ? '#72d4ee' : '#036248'} />
      <pointLight intensity={20} position={[10, 10, 0]} color={isDarkTheme ? '#036686' : '#034333'} />
      <Suspense fallback={null}>
        <Sphere
          visible
          args={[0.5, randomNumber, randomNumber]}
          rotation={[0, 0, (y * 0.0025)]}
          scale={3}
        >
          <MeshDistortMaterial 
            color={isDarkTheme ? '#147ba6' : '#007c5b'}
            wireframe
            speed={3}
          />
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={Math.random() > 0.5 ? -5 : 5} /* Randomly setting the direction */
            enableZoom={false} 
          />
        </Sphere>
      </Suspense>
    </>
  )
}

export default PrismaDynamic;
