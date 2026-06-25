import NavbarPic from '../assets/navbar.jpg'

const Navbar = () => {
  return (
    <>
  <div
      className="container-fluid p-0 text-white"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ), url(${NavbarPic})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-white fw-bold fs-3" href="#">
              FREE
            </a>

            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="ms-lg-4 small text-center text-lg-start">
                Разрабатываем фирменные
                <br />
                стили с 2009 года
              </div>

              <div className="ms-auto mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-2">
                <button
                  type="button"
                  className="btn btn-outline-light"
                >
                  8 (495) 156-39-11
                </button>

                <button
                  type="button"
                  className="btn btn-outline-light"
                >
                  <i className="bi bi-facebook"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-outline-light"
                >
                  <i className="bi bi-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold">
              Вам нужен фирменный стиль
              <br />
              или ребрендинг?
            </h1>

            <p className="lead mt-3">
              Разработаем в срок от 10-ти дней
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-light btn-lg">
                Портфолио
              </button>

              <button className="btn btn-outline-light btn-lg">
                Оставить заявку
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-6">
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
