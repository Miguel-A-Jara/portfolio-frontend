import { useCallback, useId } from 'react';

import type { Engine } from 'tsparticles-engine';
import Particles    from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import useDarkMode from '../../hooks/useDarkMode';
import navbarParticlesOptions from './NavbarParticlesOptions'

const NavbarParticles = () => {

  const { isDarkTheme } = useDarkMode();
  const myId = useId();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options = navbarParticlesOptions(isDarkTheme);

  return (
    <Particles
      id={myId}
      className='opacity-40 absolute h-[calc(100%-1em)] w-full -z-10'
      init={particlesInit}
      options={{ fullScreen: { enable: false, zIndex: 10 }, ...options }}
    />
  )
}

export default NavbarParticles