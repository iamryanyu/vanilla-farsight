const farsight = (() => {
  const selectors = {
    anchor: 'a[href^="#"]',
    depth: '.scene__depth',
    layers: '.layer',
    menu: '.menu',
    scene: '.scene',
  };

  const classes = {
    activeMenu: 'menu__item--active',
  };

  const distance = 500;

  /**
   * DO NOT EDIT BELOW. THE SKY WILL FALL.
   */
  const layers = [...document.querySelectorAll(selectors.layers)];

  const current = {
    layer: 0,
    progress: 0,
    menu: ''
  };

  let windowDepth = '';

  const setActive = () => {
    // update menu
    let position = current.layer + Math.round(current.progress);

    if (position !== current.menu) {
      const menuContainer = document.querySelector(selectors.menu);
      let menuActive = menuContainer.querySelector(`.${classes.activeMenu}`);
      let layer = document.querySelector(`.layer[data-depth="${position * distance}"]`);

      if (typeof menuActive !== 'undefined' && menuActive !== null) {
        menuActive.classList.remove(classes.activeMenu);
      }

      menuContainer.querySelector(`a[href="#${layer.getAttribute('id')}"]`).classList.add(classes.activeMenu);

      current.menu = position;
    }
  };

  const zoomScene = () => {
    let scroll = this.scrollY;

    // get scroll, cap within bounds
    scroll = scroll >= 0 ? (scroll <= windowDepth ? scroll : windowDepth) : 0;

    // set currents
    current.layer = (scroll / distance) | 0;
    current.progress = (scroll - (current.layer * distance)) / distance;
    current.overallProgress = (scroll / (distance * layers));

    const scene = document.querySelector(selectors.scene);

    // adjust scene
    setZPosition(scene, scroll);

    // update menu and layer
    setActive();
  };

  const setZPosition = (element, z) => {
    element.style.transform = `translate3d(0, 0, ${z}px)`;
  };

  const setDepth = () => {
    const depth = document.querySelector(selectors.depth);

    windowDepth = (distance * (layers.length - 1)) + document.body.clientHeight;
    depth.style.height = `${windowDepth}px`;
  };

  const scrollToLayer = (target) => {
    console.log(target);
    TweenLite.to(window, 1, {
      scrollTo: target,
    });
  };

  return {
    render: function() {
      // set environment depth
      setDepth();

      // set layer z position
      layers.map(layer => {
        const layerDepth = layer.getAttribute('data-depth');

        setZPosition(layer, layerDepth * -1);
      });

      // set initial position
      zoomScene();

      // zooming
      var throttledZoom = _.throttle(zoomScene, 25);

      window.addEventListener('scroll', throttledZoom);

      // resize
      window.addEventListener('resize', setDepth);

      // anchors
      const anchors = [...document.querySelectorAll(selectors.anchor)];

      anchors.map(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetAnchor = this.getAttribute('href');
          const target = document.querySelector(targetAnchor).getAttribute('data-depth');

          scrollToLayer(target);
        });
      });
    }
  }
})();

farsight.render();
