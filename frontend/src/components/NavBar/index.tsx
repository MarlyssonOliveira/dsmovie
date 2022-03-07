import {ReactComponent as GitIcon} from '../../assets/img/github.svg';
import './styles.css'

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/MarlyssonOliveira/dsmovie"></a>
            <div className='dsmovie-git-content'>
              <GitIcon />
              <p>/MarlyssonOliveira</p>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default Navbar;