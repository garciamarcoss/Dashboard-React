import React, { Component } from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';


class LastGameInDb extends Component {
    constructor() {
        super()
        this.state = {
            lastGame: null
        }
    }
    componentDidMount() {
        fetch('/api/product')
            .then(respuesta => { return respuesta.json() })
            .then(products => {
                let lastGameIbArray=products.products[products.count-1]
                fetch('/api/product/'+lastGameIbArray.id)
                .then(respuesta => { return respuesta.json() })
                .then(product => {
                    this.setState({ lastGame: product })
                })
                .catch(error => console.log(error))
           })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último Juego en Base de Datos</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={this.state.lastGame? this.state.lastGame.ImagenPrincipal:"cargando"} alt=" cargando " />
                        </div>
                        <p>
                            {this.state.lastGame? this.state.lastGame.resumen:"cargandfo"}
                        </p>
                        <a className="btn send-buttom" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LastGameInDb;
