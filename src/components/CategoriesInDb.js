import React, { Component } from "react";
import Card from "./Card"


class CategoriesInDb extends Component {
    constructor(){
        super()
        this.state = {
            genresList : []
        }
    }
    componentDidMount(){
        fetch('/api/genres')
            .then(respuesta => {return respuesta.json()})
            .then(genres=>{
                console.log(genres)
                this.setState({genresList: genres.data})
            })
            .catch(error=>console.log(error))
    }


    render() {
        
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorías</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.genresList.map((genre, i)=>{
                                return <Card {...genre} key={i} />
                            })}
                        </div>
                    </div>

                </div>
            </div >

        )
    }
}

export default CategoriesInDb;
