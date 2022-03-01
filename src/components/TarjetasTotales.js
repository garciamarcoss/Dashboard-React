import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let usuarios = {
    title: 'Cantidad de Usuarios',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-user-check'
}

/* <!-- Total awards --> */

let juegos = {
    title:'Cantidad de Juegos', 
    color:'success', 
    cuantity: 79,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let categorias = {
    title:'Total de Categorias' ,
    color:'warning',
    cuantity: 49,
    icon:'fa-clipboard-list'
}

let cartProps = [usuarios, juegos, categorias];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;