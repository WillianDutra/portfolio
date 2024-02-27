import React from 'react';

import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';

export default function Header() {
  return (
    <footer>
      <h4>Contact</h4>
      <div>
        <button
          onClick={ () => window.open('https://www.linkedin.com/in/WillianDutra/') }
        >
          <img src={ linkedin } alt="Linkedin icon" />
        </button>
        <button
          onClick={ () => window.open('https://www.github.com/WillianDutra/') }
        >
          <img src={ github } alt="Github icon" />
        </button>
        <button
          onClick={ () => window.open('mailto:contatowilliandutra@gmail.com') }
        >
          <img src={ email } alt="Email icon" />
        </button>
      </div>

      <p>© Willian Dutra - Alguns direitos reservados.</p>
    </footer>
  );
}
