import { Suspense, useState } from 'react';
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

import useDarkMode from '../../hooks/useDarkMode';

const PrismaDynamic = () => {

  const { isDarkTheme } = useDarkMode();
  const [value, setValue] = useState(Math.random() * 4);

  return (
    <>
      <ambientLight color={isDarkTheme ? '#72d4ee' : '#036248'} />
      <pointLight intensity={20} position={[10, 10, 0]} color={isDarkTheme ? '#036686' : '#034333'} />
      <Suspense fallback={null}>
        <Sphere
          visible
          args={[0.5, value, value]}
          scale={4}
        >
          <MeshDistortMaterial 
            color={isDarkTheme ? '#147ba6' : '#007c5b'}
            wireframe
            speed={1}
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
