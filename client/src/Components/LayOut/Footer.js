import React, { Component } from 'react'

class Footer extends Component {
    render() {
        let date = new Date();

        return (
            <footer className="page-footer font-small mdb-color pt-4 text-dark  ">
                <div className="row d-flex align-items-center">
                    <div className="col-12 text-center">
                        <p className="">© {date.getFullYear()} Copyright Created by <a href='https://www.ishakertem.com/' target='_blank'>Ishak Ertem</a>
                        </p>

                    </div>



                    <div className="col-12">
                        <div className="text-center ">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                        <i className="fab fa-facebook-f text-dark"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                        <i className="fab fa-twitter text-dark"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                        <i className="fab fa-google-plus-g text-dark"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="btn-floating btn-sm rgba-white-sdark mx-1">
                                        <i className="fab fa-linkedin-in text-dark"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer >
        )
    }
}

export default Footer