import React from 'react';
import foto from '../assets/images/jordan-walke.png'
import ContentWrapper from './ContentWrapper';
import GenresInDb from './CategoriesInDb';
import LastMovieInDb from './LastGameInDb';
import ContentRowMovies from './TarjetasTotales';
import Usuarios from './Usuarios';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';

function AllContent() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="bg-color-side navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                <li className="nav-item dropdown no-arrow perfil">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <div className='perfil-separate'>
                            <span>Jordan Walke</span>
                            <img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60" />

                        </div>
                    </a>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - GameStore</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menú</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Juegos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Usuarios</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Usuarios">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/Usuarios">
                    <Usuarios />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default AllContent;