import {ReactComponent as GitHubIcon} from '../../assets/img/github.svg';
import './styles.css'
const NavBar = () => {
    return (
      <header>
        <nav className='container'>
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/danismartins19" target="_blank" rel="noreferrer">
                    <div className='dsmovie-contact-container'>
                        <GitHubIcon />
                        <p>/danismartins19</p>
                    </div>
                </a>
            </div>
        </nav>
      </header>
    );
}

export default NavBar;