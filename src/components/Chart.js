import React, { Component } from 'react';
import ChartRow from './ChartRow';


class Chart extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('/api/product')
            .then(respuesta => { return respuesta.json() })
            .then(product => {
                console.log(product)
                
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
                                    <th>Título</th>
                                    <th>Edad</th>
                                    <th>Dificultad</th>
                                    <th>Categorías</th>
                                    <th>Plataforma</th>
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
                                        return <ChartRow dataFromParent= {row}  key={i} />
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

export default Chart;