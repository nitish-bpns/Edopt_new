import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
import Logo from "./partials/Logo";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import './style.css'
import axios from "../../api/axios";



const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  //const { t, i18n } = useTranslation();

  function getCookie(name) {
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        var cookieValue = 0
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const [email, setEmail] = useState(getCookie('email'))
  const [log, setLog] = useState(false)

  useEffect(() => {
    axios.get('/isloggedin', { headers: { email: email }, withCredentials: true })
      .then((response) => {
        console.log(response.data)
        if (response.data.status) { setLog(true) }
        else { setLog(false) }

      }).catch((err) => {
        setLog(false)
      })
  }, []);
  const [redirecthome, setRedirectHome] = useState(false)
  const logouthandler = (e) => {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    axios.get('/logout', { withCredentials: true })
      .then((response) => {
        setRedirectHome(true)
      })
  }

  // if (redirecthome) {
  //   return (<Redirect to={{ pathname: "/Login_Donor", state: { 'redirected': true } }} />)
  // }

  if (log) {
    return (
      <header {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            <Logo />
            {!hideNav && (
              <>
                <button
                  ref={hamburger}
                  className="header-nav-toggle"
                  onClick={isActive ? closeMenu : openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={nav}
                  className={classNames("header-nav", isActive && "is-active")}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={classNames(
                        "list-reset text-xs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    >
                      {/* <li>
                        <Link to="/" onClick={closeMenu}>{t('key3')}</Link>
                      </li>
                      <li>
                        <Link to="/Feed_Donor" onClick={closeMenu}>{t('key4')}</Link>
                      </li>
                      <li>
                        <Link to="/News_Donor" onClick={closeMenu}>{t('key5')}</Link>
                      </li> */}
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link
                            to="/Dashboard1_Donor"
                            className="button button-primary button-wide-mobile button-sm"
                            onClick={closeMenu}
                            style={{
                              backgroundColor: "#f1b12a",
                              borderRadius: "5px",
                              float: "left",
                            }}
                          >
                            Dashboard
                          </Link>
                        </li>

                        <li>
                          <button
                            className="button button-primary button-wide-mobile button-sm"
                            onClick={logouthandler}
                            style={{
                              backgroundColor: "#ffffff",
                              borderRadius: "5px",
                              borderColor: "#f1b12a",
                              color: "#f1b12a",
                            }}
                          >
                            Logout
                          </button>
                        </li>

                      </ul>
                    )}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>
    );
  }
  else {

    return (
      <header {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            <Logo />
            {!hideNav && (
              <>
                <button
                  ref={hamburger}
                  className="header-nav-toggle"
                  onClick={isActive ? closeMenu : openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={nav}
                  className={classNames("header-nav", isActive && "is-active")}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={classNames(
                        "list-reset text-xs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    >
                      {/* <li>
                      <Link to="/" onClick={closeMenu}>{t('key3')}</Link>
                    </li>
                    <li>
                      <Link to="/Feed_Donor" onClick={closeMenu}>{t('key4')}</Link>
                    </li>
                    <li>
                      <Link to="/News_Donor" onClick={closeMenu}>{t('key5')}</Link>
                    </li> */}
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link
                            to="/Signup_Student"
                            className="button button-primary button-wide-mobile button-sm"
                            // onClick={closeMenu}
                            style={{
                              backgroundColor: "white",
                              borderRadius: "5px",
                              border: "2px solid #3a936c",
                              color: "green",

                            }}
                          >
                            Start a Fundraiser
                          </Link>
                        </li>
                        <li>
                          <a className="button button-primary button-wide-mobile button-sm" style={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            border: "2px solid #3a936c",
                            color: "green",
                          }} href="./../myfeeds">Browse Fundraiser</a>

                          {/* <Link

                            className="button button-primary button-wide-mobile button-sm"
                            // onClick={closeMenu}
                            style={{
                              backgroundColor: "#3a936c",
                              borderRadius: "5px",
                            }}
                          >
                            eDOPT a Child
                          </Link> */}
                        </li>


                      </ul>
                    )}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
