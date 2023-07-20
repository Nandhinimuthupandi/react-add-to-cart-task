
import './Header.css'
const Header = () => {
  


  return (
    <div className='head-container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand" href="https://www.google.com">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="https://www.google.com">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.google.com">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="https://www.google.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="https://www.google.com">All Products</a>
                <a class="dropdown-item" href="https://www.google.com">Popular Items</a>
                <a class="dropdown-item" href="https://www.google.com">New Arrival</a>
              </div>
            </li>
          </ul>
        </div>
        {/* <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-dark my-2 my-sm-0 cart-button">Cart</button>
        </form> */}
      </nav>
    </div>
  )
}

export default Header;