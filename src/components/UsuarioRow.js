import React, { Component } from 'react';


class UsuarioRow extends Component {
    constructor() {
        super()
        this.state = {
            usuario: null
        }
    }
    componentDidMount() {
        fetch('/api/usuarios/' + this.props.dataFromParent.id)
            .then(respuesta => { return respuesta.json() })
            .then(usuario => {
                console.log(usuario)

                this.setState({ usuario: usuario })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <tr>

                <td>
                    {this.state.usuario ? this.state.usuario.nombre : "cargando"}
                </td>
                <td>
                    {this.state.usuario ? this.state.usuario.apellido : "cargando"}
                </td>
                <td>
                    {this.state.usuario ? this.state.usuario.usuario : "cargando"}
                </td>
                <td>
                    {this.state.usuario ? this.state.usuario.email : "cargando"}
                </td>

            </tr>

        )
    }
}
// <th>Título</th>
// <th>Edad</th>
// <th>Rating</th>
// <th>Categorías</th>
// <th>Plataforma</th>    



export default UsuarioRow;