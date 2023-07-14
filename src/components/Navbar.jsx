import '../styles/navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
          <h3 className="nav-title">GenXiaong.</h3>
        </div>
        <div className="navbar-right">
          <div className="nav-items">
            <a href="#" className="nav-item">INTRODUCTION</a>
            <a href="#" className="nav-item">ABOUT ME</a>
            <a href="#" className="nav-item">CONTACT</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar