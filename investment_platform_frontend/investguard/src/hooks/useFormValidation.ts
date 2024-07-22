import { useEffect } from 'react';

const useFormValidation = () => {
    useEffect(() => {
        const form = document.getElementById('contactForm') as HTMLFormElement;
        const nameError = document.getElementById('nameError') as HTMLElement;
        const passwordError = document.getElementById('passwordError') as HTMLElement;

        form.addEventListener('submit', (event) => {
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
                alert('Form submitted successfully');
                form.submit();
            }
        });
    }, []);
};

export default useFormValidation;
