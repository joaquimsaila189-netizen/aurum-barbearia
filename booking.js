// Lógica independente do DOM para permitir testar os links antes de publicar.
(() => {
  'use strict';
  const services = Object.freeze([
    Object.freeze({ id: 'corte', name: 'Corte masculino', price: 65, duration: 45 }),
    Object.freeze({ id: 'barba', name: 'Barba completa', price: 45, duration: 30 }),
    Object.freeze({ id: 'combo', name: 'Corte + barba', price: 95, duration: 75 })
  ]);
  const validNumber = number => /^[1-9]\d{9,14}$/.test(String(number || ''));
  const link = (number, greeting, serviceId) => {
    const service = services.find(item => item.id === serviceId);
    if (!validNumber(number) || !service) return null;
    const message = `${greeting || 'Olá! Gostaria de consultar um horário.'}\nServiço: ${service.name} (R$ ${service.price},00; ${service.duration} min). Gostaria de consultar a disponibilidade.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };
  window.AurumBooking = Object.freeze({ services, validNumber, link });
})();
