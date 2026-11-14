(() => {
  'use strict';
  const config = window.AURUM_CONFIG || {};
  const number = String(config.whatsappNumber || '');
  const enabled = /^[1-9]\d{9,14}$/.test(number);
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu');
  menuButton.hidden = false;
  const closeMenu = () => menuButton.setAttribute('aria-expanded', 'false');
  menuButton.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', String(menuButton.getAttribute('aria-expanded') !== 'true'));
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu(); menuButton.focus();
    }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  const booking = window.AurumBooking;
  const form = document.querySelector('#booking-form');
  const summary = document.querySelector('#booking-summary');
  const feedback = document.querySelector('#booking-feedback');
  const submit = form.querySelector('[type="submit"]');
  const money = price => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const selectedService = () => booking.services.find(service => service.id === new FormData(form).get('service'));
  const updateSelection = () => {
    const service = selectedService();
    summary.textContent = service
      ? `${service.name} — ${money(service.price)} — ${service.duration} min (demonstrativo).`
      : 'Selecione um serviço para continuar.';
    feedback.textContent = '';
  };
  submit.disabled = false;
  form.addEventListener('change', updateSelection);
  document.querySelectorAll('[data-booking]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const requested = link.dataset.service;
      if (requested) {
        const input = form.querySelector(`input[value="${requested}"]`);
        if (input) input.checked = true;
      }
      updateSelection();
      document.querySelector('#agendar').scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start'
      });
      const input = form.querySelector('input:checked') || form.querySelector('input');
      input.focus({ preventScroll: true });
    });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const service = selectedService();
    if (!service) return;
    const url = booking.link(number, config.whatsappMessage, service.id);
    if (!url) {
      feedback.textContent = `Você escolheu ${service.name}. Este site é demonstrativo e o agendamento ainda não está disponível.`;
      return;
    }
    window.location.assign(url);
  });
  if (enabled) document.querySelector('#contato-demo').textContent = 'Você vai consultar a disponibilidade pelo WhatsApp. O horário depende da confirmação do atendimento.';
  const lightbox = document.querySelector('#lightbox');
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      if (typeof lightbox.showModal !== 'function') { window.location.href = button.dataset.image; return; }
      const image = document.querySelector('#lightbox-image');
      image.src = button.dataset.image; image.alt = button.querySelector('img').alt;
      document.querySelector('#lightbox-caption').textContent = button.dataset.caption;
      lightbox.showModal();
    });
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelectorAll('.dialog-close, .dismiss').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', event => { if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }});
  });
  // A small photographic offset, limited to the hero and skipped under reduced motion.
  const hero = document.querySelector('.hero');
  const photo = hero.querySelector('.hero-art img');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let heroVisible = true;
  let frame = 0;
  const updatePhoto = () => {
    frame = 0;
    if (motionPreference.matches) { photo.style.removeProperty('--parallax-y'); return; }
    if (!heroVisible) return;
    const top = hero.getBoundingClientRect().top;
    const offset = Math.max(-42, Math.min(42, -top * 0.09));
    photo.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
  };
  const schedulePhoto = () => {
    if (!frame && heroVisible && !motionPreference.matches) frame = requestAnimationFrame(updatePhoto);
  };
  window.addEventListener('scroll', schedulePhoto, { passive: true });
  window.addEventListener('resize', schedulePhoto, { passive: true });
  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches) {
      cancelAnimationFrame(frame); frame = 0; photo.style.removeProperty('--parallax-y');
    } else schedulePhoto();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      if (heroVisible) schedulePhoto();
    }).observe(hero);
    // Avoid a second WhatsApp action over the hero or closing section.
    const floating = document.querySelector('.floating-contact');
    const visibleActions = new Set();
    const actionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting
        ? visibleActions.add(entry.target) : visibleActions.delete(entry.target));
      floating.classList.toggle('is-hidden', visibleActions.size > 0);
    }, { threshold: 0.5 });
    document.querySelectorAll('.hero-actions .button, .booking-submit').forEach(button => actionObserver.observe(button));
  }
  schedulePhoto();
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
