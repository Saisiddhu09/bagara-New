import React from 'react';
import "./privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container pt-6 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Thank you for visiting our website
        Your privacy is important to us, and we are committed to protecting and safeguarding the personal information you provide.
        By using our website, you consent to the practices described in this policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p><strong>Personal Information:</strong> We do not collect personal information such as your name, email, postal address, or other contact details.</p>
      <p><strong>Usage Information:</strong> We may collect data on your interactions with our website, including pages visited, links clicked, and duration of visits to improve functionality.</p>
      <p><strong>Cookies and Tracking:</strong> We use cookies and tracking technologies to enhance your experience. You can adjust your browser settings to manage or disable cookies.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Providing and improving our services</li>
        <li>Personalizing your experience on our website</li>
        <li>Communicating updates and promotions</li>
        <li>Analyzing website performance</li>
        <li>Protecting our rights, property, and safety</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information Sharing and Disclosure</h2>
      <p>We do not collect, sell, trade, or rent personal information. However, we may share general usage data in the following cases:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Service Providers:</strong> We may redirect you to trusted service providers for required services.</li>
        <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or asset sale, your information may be transferred.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Choices</h2>
      <p><strong>Opt-Out:</strong> You can opt out of promotional emails, but you may still receive important transactional messages.</p>
      <p><strong>Access and Correction:</strong> You can access, correct, or update your information by logging into your account or contacting us.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p>We implement security measures to protect your data, but no internet transmission is 100% secure.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to this Privacy Policy</h2>
      <p>We may update this policy periodically. Updates will be posted here and effective immediately upon posting.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions, reach us at +91 9700888257.</p>
    </div>
  );
};

export default Privacy;
