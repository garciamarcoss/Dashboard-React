import React from 'react';
import foto from '../assets/images/jordan-walke.png'
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastGameInDb from './LastGameInDb';
import ContentRowMovies from './TarjetasTotales';
import Usuarios from './Usuarios';
import Chart from './Chart';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';

function AllContent() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="bg-color-side navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
               
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
                    <Link className="nav-link" to="/juegos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Juegos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/usuarios">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Usuarios</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/tablas">
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
                <Route path="/juegos">
                    <CategoriesInDb />
                    <LastGameInDb />
                </Route>
                <Route path="/usuarios">
                    <Usuarios />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/tablas">
                    <Usuarios />
                    <Chart />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default AllContent;