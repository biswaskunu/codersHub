export default function Footer() {
  return (
    <footer>
      <div className="footpanel">
        <div className="contact foot">
          <ul>
            <li className="footer-title">Contact Info</li>
            <li>
              <strong>Email: </strong>
              <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                kunubiswas2@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone: </strong>7853041763
            </li>
            <li>
              <strong>Address: </strong>Above Ground
            </li>
          </ul>
        </div>
        <div className="socials foot">
          <ul>
            <li className="footer-title">Socials</li>
            <li>
              <strong>Instagram:</strong> N/A
            </li>
            <li>
              <strong>Facebook:</strong> N/A
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/biswash-rath-25a871379/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Biswash Rath
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
