import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>
          At <strong>DevGallery</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we handle data on our website. Please read it carefully
          to understand our practices.
        </p>

        <h2>What Information Do We Collect?</h2>
        <p>
          Currently, <strong>DevGallery</strong> does not collect any personal
          information from users. This means:
        </p>
        <ul>
          <li>We do not require you to sign up or log in.</li>
          <li>We do not collect cookies or track your browsing behavior.</li>
          <li>We do not store any data about you or your device.</li>
        </ul>

        <h2>Google Analytics</h2>
        <p>
          We use <strong>Google Analytics</strong> to understand how visitors
          interact with our website. Google Analytics collects anonymous data,
          such as:
        </p>
        <ul>
          <li>The pages you visit on DevGallery.</li>
          <li>How long you spend on each page.</li>
          <li>The device and browser you're using.</li>
        </ul>
        <p>
          This data helps us improve the website and provide a better experience
          for our users. However, Google Analytics does not collect personally
          identifiable information (PII) such as your name, email address, or IP
          address.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites, such as{" "}
          <Link href="https://www.mergesociety.com">MergeSociety</Link>. These
          sites have their own privacy policies, and we are not responsible for
          their content or practices. We encourage you to review their policies
          before providing any personal information.
        </p>

        <h2>Future Changes</h2>
        <p>
          In the future, we may introduce features that require collecting user
          data (e.g., sign-ups, comments, or cookies). If this happens, we will
          update this Privacy Policy to reflect those changes and notify our
          users.
        </p>

        <h2>Your Consent</h2>
        <p>
          By using <strong>DevGallery</strong>, you consent to this Privacy
          Policy. If you have any questions or concerns, feel free to reach out
          to us at{" "}
          <a href="mailto:managersebowa4525@gmail.com">
            managersebowa4525@gmail.com
          </a>
          .
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the "Last Updated" date at the bottom will
          reflect the most recent revision.
        </p>

        <p className="last-updated">Last Updated: january 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
