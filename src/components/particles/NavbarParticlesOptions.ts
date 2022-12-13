const navbarParticlesOptions = (isDarkTheme: boolean) => {
  const options = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: false,
          area: 400
        }
      },
      color: {
        value: isDarkTheme ? ['#036686', '#159ac5'] : ['#2DD7CB', '#21ABA1']
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: isDarkTheme ? 0.5 : 1,
        anim: {
          enable: true,
          speed: 5
        }
      },
      size: {
        value: { min: 1, max: 3 }
      },
      links: {
        enable: true,
        distance: 60,
        color: isDarkTheme ? '#31b7df' : '#F6FDFD',
        opacity: 1,
        width: 0.5
      },
      move: {
        enable: true,
        speed: 1,
        random: false,
        straight: false
      }
    },
    interactivity: {}
  };
  
  return options;
}
export default navbarParticlesOptions;