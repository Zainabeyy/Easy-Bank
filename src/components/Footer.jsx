export default function Footer() {
  return (
    <footer>
      <div className="footerIcons">
        <div className="footerLogo">
          <img src="../../public/footerLogo.svg" alt="" />
        </div>
        <div className="appIcons">
          <img src="../../public/icon-facebook.svg" alt="facebook icon" />
          <img src="../../public/icon-youtube.svg" alt="youtube icon" />
          <img src="../../public/icon-twitter.svg" alt="twitter icon" />
          <img src="../../public/icon-pinterest.svg" alt="pinterest icon" />
          <img src="../../public/icon-instagram.svg" alt="instagram icon" />
        </div>
      </div>
      <ul className="footerLinkes">
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <div>
        <button className="requestInvite footerInviteButton">
          Request Invite
        </button>
        <p>
          <small>&copy; Easybank. All Rights Reserved</small>
        </p>
      </div>
    </footer>
  );
}
