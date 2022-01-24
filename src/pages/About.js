import styled from "styled-components"

export default function About() {
    return (
        <>
            <ContenedorPrincipal id="about" className="about top_layer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pppp">
                            <div className="about_box">
                                <div className="about_box_text">
                                    <div className="title">
                                        <h2>About <strong className="black"> us</strong></h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumyLorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua con tremum bombe.Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua con tremum bombe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 pppp">

                            <div className="about_box_img">
                                <figure><img src={require("../assets/images/about_img.png")} alt="#" /></figure>

                            </div>
                        </div>
                    </div>
                </div>
            </ContenedorPrincipal>
        </>
    )
}

const ContenedorPrincipal = styled.div`

    position: relative;
    min-height: inherit;
    min-height: 100vh;
    padding-top: 190px;
    padding-bottom: 100px;
    

    @media (min-width: 1200px) and (max-width: 1500px) {

        min-height: inherit;

        h1 {
            font-size: 64px;
            line-height: 80px;
            padding-bottom: 36px;
        }
        
    }

    @media (min-width: 992px) and (max-width: 1199px) {

        min-height: inherit;
    
        h1 {
            font-size: 65px;
            line-height: 70px;
            padding-bottom: 56px;
        }

    }

    @media (min-width: 768px) and (max-width: 991px) {
    
        h1 {
            font-size: 65px;
            line-height: 70px;
            padding-bottom: 56px;
        }

        min-height: inherit;
        padding-top: 128px;

    }

    @media (min-width: 576px) and (max-width: 767px) {
    
        h1 {
            font-size: 41px;
            line-height: 47px;
            padding-bottom: 56px;
        }

        a {
            max-width: 181px;
        }
        
        min-height: inherit;
        padding-top: 137px;

    }

    @media (max-width: 575px) {

        padding-top: 159px;

        h1 {
            font-size: 42px;
            line-height: 46px;
            padding-bottom: 51px;
            padding-top: 14px;
        }

        a {
            max-width: 172px;
        }

        img {
            height: 450px;
        }

    }

`;
