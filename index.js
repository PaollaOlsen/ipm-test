
const button = document.getElementById('menu');

button.addEventListener('click', () => {
    document.querySelector('nav').classList.add('open');
  }
);

const close = document.getElementById('close');

close.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('open');
  }
);