import './navbar.css'

function Navbar() {
    return (
        <div>
  <div className='navbar'>
      <img src="/images/brand_logo.png" alt= 'logo' />
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className='login'>Login</button>
    </div>
        </div>
    )
}

export default Navbar;