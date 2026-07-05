import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <div className="privacy-content">
                <p>Last updated: January 21, 2026</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to our application. We respect your privacy and are committed to protecting your personal data.</p>
                </section>

                <section>
                    <h2>2. Data We Collect</h2>
                    <p>We may collect personal identification information (Name, email address, phone number, etc.) when you visit our site or register.</p>
                </section>

                <section>
                    <h2>3. How We Use Your Data</h2>
                    <p>We collect your data to improve our services, manage your account, and contact you if necessary.</p>
                </section>

                <section>
                    <h2>4. Your Rights</h2>
                    <p>You have the right to access, rectify, or erase your personal data at any time.</p>
                </section>

                <section>
                    <h2>5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
