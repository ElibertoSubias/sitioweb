import { Slideshow, Slide, ContenedorInfo } from "../components/Slideshow";

export default function Contenido() {
    return (
        <>
            <Slideshow/>
            <div id="yoga" className="weyoga">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>How to <strong className="black"> We Do Yogas</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <div className="yogo_three_box">
                                <figure><img src={require("../assets/images/1.png")} alt="#" /></figure>
                                <h3>Ashtanga Yoga</h3>
                                <p>simply dummy text of the printing and typesetting industry. Lorem </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="yogo_three_box">
                                <figure><img src={require("../assets/images/2.png")} alt="#" /></figure>
                                <h3>Hatha Yoga</h3>
                                <p>simply dummy text of the printing
                                    <br></br>and typesetting industry. Lorem </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div className="yogo_three_box">
                                <figure><img src={require("../assets/images/3.png")} alt="#" /></figure>
                                <h3>Kundalini Yoga</h3>
                                <p>simply dummy text of the printing
                                    <br></br>and typesetting industry. Lorem </p>
                            </div>
                        </div>
                        <a className="readmore" href="#">Read More</a>
                    </div>
                </div>
            </div>
            
            
            <div className="yourlifeyoga">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="yogatitle">
                                <h2>Do yoga everyday for great health</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="yoga_img">
                                <figure><img src={require("../assets/images/yoga.png")} alt="#" /></figure>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div id="pricing" className="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Our<strong className="black"> Pricing</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing_box">
                                <h3>Basic</h3>
                                <span>$<strong className="white_bold">40</strong></span>
                                <p>It is a long established fact that a reader will be distracted by the readable</p>
                                <a className="SelectPlan" href="#">Select Plan</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing_box_cross">
                                <h3>Standard</h3>
                                <span>$<strong className="white_bold">50</strong></span>
                                <p>It is a long established fact that a reader will be distracted by the readable</p>
                                <a className="SelectPlan" href="#">Select Plan</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing_box">
                                <h3>Premium</h3>
                                <span>$<strong className="white_bold">60</strong></span>
                                <p>It is a long established fact that a reader will be distracted by the readable</p>
                                <a className="SelectPlan" href="#">Select Plan</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

            

            <div className="Newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="news">
                                <h2>Sign Up For Our Newsletter</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="new_botton">
                                <input className="tetter" placeholder="Your email" type="text" name="Your email"/>
                                <button className="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            

            
            <div id="online" className="yoga">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>The Benefits<strong className="black"> of Yoga Online</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="yoga_box">
                                <figure><img src={require("../assets/images/yogoimg.jpg")} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Contact<strong className="black"> Us</strong></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding">

                                <form className="main_form">
                                    <div className="row">

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" placeholder="Name" type="text" name="Name"/>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" placeholder="Email" type="text" name="Email"/>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" placeholder="Phone" type="text" name="Phone"/>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button className="send">Send</button>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <ul className="mail-icon">
                                                <li><img src={require("../assets/images/phone_icon.png")} /> (+71) 75896472 (+72) 258963475</li>
                                                <li><img src={require("../assets/images/mail_icon.png")} /> Demo@gmail.com</li>

                                            </ul>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <ul className="social_icon">
                                                <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padddd">
                                <div className="map_section">
                                    <div id="map">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </>
    )
}
