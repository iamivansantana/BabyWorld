import React, { useEffect } from 'react';
import AppsCard from '../appsCard/appsCard';
import Carrusel from '../carrusel/Carrusel';
import './BWInfoUs.css';


const BWInfoUs = () => {

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
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                                uno dos tres cuatro cinco seis siete ocho nueve diez once
                            </div>
                            <div className="slider-item">
                                <div>uno</div>
                                <div>dos</div>
                            </div>
                            <div className="slider-item">3</div>
                            <div className="slider-item">4</div>
                            <div className="slider-item">5</div>
                            <div className="slider-item">6</div>
                            <div className="slider-item">7</div>
                            <div className="slider-item">8</div>
                            <div className="slider-item">9</div>
                            <div className="slider-item">10</div>
                        </Carrusel>
                        <button className="carrusel-btnNext"><img src="\assets\BW-Resources\arrowRight.svg" alt="ArrowRight"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BWInfoUs
