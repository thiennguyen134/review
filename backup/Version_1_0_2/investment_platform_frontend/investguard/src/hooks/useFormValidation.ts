import { useEffect } from 'react';

const useFormValidation = () => {
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    if (!form) return;

    const nameError = document.getElementById('nameError') as HTMLElement;
    const passwordError = document.getElementById('passwordError') as HTMLElement;
    const emailError = document.getElementById('emailError') as HTMLElement;

    const handleFormSubmit = async (event: Event) => {
      event.preventDefault();

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;

      let formIsValid = true;

      if (nameError) {
        nameError.textContent = '';
        nameError.style.display = 'none';
      }
      if (passwordError) {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
      }
      if (emailError) {
        emailError.textContent = '';
        emailError.style.display = 'none';
      }

      if (name === '' && nameError) {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        formIsValid = false;
      }

      if (password === '' && passwordError) {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        formIsValid = false;
      }

      if (email === '' && emailError) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        formIsValid = false;
      } else if (emailError && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.display = 'block';
        formIsValid = false;
      }

      if (formIsValid) {
        try {
          const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: name, password: password, email: email }),
          });

          if (response.ok) {
            alert('Form submitted successfully');
            form.reset();
          } else {
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
    };

    form.addEventListener('submit', handleFormSubmit);

    return () => {
      form.removeEventListener('submit', handleFormSubmit);
    };
  }, []);
};

export default useFormValidation;
