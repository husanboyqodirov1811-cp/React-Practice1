import NavbarPic from '../assets/navbar.jpg'
import FarmPic from '../assets/firm.jpg'
import LifePic from '../assets/lifecare.jpg'
import AmperiaPic from "../assets/amperia.jpg";
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
      <div className="container-xxl p-2 pt-5">
        <div className="text fs-3">Что такое фирменный стиль?</div>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-lg-6" style={{
            backgroundImage: `url(${FarmPic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="col-12 col-lg-6">
            <div className="text">Это набор тех уникальных «признаков», по которым клиент отличит вас от других компаний. Фирменный стиль отражает миссию бренда, ценности, является способом его идентификации, формирует определённое восприятие в коммуникации с потребителями.</div>
            <br />
            <div className="text">В идеале разработка корпоративного стиля должна происходить одновременно с созданием бизнеса и формированием его фундаментальных идей. Есть и второй вариант: бизнес существует определенное время и ему нужен перезапуск - это называется редизайн или ребрендинг: в мире жёсткой конкуренции важно быть «в тренде», успевать за изменениями в поведениях покупателя и “говорить” с ним на одном языке.</div>
          </div>
        </div>
      </div>
      <div className="container-xxl d-flex justify-content-center align-items-center p-4">
        <div className="text fs-1">Название и логотип – важные составляющие фирменного стиля, но на этом всё только начинается. Ниже основные элементы:</div>
      </div>
      <div className="container-xxl d-flex flex-wrap justify-content-center align-items-start p-4 gap-5">
        <div className="text d-flex jusfity-content-end align-items-start">
          <b style={{fontSize:'30px'}}>1</b> Название <br /> компании
        </div>
        <div className="text d-flex jusfity-content-end align-items-start">
          <b style={{fontSize:'30px'}}>2</b>Логотип – <br /> основной <br /> графический <br /> символ
        </div>
        <div className="text d-flex jusfity-content-end align-items-start">
          <b style={{fontSize:'30px'}}>3</b> Фирменные <br/> цвета всей <br /> коммуникации <br /> (онлайн и <br/> оффлайн)
        </div>
        <div className="text d-flex jusfity-content-end align-items-start">
          <b style={{fontSize:'30px'}}>4</b> Шрифт
        </div>
        <div className="text d-flex jusfity-content-end align-items-start">
          <b style={{fontSize:'30px'}}>5</b> Носители <br /> фирменного <br /> стиля <br /><br />
Этот набор варьируется в <br /> зависимости от нужд и потребностей <br /> компании: визитные карточки,<br /> фирменные бланки и прочая деловая<br /> документация, упаковка, сувенирная <br /> продукция, брендинг автотранспорта.

        </div>
      </div>
      <div className="container-xxl d-flex justify-content-end align-items-center pt-5 p-2"><div className="text fs-3">Сколько стоит фирменный стиль?</div></div>
<div className="container-xxl pb-3">
  <div className="row align-items-center">
    <div className="col-12 col-lg-6">
      <div className="mb-4">
        Каждая задача по разработке фирменного стиля уникальна для нас —
        это новый вызов и новые эмоции. Мы принципиально не предлагаем
        вам стандартизированные пакеты “эконом”, “стандарт” или
        “премиум”, мы не штампуем, мы создаем.
      </div>

      <div className="mb-4">
        Стоимость разработки фирменного стиля в нашем агентстве
        начинается от 120 000 руб., финальную планку без брифинга
        определить невозможно — давайте созвонимся и обсудим ваш проект!
      </div>

      <div className="p-3 text-white bg-primary rounded">
        Каждый клиент нашего агентства получает приятный бонус на
        финише проекта, о котором мы расскажем ниже ▼
      </div>
    </div>

    <div
      className="col-12 col-lg-6"
      style={{
        backgroundImage: `url(${LifePic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    ></div>
  </div>
</div>
<div className="container-xxl p-5" style={{
  backgroundImage: `url(${AmperiaPic})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "600px",
}}></div>

<div className="container-xxl d-flex flex-row p-3 gap-5 justify-content-start align-items-center ">
  <div className="text fs-3 fw-bold">Amperia</div>
<button type="button" class="btn btn-outline-dark">Смотреть проект</button>
</div>
<div className="container-xxl pb-5">
  <div className="text">
    Бренд красивых сувениров <br /> и подарков для дома
  </div>
</div>
<div className="container-xxl p-5 pt-5" style={{
  backgroundImage: `url(${AqPic})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "600px",
}}></div>

<div className="container-xxl d-flex flex-row p-3 gap-5 justify-content-start align-items-center ">
  <div className="text fs-3 fw-bold">AQ.Lifecare</div>
<button type="button" class="btn btn-outline-dark">Смотреть проект</button>
</div>
<div className="container-xxl pb-5">
  <div className="text">
   Инновационная клиника <br /> внутривенной медицины
  </div>
</div>
<div className="container-xxl p-5 pt-5" style={{
  backgroundImage: `url(${VilataPic})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "600px",
}}></div>

<div className="container-xxl d-flex flex-row p-3 gap-5 justify-content-start align-items-center ">
  <div className="text fs-3 fw-bold">Vilata</div>
<button type="button" class="btn btn-outline-dark">Смотреть проект</button>
</div>
<div className="container-xxl pb-5">
  <div className="text">
   Бренд натуральных и <br /> вкусных соусов
  </div>
</div>
<div className="container-xxl p-5 pt-5" style={{
  backgroundImage: `url(${CoralPic})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "600px",
}}></div>

<div className="container-xxl d-flex flex-row p-3 gap-5 justify-content-start align-items-center ">
  <div className="text fs-3 fw-bold">Coral Black</div>
<button type="button" class="btn btn-outline-dark">Смотреть проект</button>
</div>
<div className="container-xxl pb-4  ">
  <div className="text">
   Черная икра в современной <br /> инторпритации
  </div>
</div>
<div className="container-xxl d-flex justify-content-center align-items-center p-3"><button type="button" class="btn btn-primary">Показать еще</button></div>
    </>
  )
}
import CoralPic from "../assets/coral.png";
import AqPic from "../assets/aq.png";
import VilataPic from "../assets/vilata.png";
export default Navbar
