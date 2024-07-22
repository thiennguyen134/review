import React from 'react';
import './Main.css';
import useFormValidation from '../../hooks/useFormValidation'; // Adjusted path

const Main: React.FC = () => {
    useFormValidation();

    return (
        <main>
            <section id="home">
                <div className="container">
                    <h2>Home</h2>
                    <p>Welcome to our investment application. Here, you can manage your investments efficiently.</p>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <h2>About</h2>
                    <p>Learn more about our services and how we can help you achieve your financial goals.</p>
                    <form id="contactForm">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required autoComplete="name" />
                        <span id="nameError" className="error-message"></span>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required autoComplete="current-password" />
                        <span id="passwordError" className="error-message"></span>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <p>If you have any questions, please feel free to contact us.</p>
                </div>
            </section>
        </main>
    );
};

export default Main;
