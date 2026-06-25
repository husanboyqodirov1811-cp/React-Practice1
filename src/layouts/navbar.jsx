import NavbarPic from '../assets/navbar.jpg'

const Navbar = () => {
  return (
    <>
    <div className="container-fluid p-4 color-white d-flex flex-column" style={{
        backgroundImage:`url(${NavbarPic})`,
        minHeight:'100vh',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}>
        <div className="container-xxl d-flex justify-content-center align-items-center ">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">FREE</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div className="text" style={{
            fontSize:'10px'
        }}>Разрабатываем фирменные <br /> стили с 2009 года</div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    </div>
    </>
  )
}

export default Navbar
