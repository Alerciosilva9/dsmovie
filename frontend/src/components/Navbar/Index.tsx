import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './Style.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Alerciosilva9">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Alerciosilva9</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    );

}

export default Navbar;