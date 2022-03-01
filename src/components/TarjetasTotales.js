import React, { Component } from 'react';
import SmallCard from './SmallCard';

class ContentRowMovies extends Component {
    constructor() {
        super()
        this.state = {
            usersTotal: null,
            productsTotal: null,
            categoriesTotal: null,
        }
    }

    componentDidMount() {
        fetch('/api/category')
            .then(respuesta => { return respuesta.json() })
            .then(category => {
                console.log(category)
                let categorias = {
                    title: 'Total de Categorias',
                    color: 'warning',
                    cuantity: category.length,
                    icon: 'fa-clipboard-list'
                }
                this.setState({ categoriesTotal: categorias })
            })
            .catch(error => console.log(error))
        fetch('/api/product')
            .then(respuesta => { return respuesta.json() })
            .then(product => {
                console.log(product)
                let juegos = {
                    title: 'Cantidad de Juegos',
                    color: 'success',
                    cuantity: product.count,
                    icon: 'fa-award'
                }
                this.setState({ productsTotal: juegos })
            })
            .catch(error => console.log(error))
        fetch('/api/user')
            .then(respuesta => { return respuesta.json() })
            .then(user => {
                console.log(user)
                let usuarios = {
                    title: 'Cantidad de Usuarios',
                    color: 'primary',
                    cuantity: user.count,
                    icon: 'fa-user-check'
                }
                this.setState({ usersTotal: usuarios })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (

            <div className="row">


                <SmallCard {...this.state.productsTotal} key={1} />
                <SmallCard {...this.state.usersTotal} key={2} />
                <SmallCard {...this.state.categoriesTotal} key={0} />


            </div>
        )
    }
}

export default ContentRowMovies;