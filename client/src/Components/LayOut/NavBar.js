import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,

} from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu'


class NavBar extends Component {
    state = {
        isOpen: false,
        offsetY: 0,
        slide: 0,
        lastScrollY: 0,
        windowWidth: 0
    }
    componentDidMount() {
        this.setState({
            windowWidth: window.innerWidth,
        })
        window.addEventListener('resize', this.updateWindowDimension);
        window.addEventListener('scroll', this.listenToScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
        window.removeEventListener('scroll', this.listenToScroll)

    }
    updateWindowDimension = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }


    listenToScroll = () => {
        this.setState({
            offsetY: window.pageYOffset
        })
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-100px' });
        } else {
            this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    }

    toggle = (e) => {
        if (this.state.innerWidth !== null && this.state.windowWidth < 768) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar style={{
                    transform: this.state.offsetY > 50 && `translate(0, ${this.state.slide})`,
                    transition: this.state.offsetY > 50 ? 'transform 0.2s linear' : 'all 0.5s ease',
                    zIndex: 4,
                }}
                    expand="md" dark className={this.state.offsetY > 50 ? ` fixed-top bg-light` : 'fixed-top bg-light '}
                >
                    <NavbarToggler onClick={this.toggle} className='border-0 mt-2 float-right'>
                        <HamburgerMenu
                            isOpen={this.state.isOpen}
                            navbar
                            menuClicked={this.toggle}
                            borderRadi={0}
                            animationDuration={0.5}
                        />
                    </NavbarToggler>
                    <NavbarBrand href='/' className='text-dark mx-auto brand font-weight-bold'>
                        COVID-19
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isOpen} navbar className='text-center'>
                        <Nav className="mx-auto font-weight-bold  " navbar>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='/'
                                >
                                    WORLD DATA
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='/symptomchecker'
                                >
                                    SYMPTOM CHECKER
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='media'
                                >
                                    MEDIA & NEWS
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='/about'
                                >
                                    ABOUT
                                    </NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBar