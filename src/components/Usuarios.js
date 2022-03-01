import React, { Component } from 'react';
import UsuarioRow from './UsuarioRow';


class Usuarios extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('/api/usuarios')
            .then(respuesta => { return respuesta.json() })
            .then(usuario => {
                console.log(usuario)
                
                this.setState({ products: product.products })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Nombre de Usuario</th>
                                    <th>Correo Electrónico</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th>Título</th>
                                    <th>Edad</th>
                                    <th>Dificultad</th>
                                    <th>Categorías</th>
                                    <th>Plataforma</th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                {
                                    this.state.products.map((row, i) => {
                                        return <UsuarioRow dataFromParent= {row}  key={i} />
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Usuarios;