// import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return (
//     <div>
//       <header className="header">
//         <div className="logo">
//           <Link href="/" passHref>
//             DevGallery
//           </Link>{" "}
//         </div>
//       </header>
//       <section className="merge-society-section">
//         <p className="merge-society-text">
//           This site is brought to you by{" "}
//           <a
//             href="https://mergesociety.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             MergeSociety
//           </a>
//           . If you're interested in learning HTML, CSS, JavaScript, and
//           React.js, visit us and level up your skills!
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Header;

import Link from "next/link";
import React from "react";
import ReloadButton from "./reloadButton";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link href="/" passHref>
            DevGallery
          </Link>
          <p className="reload-message">
            If images don't load, please <ReloadButton /> the page.
          </p>
        </div>
      </header>
      <section className="merge-society-section">
        <p className="merge-society-text">
          This site is brought to you by{" "}
          <a
            href="https://mergesociety.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MergeSociety
          </a>
          . If you're interested in learning HTML, CSS, JavaScript, and
          React.js, visit us and level up your skills!
        </p>
      </section>
    </div>
  );
};

export default Header;
