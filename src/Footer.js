import React from 'react';

function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>Copyrights &copy; {currentYear}</p>
      </footer>
    );
}

export default Footer;