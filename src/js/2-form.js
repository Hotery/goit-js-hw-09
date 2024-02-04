const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('input', (event) => {
  if (event.target === emailInput || event.target === messageInput) {
    const feedbackFormState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
  }
});

window.addEventListener('load', () => {
  const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email;
    messageInput.value = feedbackFormState.message;
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const feedbackFormState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (!feedbackFormState.email || !feedbackFormState.message) {
    errorMessage.textContent = 'Будь ласка, заповніть обидва поля перед надсиланням форми.';
    return;
  }

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  errorMessage.textContent = '';
  console.log(feedbackFormState);
});
