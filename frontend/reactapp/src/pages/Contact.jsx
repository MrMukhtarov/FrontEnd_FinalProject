import React from 'react'

const Contact = () => {
  return (
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                      <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                      <h1 className="display-6 text-center mb-4">Have Some <b>Question?</b></h1>
                      <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://byteway.com.au/wp-content/uploads/2021/07/3236269.png" alt="Contact" className='w-75' />
                    </div>
                    <div className="col-md-6">
                        <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="name" placeholder="John Smith"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            ></textarea>
                            </div>
                            <button type="submit" className='btn btn-outline-primary rounded-pill px-4'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1iITZr1LsK5EL5WUSon3ZwAJ5VO3vTOc&ehbc=2E312F" width="1345" height="480"></iframe>
        </section>
       
    </div>
  )
}

export default Contact