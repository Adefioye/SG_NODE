import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Feedback-Dev
          </a>
          <ul className="right">
            <li>
              <a href="#"> Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
