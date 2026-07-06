const products = [
    {
      name: '2ManyTabs',
      description: 'Organise, save, and restore tabs across all your devices.',
      icon: 'src/Images/Logos/2ManyTabs.png',
      available: false,
      link: '#'
    },
    {
      name: 'CalTrack',
      description: 'Track smarter. Transform faster. CalTrack does the math for you.',
      icon: 'src/Images/Logos/CalTrack.png',
      available: false,
      link: '#'
    },
    {
      name: '2ManyBrowsers',
      description: 'A minimalist, high performance browser built for speed.',
      icon: 'src/Images/Logos/2ManyBrowsers.png',
      available: false,
      link: '#'
    }
  ];
  
  const productGrid = document.getElementById('productGrid');
  
  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.style.transitionDelay = `${index * 100}ms`;
  
    const buttonClass = product.available
      ? 'product-button available'
      : 'product-button coming-soon';
  
    const buttonText = product.available ? 'Download' : 'Coming Soon';
  
    card.innerHTML = `
      <div class="product-icon">
        <img src="${product.icon}" alt="${product.name} Icon">
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button class="${buttonClass}">${buttonText}</button>
    `;
  
    if (product.available) {
      const button = card.querySelector('button');
      button.addEventListener('click', () => {
        window.location.href = product.link;
      });
    }
  
    productGrid.appendChild(card);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );
  
  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
  });
  
  document.querySelectorAll(
    '.hero-content, .section-header, .about-card, .footer-content'
  ).forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
