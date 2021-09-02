import { Link } from "react-router-dom"; 
import "./styles.css"

export default function Header() {
  return (
    <header className="">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white fa-2x"></i>
        </button>
        <a className="navbar-brand offset-md-1 offset-lg-2 d-flex" href="/">
         {/*<img src={cover} alt="Bisquecrypto logo" width="200px" srcset="" />*/}
         <i className="fa fa-user-secret fa-2x text-white mr-1"></i>
         <h2 className="textprimary" style={{fontWeight:"bolder"}}>spyPob</h2>
        </a>

        <div className="collapse navbar-collapse offset-md-1 offset-lg-3 bg-dark" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item"><div id="google_translate_element"></div></li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/compatibility">
                Compatibility
              </Link>
            </li>
          </ul>
          <button className="btn primary">Login</button>
        </div>
      </nav>
    </header>
  );
}
