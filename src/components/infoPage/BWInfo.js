import React, { useEffect } from 'react';
import AppsCard from '../appsCard/appsCard';
import Carrusel from '../carrusel/Carrusel';
import './BWInfo.css';


const BWInfo = () => {

    useEffect(() => {
        const appsToggle = document.querySelector('.apps-toggle');
        const bwAppHidenOn = document.querySelector('.bwApp-hiden-on');

        function toggleApps() {
            bwAppHidenOn.classList.toggle("bwApp-hiden-off");
            
            if (appsToggle.textContent === 'Ver todo...') {
                appsToggle.innerHTML = "Ver menos..."
            } else {
                appsToggle.innerHTML = "Ver todo..."
                
            } 
        }

        appsToggle.addEventListener("click",toggleApps);
        
        
    })

    return (
        <>
            <div className="info-page" id="infoPage">
                <div className="infoPage-content">
                    <h2>BabyWorld Apps.</h2>
                    <p className="infoPAge-description">
                    Baby World es una plataforma que te ayudará a lo largo del crecimiento / desarrollo de tú bebé,
                    a través de las apps, herramientas, artículos y más funciones que hemos desarrollado para tí, para que
                     seas un excelente papá / mamá para tu bebé
                    </p>
                    <h4>Registro de Actividades.</h4>  
                      
                    <div className="bwApps-grid ">

                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Uno'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Dos'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Tres'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Cuatro'}
                            />
                        <span className="bwApp-hiden-on ">
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Cinco'}
                            />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Seis'}
                            />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Siete'}
                            />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Ocho'}
                            />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Nueve'}
                            />
                            
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                            color={'Diez'}
                            />
                            </span>
                    </div>
                    <h2 className="apps-toggle">Ver todo...</h2>
                    <h4>Crecimiento/Desarrollo.</h4>  
                    <div className="carrusel-container">
                        <button className="carrusel-btnPrev"><img src="\assets\BW-Resources\arrowLeft.svg" alt="ArrowRight"/></button>
                        {/* Note para el correcto funcionamiento si desea visualizar mas de 4 items debe modificar el width del item en la clase .slider-item. a un porcentaje menor */}
                        <Carrusel 
                            slidesToShow = {4}
                            slidesToScroll = {1}
                            items = {'.slider-item'}
                            arrowPrev = {'.carrusel-btnPrev'}
                            arrowNext = {'.carrusel-btnNext'}
                        >
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\toggleAbout.svg" alt="home"/></div>
                                    <div className="tittle-item">Sonidos:</div>
                                    <div className="description-item">Enseña a tu bebé diferentes sonidos. </div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\colores-btn.svg" alt="home"/></div>
                                    <div className="tittle-item">Colores:</div>
                                    <div className="description-item">Ayuda con la enseñanza de los colores a tu bebé</div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\vocales-btn.svg" alt="home"/></div>
                                    <div className="tittle-item">Vocales:</div>
                                    <div className="description-item">Enseña el sonido y forma de las vocales a tu bebé</div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\numeros-btn.svg" alt="home"/></div>
                                    <div className="tittle-item">Numeros:</div>
                                    <div className="description-item">Enseña los numeros a través del sonido y su forma.</div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\toggleAbout.svg" alt="home"/></div>
                                    <div className="tittle-item">Animales:</div>
                                    <div className="description-item">Description, here is where the description goes</div>
                                </div>
                            </div>
                        </Carrusel>
                        <button className="carrusel-btnNext"><img src="\assets\BW-Resources\arrowRight.svg" alt="ArrowRight"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BWInfo
