const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;

function update(direction) {
  // Remove a classe ativa atual
  items[active].classList.remove('active');
  dots[active].classList.remove('active');

  // Atualiza o índice com base na direção
  if (direction > 0) {
    active++;
    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active--;
    if (active < 0) {
      active = total - 1;
    }
  }

  // Adiciona a nova classe ativa
  items[active].classList.add('active');
  dots[active].classList.add('active');

  // Atualiza o número do indicador
  numberIndicator.textContent = (active + 1).toString().padStart(2, '0');
}

// Eventos dos botões
prevButton.addEventListener('click', () => {
  update(-1);
});

nextButton.addEventListener('click', () => {
  update(1);
});

setInterval(() => {
   update(1);
 }, 5000);
 