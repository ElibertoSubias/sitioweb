import { useRef, useEffect } from 'react'
import styled from "styled-components"

const Slideshow = () => {

    const slideshow = useRef(null);
    const contenedorMenu = useRef(null);
    const intervaloSlideShow = useRef(null);

    const cargar = (id) => {
        if (slideshow.current.children.length > 0) {

            if (id !== null) {

                const circuloActual = Array.from(contenedorMenu.current.children).find(el => el.id == id);

                if (circuloActual) {
                    Array.from(contenedorMenu.current.children).forEach(cir => cir.classList.remove('active'));
                    circuloActual.classList.add('active');
                }

                let listitems = [];
                for (let i = 0; i < slideshow.current.children.length; i++) {
                    listitems.push(slideshow.current.children[i]);
                }
                listitems.sort(function(a, b) {
                    let compA = a.getAttribute('id').toUpperCase();
                    let compB = b.getAttribute('id').toUpperCase();
                    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
                });
                for (let i = 0; i < listitems.length; i++) {
                    slideshow.current.appendChild(listitems[i]);
                }

                const primerElemento = slideshow.current.children[id];

                if (primerElemento == slideshow.current.children[0]) {
                    return;
                }

                slideshow.current.style.transition = `1000ms ease-out all`;
                const tamañoSlide = slideshow.current.children[0].offsetWidth;
                slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

                
                const transicion = () => {
                    slideshow.current.style.transition = `none`;
                    slideshow.current.style.transform = `translateX(0)`;
                    
                    slideshow.current.insertBefore(primerElemento,slideshow.current.children[0]);
                    
                    slideshow.current.removeEventListener('transitionend', transicion);
                }

                slideshow.current.addEventListener('transitionend', transicion);

            } else {

                const primerElemento = slideshow.current.children[0];

                slideshow.current.style.transition = `1000ms ease-out all`;
                const tamañoSlide = slideshow.current.children[0].offsetWidth;
                slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

                const transicion = () => {
                    slideshow.current.style.transition = `none`;
                    slideshow.current.style.transform = `translateX(0)`;
                    
                    slideshow.current.appendChild(primerElemento);
                    
                    slideshow.current.removeEventListener('transitionend', transicion);

                    const circuloActual = Array.from(contenedorMenu.current.children).find(el => el.id == slideshow.current.children[0].id);

                    if (circuloActual) {
                        Array.from(contenedorMenu.current.children).forEach(cir => cir.classList.remove('active'));
                        circuloActual.classList.add('active');
                    }
                }

                slideshow.current.addEventListener('transitionend', transicion);

            }
            
            

        }
    }

    useEffect(() => {
        intervaloSlideShow.current = setInterval(() => {
            cargar(null);
        }, 6000);

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideShow.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideShow.current = setInterval(() => {
                cargar(null);
            }, 6000);
        });
        contenedorMenu.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideShow.current);
        });

        contenedorMenu.current.addEventListener('mouseleave', () => {
            intervaloSlideShow.current = setInterval(() => {
                cargar(null);
            }, 6000);
        });

    });

    return (
        <ContenedorPrincipal>
            <ContenedorSlideShow ref={slideshow}>
                <Slide id="0">
                    <Imagen src={require("../assets/images/banner1.jpg")} alt="#" />
                    <ContenedorInfo>
                        <h1>
                            Gather<br></br><Strong>New Body Energy</Strong>
                        </h1>
                        <Boton href="#">contact us</Boton>
                    </ContenedorInfo>
                </Slide>
                <Slide id="1">
                    <Imagen src={require("../assets/images/banner2.jpg")} alt="#" />
                    <ContenedorInfo>
                        <h1>
                            Gather<br></br><Strong>New Body Energy</Strong>
                        </h1>
                        <Boton href="#">contact us</Boton>
                    </ContenedorInfo>
                </Slide>
                <Slide id="2">
                    <Imagen src={require("../assets/images/banner3.jpg")} alt="#" />
                    <ContenedorInfo>
                        <h1>
                            Gather<br></br><Strong>New Body Energy</Strong>
                        </h1>
                        <Boton href="#">contact us</Boton>
                    </ContenedorInfo>
                </Slide>
                <Slide id="3">
                    <Imagen src={require("../assets/images/banner4.jpg")} alt="#" />
                    <ContenedorInfo>
                        <h1>
                            Gather<br></br><Strong>New Body Energy</Strong>
                        </h1>
                        <Boton href="#">contact us</Boton>
                    </ContenedorInfo>
                </Slide>
            </ContenedorSlideShow>
            <ContenedorControles ref={contenedorMenu}>
                <li data-target="#myCarousel" onClick={() => cargar(0)} id="0" className="active"></li>
                <li data-target="#myCarousel" onClick={() => cargar(1)} id="1"></li>
                <li data-target="#myCarousel" onClick={() => cargar(2)} id="2"></li>
                <li data-target="#myCarousel" onClick={() => cargar(3)} id="3"></li>
            </ContenedorControles>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`

    position: relative;
    min-height: inherit;
    min-height: 100vh;
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
const ContenedorSlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;
const ContenedorControles = styled.ol`

    top: 53%;
    width: 20px;
    display: block;
    position: absolute;
    right: 0;
    bottom: 10px;
    z-index: 15;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;

    li {
        margin: 8px 0;
        width: 20px;
        height: 20px;
        border-radius: 11px;
        background-color: #070000;
    }

    li.active {
        background-color: #35a30a;
    }

`;
const ContenedorInfo = styled.div`

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
    text-align: left !important;
    right: 15%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    padding-right: 0px;
    padding-left: 0px;

    h1 {
        color: #35a30a;
        font-size: 124px;
        line-height: 120px;
        font-weight: 500;
        padding-bottom: 85px;
        letter-spacing: 0;
        position: relative;
        padding: 0 0 10px 0;
        margin: 0;
    }

    @media (min-width: 1200px) and (max-width: 1500px) {
        h1 {
            font-size: 64px;
            line-height: 80px;
            padding-bottom: 36px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px){

        top: 64%;
        h1 {
            font-size: 65px;
            line-height: 70px;
            padding-bottom: 56px;
        }

    }

    @media (min-width: 992px) and (max-width: 1199px) {
        
        top: 64%;

    }

    @media (min-width: 768px) and (max-width: 991px) {
        h1 {
            font-size: 65px;
            line-height: 70px;
            padding-bottom: 56px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        
        h1 {
            font-size: 41px;
            line-height: 47px;
            padding-bottom: 56px;
        }
    }

    @media (max-width: 575px) {
        h1 {
            font-size: 42px;
            line-height: 46px;
            padding-bottom: 51px;
            padding-top: 14px;
        }
    }

    @media (max-width: 575px) {
        h1 {
            font-size: 42px;
            line-height: 46px;
            padding-bottom: 51px;
            padding-top: 14px;
        }
    }
    
`;
const Slide = styled.div`

    min-width: 100%;
    overflow: hidden;
    transform: matrix().3s ease all;
    z-index: 9;
    position: relative;
    img {
        width: 100%;
        vertical-align: top;
    }

    @media screen and (max-width:700px) {

    }
`;
const Strong = styled.strong`

    color: #000000;
    font-weight: 500;

`;
const Imagen = styled.img`

    width: 100%;
    max-width: 100%;
    height: auto;

`;
const Boton = styled.a`

    display: block;
    background: ${props => (props.colorfondo ? props.colorfondo : '#fff')};
    color: ${props => (props.colortexto ? props.colortexto : '#050000')};
    max-width: 230px;
    padding: 12px 0px;
    width: 100%;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    border: #35a30a solid 1px;
    text-decoration: none !important;
    outline: none !important;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;

    :hover {
        background: #58c62c;
        color: #fff;
    }

`;

export { Slideshow, Slide, ContenedorInfo };