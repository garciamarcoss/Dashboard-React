import React, { Component } from 'react';


class ChartRow extends Component {
    constructor() {
        super()
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        fetch('/api/product/' + this.props.dataFromParent.id)
            .then(respuesta => { return respuesta.json() })
            .then(producto => {
                console.log(producto)

                this.setState({ product: producto })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <tr>

                <td>
                    {this.state.product ? this.state.product.titulo : "cargando"}
                </td>
                <td>
                    {this.state.product ? this.state.product.Edad : "cargando"}
                </td>
                <td>
                    {this.state.product ? this.state.product.Dificultad : "cargando"}
                </td>
                <td>
                    {this.state.product ? this.state.product.Categorias.map((c,i)=>{
                        return <li key={i}>{c}</li>
                    }) : "cargando"}
                </td>
                <td>
                {this.state.product ? this.state.product.Plataformas.map((p,i)=>{
                        return <li key={i}>{p}</li>
                    }) : "cargando"}
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



export default ChartRow;