const navbarParticlesOptions = (isDarkTheme: boolean) => {
  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: false,
          area: 400
        }
      },
      color: {
        value: isDarkTheme ? ['#036686', '#159ac5'] : ['#034333', '#036248']
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
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
        color: isDarkTheme ? '#31b7df' : '#034333',
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
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        grab: {
          distance: 50,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 5,
        }
      }
    }
  };
  
  return options;
}
export default navbarParticlesOptions;