import { useEffect } from 'react';

const useFormValidation = () => {
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const nameError = document.getElementById('nameError') as HTMLElement;
    const passwordError = document.getElementById('passwordError') as HTMLElement;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;

      let formIsValid = true;

      nameError.textContent = '';
      passwordError.textContent = '';
      nameError.style.display = 'none';
      passwordError.style.display = 'none';

      if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        formIsValid = false;
      }

      if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        formIsValid = false;
      }

      if (formIsValid) {
        try {
          const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: name, password: password }),
          });

          if (response.ok) {
            alert('Form submitted successfully');
            form.reset();
          } else {
            // Check if the response is HTML
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('text/html')) {
              const errorText = await response.text();
              console.error('HTML error response:', errorText);
              alert('An error occurred. Please try again later.');
            } else {
              const errorData = await response.json();
              alert(`Error: ${errorData.message}`);
            }
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error('Error submitting form:', error);
            alert(`Error: ${error.message}`);
          } else {
            console.error('Error submitting form:', error);
            alert('An unknown error occurred.');
          }
        }
      }
    });
  }, []);
};

export default useFormValidation;
