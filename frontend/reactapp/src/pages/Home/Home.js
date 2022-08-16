import React  from 'react'
import './Home.css'

const Home = ({prod}) => {
  console.log({prod});
  return (
  <div>
  <div id="carouselExampleControls" className="carousel slide homeslider" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='' className="d-block w-100 img" alt="adada"/>
      <div className="pictureText">
        <span className='span'></span>
        <h2 className='h2'></h2>
        <a href="/">SHOP NOW</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/cozastore/images/xslide-02.jpg.pagespeed.ic.__MQeyG5T4.webp" className="d-block w-100 img" alt="..."/>
      <div className="pictureText">
        <span className='span'>Men+ Collection 2018</span>
        <h2 className='h2'>NEW ARRIVALS</h2>
        <a href="/">SHOP NOW</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/cozastore/images/xslide-01.jpg.pagespeed.ic.XotvXKn0Mi.webp" className="d-block w-100 img" alt="..."/>
      <div className="pictureText">
        <span className='span'>Women Collection 2018</span>
        <h2 className='h2'>NEW SECTION</h2>
        <a href="/">SHOP NOW</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<section id="second">
      <div className="container">
        <div className="row all justify-content-between col-lg-4 ">
            <div className="img">
              <img className='img-fluid photo' src="https://preview.colorlib.com/theme/cozastore/images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp" alt="" />
                <div className="text row">
                  <span className='span1'>Women</span>
                  <span>Spring 2018</span>
                </div>
                <div className="hover">
                    <span className='span1'>Women</span>
                    <span>Spring 2018</span>
                    <a href="/">SHOP NOW</a>
                </div>
            </div>
            <div className="img">
              <img className='img-fluid photo' src="https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp" alt="" />
                <div className="text row">
                  <span className='span1'>Men</span>
                  <span>Spring 2018</span>
                </div>
                <div className="hover">
                    <span className='span1'>Men</span>
                    <span>Spring 2018</span>
                    <a href="/">SHOP NOW</a>
                </div>
            </div>
            <div className="img">
              <img className='img-fluid photo' src="https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp" alt="" />
                <div className="text row">
                  <span className='span1'>Accessories</span>
                  <span>New Trend</span>
                </div>
                <div className="hover">
                    <span className='span1'>Men</span>
                    <span>New Trend</span>
                    <a href="/">SHOP NOW</a>
                </div>
            </div>
        </div>
      </div>
    </section>

    {/* ------------------------------------------------------------------------------------------------------------------ */}


    <section id="products">
      <div className="container">
        <div className="row all justify-content-between">
          <div className="top">
            <h3>PRODUCT OVERVIEW</h3>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Esprit Ruffle Shirt</a>
                <span>$16.64</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-02.jpg.pagespeed.ic._mIojWDfEX.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Herschel supply</a>
                <span>$35.31</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-03.jpg.pagespeed.ic.eOHs429Gtb.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Only Check Trouser</a>
                <span>$25.50</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-04.jpg.pagespeed.ic.1MaP4euDx9.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Classic Trench Coat</a>
                <span>$75.00</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-05.jpg.pagespeed.ic.GHcB3Nc9zp.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Front Pocket Jumper</a>
                <span>$34.75</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-06.jpg.pagespeed.ic.mU9c3gp9yp.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Vintage Inspired Classic</a>
                <span>$93.20</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-07.jpg.pagespeed.ic.wXz93SW1CF.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Shirt in Stretch Cotton</a>
                <span>$52.66</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-08.jpg.pagespeed.ic.zcR_ZfXlFq.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Pieces Metallic Printed</a>
                <span>$18.96</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-09.jpg.pagespeed.ic._ex9y9IVR9.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Converse All Star Hi Plimsolls</a>
                <span>$75.00</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-10.jpg.pagespeed.ic.JKjq4oUn3E.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Femme T-Shirt In Stripe</a>
                <span>$25.85</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-11.jpg.pagespeed.ic.fJxJBqHZzv.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Herschel supply</a>
                <span>$63.16</span>
              </div>
            </div>
          </div>
          <div className="bottom row col-lg-3 mb-5">
            <div className="box">
              <div className="bottom-img imgs">
                <img className='img-fluid' src="https://preview.colorlib.com/theme/cozastore/images/xproduct-11.jpg.pagespeed.ic.fJxJBqHZzv.webp" alt="" />
                <div className="btn">
                  <a href="/">Quick View</a>
                </div>
              </div>
              <div className="bottom-text">
                <a href="/">Esprit Ruffle Shirt</a>
                <span>$16.64</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  )
}

export default Home