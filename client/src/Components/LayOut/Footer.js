import React, { Component } from 'react'

class Footer extends Component {
    render() {
        let date = new Date();

        return (
            <footer className="page-footer font-small mdb-color pt-4 text-dark  ">
                <div className="row d-flex align-items-center">
                    <div className="col-12 text-center">
                        <p className="">© {date.getFullYear()} Copyright Created by <a href='https://www.ishakertem.com/' rel="noopener noreferrer" target='_blank'>Ishak Ertem</a>
                        </p>

                    </div>





                </div>
            </footer >
        )
    }
}

export default Footer