import React, { Component } from 'react';


class ChartRow extends Component {
    constructor() {
        super()
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        fetch('/api/product/' + this.props.dataFromParent)
            .then(respuesta => { return respuesta.json() })
            .then(product => {
                console.log(product)

                this.setState({ products: product.products })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <tr>

                <td>
                     Data from parent is :{this.props.dataFromParent}
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