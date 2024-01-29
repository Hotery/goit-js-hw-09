const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', (event) => {
  if (event.target === emailInput || event.target === messageInput) {
    const feedbackFormState = {
      email: emailInput.value,
      message: messageInput.value,
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
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(feedbackFormState);
});
