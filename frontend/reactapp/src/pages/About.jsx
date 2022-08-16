import React from 'react'

const About = () => {
  return (
    <div>
         <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/xabout-01.jpg.pagespeed.ic.uzAXsYw1Qn.webp" alt="About" className='w-75 mt-5'/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">Our Story</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae nostrum explicabo reiciendis voluptates, ducimus, ipsa accusantium deleniti nulla ad nemo in iusto numquam quia velit voluptatem, dolorum distinctio aperiam quisquam doloribus iste sunt asperiores! Debitis obcaecati molestias aperiam architecto nihil a possimus reiciendis mollitia, voluptatibus culpa nisi temporibus doloremque?</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 order-2">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/xabout-02.jpg.pagespeed.ic.-BA0jt5hGo.webp" alt="About" className='w-75 mt-5'/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">Our Mission</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae nostrum explicabo reiciendis voluptates, ducimus, ipsa accusantium deleniti nulla ad nemo in iusto numquam quia velit voluptatem, dolorum distinctio aperiam quisquam doloribus iste sunt asperiores! Debitis obcaecati molestias aperiam architecto nihil a possimus reiciendis mollitia, voluptatibus culpa nisi temporibus doloremque?</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About