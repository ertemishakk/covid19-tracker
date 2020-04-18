import React, { Component } from 'react'

class Footer extends Component {
    render() {
        let date = new Date();

        return (
            <footer className="page-footer font-small mdb-color pt-4 text-dark border ">
                <div className=" text-center text-md-left">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">COVID-19</h6>
                            <p> COVID-19 is more than just a hot topic today.
                                With this project,
                                we hope to help people reach real time data and news within seconds.

</p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p>
                                <a href="/" className='text-dark'>Media & News</a>
                            </p>
                            <p>
                                <a href="/" className='text-dark'>About</a>
                            </p>
                        </div>


                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                                <i className="fas fa-home mr-3 text-dark"></i> 172 Hilton Street Glenroy 3046</p>
                            <p>
                                <i className="fas fa-envelope mr-3 text-dark"></i> admin@covid19.com.au</p>
                            <p>
                                <i className="fas fa-phone mr-3 text-dark"></i> + 0476 574 771</p>
                            <p>
                                <i className="fas fa-print mr-3 text-dark"></i> + 01 234 567 89</p>
                        </div>


                    </div>
                    <hr />
                    <div className="row d-flex align-items-center">
                        <div className="col-12 text-center">
                            <p className="">© {date.getFullYear()} Copyright
                            </p>

                        </div>



                        <div className="col-12">
                            <div className="text-center ">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://npa.com.au/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                            <i className="fab fa-facebook-f text-dark"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://npa.com.au/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                            <i className="fab fa-twitter text-dark"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://npa.com.au/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                            <i className="fab fa-google-plus-g text-dark"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://npa.com.au/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                            <i className="fab fa-linkedin-in text-dark"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer