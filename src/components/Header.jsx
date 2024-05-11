export default function Header() {
  return (
    <header>
      <div className="headerContent">
        <div className="headerImages">
          <img src="../../public/image-mockups.png" alt="mobile photos" className="mobiles" />
          <picture className="headerBackgroundImage">
            <source
              srcSet="../../public/bg-intro-mobile.svg"
              media="(max-width: 480px)"
            />
            <img src="../../public/bg-intro-desktop.svg" alt="intro image" />
          </picture>
        </div>
        <div className="heading">
          <h1><span className="nowrap">Next generation</span> digital banking</h1>
          <p className="headingParagraph">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="requestInvite headerInviteButton">
            Request Invite
          </button>
        </div>
      </div>
    </header>
  );
}
