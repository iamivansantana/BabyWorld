import React, { useEffect } from 'react';
import AppsCard from '../appsCard/appsCard';
import Carrusel from '../carrusel/Carrusel';
import Feed from '../feed/Feed';
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
                     seas un excelente papá / mamá para tu bebé.
                    </p>
                    <h4>Registro de Actividades.</h4>  
                      
                    <div className="bwApps-grid ">

                        <AppsCard 
                            img={'medicina'}
                            desc={'Lleva un registro y recordatorio del medicamento de tu bebé.'}
                            color={'Uno'}
                        />
                        <AppsCard 
                            img={'lactancia'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé.'}
                            color={'Dos'}
                        />
                        <AppsCard 
                            img={'pañales'}
                            desc={'Lleva el registro de los cambios de pañales de tu bebé.'}
                            color={'Tres'}
                        />
                        <AppsCard 
                            img={'temperatura'}
                            desc={'Lleva el registro de la temperatura de tu bebé.'}
                            color={'Cuatro'}
                            />
                        <AppsCard 
                            img={'vacunas'}
                            desc={'Crea un calendario con recordatorio de las vacunas de tu bebé.'}
                            color={'Cinco'}
                            />
                        <AppsCard 
                            img={'siestas'}
                            desc={'Lleva un registro de las siestas que toma tu bebé'}
                            color={'Seis'}
                            />
                        <span className="bwApp-hiden-on ">
                        <AppsCard 
                            img={'llanto'}
                            desc={'Lleva un registro del tiempo de llanto a tu bebé'}
                            color={'Siete'}
                            />
                        <AppsCard 
                            img={'notas'}
                            desc={'Crea notas, recordatorios, etc. y visualizalos facilmente.'}
                            color={'Ocho'}
                            />
                        <AppsCard 
                            img={'resumen'}
                            desc={'Crea un resumen descargable con estadisticas de los datos registrados de tu bebé.'}
                            color={'Nueve'}
                            />
                            
                        <AppsCard 
                            img={'visita medica'}
                            desc={'Enlista las visitas medicas anteriores y futuras de tu bebé.'}
                            color={'Diez'}
                            />
                            </span>
                    </div>
                    <h2 className="apps-toggle">Ver todo...</h2>
                    <h4>Aprendizaje.</h4>  
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
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\animales-btn.svg" alt="Animales"/></div>
                                    <div className="tittle-item">Animales:</div>
                                    <div className="description-item">Enseña a tu bebé los nombres y sonidos de los animales. </div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\colores-btn.svg" alt="coloresBtn"/></div>
                                    <div className="tittle-item">Colores:</div>
                                    <div className="description-item">Ayuda con la enseñanza de los colores a tu bebé</div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\vocales-btn.svg" alt="vocalesBtn"/></div>
                                    <div className="tittle-item">Vocales:</div>
                                    <div className="description-item">Enseña el sonido y forma de las vocales a tu bebé</div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\numeros-btn.svg" alt="numerosBtn"/></div>
                                    <div className="tittle-item">Numeros:</div>
                                    <div className="description-item">Enseña los numeros a través del sonido y su forma.</div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-container">
                                    <div className="img-item"><img src="\assets\BW-Resources\btns\sonidos-btn.svg" alt="sonidosBtn"/></div>
                                    <div className="tittle-item">Sonidos:</div>
                                    <div className="description-item">Enseña a tu bebé diferentes sonidos del mundo real.</div>
                                </div>
                            </div>
                        </Carrusel>
                        <button className="carrusel-btnNext"><img src="\assets\BW-Resources\arrowRight.svg" alt="ArrowRight"/></button>

                    
                    </div>
                        <Feed />
                </div>
            </div>
        </>
    )
}

export default BWInfo
