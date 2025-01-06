import React from "react";
import Image from "next/image";

const ComingSoonMessage = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h2>🚧 Posts Coming Soon! 🚧</h2>
        <p>
          Hey there! I am excited to bring you programming posts{" "}
          <strong>for your programming languages</strong>. However, I've hit my
          current Supabase Free Plan usage limit, and if I do get the money, I
          will upgrade to the Pro Plan to deliver more content.
        </p>
        <p>Here's a screenshot of the notification I received from Supabase:</p>
        <div className="notification-image">
          <Image
            src="https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/Screen%20Shot%202025-01-04%20at%2012.20.13%20PM.png"
            alt="Supabase Usage Limit Notification"
            width={600}
            height={400}
          />
        </div>
        <p>
          Don't worry! I am actively working on upgrading my plan to bring you
          more amazing content. Please check back soon, or consider supporting
          me to help speed up the process. 😊
        </p>
        <p>Thank you for your patience and understanding!</p>
        <ul className="support-links">
          <li>
            <a href="mailto:managersebowa4525@gmail.com">
              <i className="fa-solid fa-envelope"></i> Email Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoonMessage;
