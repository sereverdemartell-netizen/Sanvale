let messageIndex = 0;

const messages = [
  "¿Estás segura?",
  "¿En serio?",
  "¿No me quieres?",
  "Por favooor ",
  "¡Te compro helado!",
  "porfaaaaaaaaaaa",
  "Una oportunidad más...",
  "Vale... seguiré esperando",
  "Está bien, pero sigo dolido.",
  "¡Dile SÍ YA, mi cielo! 💖"
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  const newSize = currentSize * 1.5;
  yesButton.style.fontSize = `${newSize}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}