import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-10 offset-md-1">
                     <ul class="social_icon text_align_center">
                        <li> <a href="https://www.facebook.com/jonathan.olveira" target="blank"><i class="fa fa-facebook-f" style={{color: '#000000'}}></i></a></li>
                        <li> <a href="https://www.tiktok.com/@mueblera.jc" target="blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></a></li>
                        <li> <a href="https://wa.link/a41doc" target="blank"><i className="fa fa-phone" aria-hidden="true" style={{color: '#000000'}}></i></a></li>
                        <li> <a href='https://www.instagram.com/jonathanolveiraa' target='blank'><i class="fa fa-instagram" aria-hidden="true" style={{color: '#000000'}}></i></a></li>
                     </ul>
                  </div>
                  <div class="col-md-4 col-sm-6">
                     <div class="reader">
                        <h3>Muebleria JYC</h3>
                        <p class="padd_flet40">Los mejores muebles a tu medida! ubicados en: Solymar, Canelones,Uruguay</p>
                     </div>
                  </div>
                  <div class="col-md-2 col-sm-6">
                     <div class="reader">
                        <h3>Explore</h3>
                        <ul class="xple_menu">
                           <li><a href="#up">Home</a></li>
                           <li><a href="#about">Sobre Nosotros</a></li>
                           <li><a href="#trabajos">Trabajos</a></li>
                          <li><Link to="/contactus">Contactanos</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                     <div class="reader">
                        <h3>Somos Comprometidos</h3>
                          <p> A darte la mejor calidad
                           Adaptarnos a tus ideas<br></br>
                           Terminar en tiempo y forma</p>
                     </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                     <div class="reader">
                        <h3>Contactactanos</h3>
                        <p>Ante cualquier duda<br/> No dudes en contactarnos y te responderemos lo más rapido posible.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright text_align_center">
               <div class="container">
                  <div class="row">
                     <div class="col-md-10 offset-md-1">
                        <p>Copyright 2020 All Right Reserved By <a href="https://html.design/"> Free Html Template</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    )
}

export default Footer;