const services = document.querySelectorAll('.service');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  services.forEach(service => {
    const top = service.getBoundingClientRect().top;

    if (top < trigger) {
      service.classList.add('show');
    }
  });
});

services.forEach(service => {
  service.addEventListener('click', () => {
    const msg = service.getAttribute('data-msg');
    const url = `https://wa.me/5511970725182?text=${encodeURIComponent("Olá, preciso de ajuda com: " + msg)}`;
    window.open(url, '_blank');
  });
});
