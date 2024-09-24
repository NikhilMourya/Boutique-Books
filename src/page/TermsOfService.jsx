import React from "react";

const TermsOfService = () => {
  return (
    <div className=" text-gray-800 py-12 pt-32 px-6 lg:px-16 text-left">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-justify">
            Welcome to www.boutiquebooks.us, operated by Boutique Books, LLC ("we," "us," or "our"). These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
          <p className="text-justify">
            Boutique Books offers bookkeeping and tax services on a subscription basis. By engaging our services, you agree to pay the subscription fee in accordance with our pricing structure, which is based on the scope of services outlined in your contract.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. User Obligations</h2>
          <p className="text-justify">
            Accurate Information: You agree to provide accurate and complete information during sign-up or appointment booking.<br />
            Compliance: You agree to comply with all applicable laws and not use our website or services for any unlawful activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Subscription Payment Policies</h2>
          <p className="text-justify">
            We offer no refunds for subscription payments. You may cancel your subscription at any time, and the service will terminate at the end of the current billing period. Once terminated, you will retain access to your secure data portal up until the cancellation date. It is your responsibility to download any necessary data before termination, as access to your portal will be disabled after that date. Should you require access to your data after termination, a fee equivalent to one month of your prior subscription will apply to regain access for a limited time.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="text-justify">
            While we strive to provide accurate and up-to-date information, we do not guarantee that our services or website will be error-free or uninterrupted. Boutique Books is not liable for any damages arising from your use of our services or the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
          <p className="text-justify">
            We may use third-party services, including Ignition and Intuit, for payment processing. Your interactions with these third-party services are governed by their respective terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. User Conduct</h2>
          <div className="text-justify">
            You agree to use our website in a manner consistent with applicable laws and these Terms of Service. Prohibited activities include, but are not limited to:
            <ul className="list-disc ml-6">
              <li>Spam: Sending unsolicited commercial communications through our website.</li>
              <li>Misuse: Uploading, distributing, or transmitting any content that contains viruses or other harmful software.</li>
              <li>Security Breaches: Attempting to bypass or breach the security measures of our website, accessing accounts not owned by you, or interfering with the proper functioning of the website.</li>
            </ul>
            Violation of these terms may result in the termination of your access to the website and our services without notice.
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">8. Termination of Services</h2>
          <p className="text-justify">
            We reserve the right to terminate or suspend your access to our website or services at any time for violations of these terms or other applicable policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">9. Governing Law and Dispute Resolution</h2>
          <p className="text-justify">
            These Terms of Service are governed by the laws of the state of California. Any disputes related to our services or these terms will be resolved through binding arbitration in accordance with California law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">10. Intellectual Property</h2>
          <p className="text-justify">
            All content on this website, including text, graphics, and logos, is the property of Boutique Books, LLC, and is protected by copyright and other intellectual property laws. You may not copy, distribute, or otherwise use our content without our written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">11. Changes to These Terms</h2>
          <p className="text-justify">
            We may update these Terms of Service from time to time. Any changes will be posted on our website, and continued use of the site constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
          <p className="text-justify">
            For any questions about these Terms of Service, please contact us at <a className="text-blue-300" href="mailto:hello@boutiquebooks.us">hello@boutiquebooks.us</a> .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
