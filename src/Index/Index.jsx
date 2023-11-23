import "../styles/css/bootstrap.min.css"
import "../styles/css/style.css"
import "../styles/css/responsive.css"
import { Link } from 'react-router-dom';
const imgabout = require("../styles/images/about.jpg")
const excelente = require("../styles/images/excelente.png")
const trabajo = require("../styles/images/trabajo.png")
const hermosotrabajo = require("../styles/images/hermosotrabajo.png")
const genios = require("../styles/images/genios.png")
const pc = require("../styles/images/pc.png")



const Index = () =>{
   
    return(
      
        <>
        <div id= "up" class=" banner_main">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="carousel-caption relative">
                                <div class="bg_white">
                                    <h1>Mueblería JYC: Tu Destino Exclusivo para <span class="yello">Muebles de Calidad en Uruguay</span></h1>
                                    <p>Somos la opción perfecta para transformar tu hogar en un espacio único y acogedor. En Mueblería JYC, nos enorgullece ofrecer muebles de alta calidad que fusionan estilo, funcionalidad y confort.
                        Nuestra pasión por el diseño y la atención al detalle se refleja en cada pieza que ofrecemos. Ya sea que estés buscando modernidad, elegancia clásica o soluciones inteligentes para espacios reducidos.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

   
        </div>



            <div id="about" class="about top_layer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="titlepage">
                                <h2>Sobre nosotros</h2>
                                <p>Somos una pareja de Uruguay apasionada por el diseño y comprometida con brindarte las mejores opciones para embellecer tu hogar. En Mueblería JYC, nuestra historia se teje con amor y dedicación a lo largo de los años.
                        Nuestra travesía comenzó con el deseo compartido de ofrecer muebles que no solo sean estéticamente agradables, sino que también eleven la funcionalidad y la comodidad en cada hogar uruguayo. Guiados por la creatividad y la calidad, hemos construido un espacio donde cada pieza cuenta una historia de esmero y compromiso.
                        </p>
                            </div>
                        </div>
                        <div class=" col-sm-12">
                            <div class="about_box">
                                <div class="row d_flex">
                                    <div class="col-md-5">
                                        <div class="about_box_text">
                                            <h3>Decoracion a tu manera:</h3>
                                             <p>Entendemos que tu hogar es el reflejo de tu estilo y personalidad, y nos enorgullece ser parte de esa expresión única. Con un toque personal en cada diseño, buscamos superar tus expectativas y proporcionarte soluciones que se adapten a tus necesidades y gustos.
                                            </p>
                                            <a class="read_more" href="#trabajos">Mira nuestros trabajos!</a>
                                        </div>
                                    </div>
                                    <div class=" col-md-7  pppp">
                                        <div class="about_box_img">
                                            <figure><img src={imgabout} alt="#" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div class="building">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>Vos lo pensas<br/><span class="yello">Nosotros lo hacemos<br/></span>Tu casa a tu modo</h2>
                                <p>En Mueblería JYC, la calidad y la satisfacción del cliente son nuestros pilares fundamentales. Nos esforzamos por ofrecer muebles que no solo embellezcan tus espacios, sino que también perduren en el tiempo. Acompáñanos en este viaje, descubre nuestra historia y encuentra los muebles perfectos para tu hogar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="trabajos" class="services_main">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Trabajos</h2>
                     <span>Aquí tienes muestras de algunos de nuestros trabajos, y la experiencia del cliente!</span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-sm-12">
                  <ul class="nav nav-tabs md-tabs border_none" id="myTabMD" role="tablist">
                     <li class="nav-item lisertab">
                        <a class="nav-link servi_tab active" id="home-tab-md" data-toggle="tab" href="#home-md" role="tab" aria-controls="home-md"
                           aria-selected="true">Echa un vistazo</a>
                     </li>
                  </ul>
                  <div class="tab-content card back_bg" id="myTabContentMD">
                     <div class="tab-pane fade show active" id="home-md" role="tabpanel" aria-labelledby="home-tab-md">
                        <div class="row">
                           <div class="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src={hermosotrabajo} alt="#" />  </figure>
                                    <a href="https://www.facebook.com/photo?fbid=1524838361377701&set=a.103001250228093" target="blank">
                                    <div class="ho_dist">
                                       <span>Hermoso Trabajo!</span>
                                    </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src={genios} alt="#" />  </figure>
                                    <a href="https://www.facebook.com/photo/?fbid=1531717437356460&set=a.103013060226912" target="blank">
                                    <div class="ho_dist">
                                       <span>Genios como siempre!</span>
                                    </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div class="services">
                                 <div class="services_img">
                                    <figure><img src={excelente} alt="#" />  </figure>
                                    <a href="https://www.facebook.com/photo.php?fbid=990545191473690&set=pb.100015546543595.-2207520000&type=3" target="blank">
                                    <div class="ho_dist">
                                       <span>Excelente trabajo!</span>
                                    </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div class="services margin_left60">
                                 <div class="services_img">
                                    <figure><img src={trabajo} alt="#" />  </figure>
                                    <a href="https://www.instagram.com/p/CM7eaEShWM2/" target="blank">
                                    <div class="ho_dist">
                                       <span>Perecto para mi trabajo!</span>
                                    </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-6 margin_top40">
                              <a class="read_more " href="https://www.tiktok.com/@mueblera.jc" target="blank">Mira nuestro TikTok!</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
<div>
      <div class="instants">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6">
                  <div class="titlepage text_align_left">
                     <h2>Quieres un presupuesto?</h2>
                     <p>En Mueblería JYC, estamos aquí para hacer realidad tus sueños de decoración y mobiliario. Solicitar un presupuesto personalizado es el primer paso para llevar a tu hogar la elegancia y comodidad que merece.
                     Pudes incluir cualquier detalle adicional o pregunta que tengas.
                     Nuestro equipo revisará tu mensaje y te proporcionará un presupuesto personalizado, teniendo en cuenta tus elecciones y requisitos específicos.
                     </p>
                     <Link to ="/contactus"><a class="read_more" href="#">Contactanos</a></Link>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="instant_img">
                     <figure><img src={pc} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>

     
      
      <script src="../stylesjs/jquery.min.js"></script>
      <script src="../styles/js/bootstrap.bundle.min.js"></script>
      <script src="../stylesjs/custom.js"></script>
      <script src="../styles/js/jquery-3.0.0.min.js"></script>
            </>
    )
    };

export default Index;