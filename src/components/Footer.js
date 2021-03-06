import React from 'react';
import logo from "../assets/images/favicon-96x96.png";

function Footer() {
    return (
        <footer>
            <div>
                <a href="/home"><img class="img-logo-footer" src={logo} alt="GameStore" /></a>
            </div>
            <div class="redes-sociales">
                <a href="http://twitter.com/GameStore"><i id="redes" class="fab fa-twitter-square"></i></a>
                <a href="http://facebook.com/GameStore"><i id="redes" class="fab fa-facebook-square"></i></a>
                <a href="http://instagram.com/GameStore"><i id="redes" class="fab fa-instagram-square"></i></a>
            </div>
            <div class="links-footer">
                <div class="first-column">
                    <p><a href="#">Publicar en GameStore</a></p>
                    <p><a href="#">Trabajá con nosotros</a></p>
                    <p><a href="#">Acerca de la compañía</a></p>
                    <p><a href="#">Política de privacidad</a></p>
                </div>
                <div class="second-column">
                    <p><a href="#">Política de reembolso de la tienda</a></p>
                    <p><a href="#">Seguridad de la cuenta</a></p>
                    <p><a href="#">Club GameStore</a></p>
                    <p><a href="#">Newsletter</a></p>
                </div>
            </div>
            <div class="informacion-legal-footer">
                © 2021, Game Store, Inc. Todos los derechos reservados. El logotipo de GameStore es una marca comercial o marca registrada de Game Store, Inc. tanto en Argentina como en el resto del mundo. Otras marcas o nombres de productos son marcas comerciales de sus respectivos propietarios. Las transacciones fuera de Argentina se realizan a través de GameStore International, S.A.
            </div>
        </footer>
    )
}

export default Footer;

// import React from 'react';

// function Footer(){
//     return (
//         <React.Fragment>
// 			<footer className="sticky-footer bg-white">
// 				<div className="container my-auto">
// 					<div className="copyright text-center my-auto">
// 						<span>Copyright &copy; Dashboard 2021</span>
// 					</div>
// 				</div>
// 			</footer>

//         </React.Fragment>
//     )
// }
// export default Footer;
