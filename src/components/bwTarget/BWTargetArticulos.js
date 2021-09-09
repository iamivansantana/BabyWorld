import React from 'react';
import Carrusel from '../carrusel/Carrusel';

import './BWTarget.css';

const BWTargetArticulos = ({id}) => {


    
    const toggleContent =  () => {

        const targetArticleContent = document.getElementById(id);
        const btnVer = document.querySelector(`#btnVer${id}`);
        const jumbotronn = document.querySelector(`.jumbotronn${id}`);


        const resp = targetArticleContent.classList.contains('articleContentAcive');

        if (resp) {
            targetArticleContent.classList.remove('articleContentAcive');
            btnVer.innerHTML = "Ver menos...";
            
        } else {
            targetArticleContent.classList.add('articleContentAcive');
            btnVer.innerHTML = "... Ver todo.";
            jumbotronn.scrollIntoView({behavior:'smooth'});
        }
        
    }


    return (
        <>
           <div className="targetContainer">
                <div className="targetType "><img src="\assets\BW-Resources\icons\ghostType-icon.svg" alt="gost-type"/> Artículos. </div>
                <div className="targetBody">
                    <div className={`targetHead jumbotronn${id}`}>
                        <div className="targetHeadName targetHeadNameArticle">"¡MESA MALA!, no me le vuleva a pegar al niño".</div>
                        
                    </div>
                    <div className="targetContent">
                        <div className="targetContentBy">
                            <div style={{ color: '#9c9fa8'}}>Por:</div>
                            <div>Alas y  raíces Zhong qi Gong (Chine chi kung).</div>
                            <div>Alas. La vida es como te la cuentas (Spotify).</div>
                        </div>
                        <div className="targetDownArticle">



                            <div id={id} className="targetArticleContent articleContentAcive">
                            {/* <iframe width="100%w" src="https://www.youtube.com/embed/UOJ8TiL6uoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                {/* <div><img src="\assets\BW-Resources\img\mesaMala.jpeg" alt="mesa mala"/></div> */}

                                <div className="carruselFlexColum" >
                                        {/* <button className="carrusel-btnPrev" id="carrusel-btnPrev3"><img src="\assets\BW-Resources\arrowLeft.svg" alt="ArrowRight"/></button> */}
                                    <div className="carrusel-container2">
                                    
                                        {/* Note para el correcto funcionamiento si desea visualizar mas de 4 items debe modificar el width del item en la clase .slider-item. a un porcentaje menor */}
                                        <Carrusel 
                                            id={`target${id}`}
                                            slidesToShow = {1}
                                            slidesToScroll = {1}
                                            items = {'.slider-item-TargetArticulos'}
                                            arrowPrev = {`carrusel-btnPrev${id}`}
                                            arrowNext = {`carrusel-btnNext${id}`}
                                            puntos = {`carruselPuntos${id}`}
                                        >
                                            <div className="slider-item-TargetArticulos">
                                                <div className="slider-item-container-TargetArticulos">
                                                    <img src="\assets\BW-Resources\img\mesaMala.jpeg" alt="mesa mala"/>
                                                </div>
                                            </div>
                                            <div className="slider-item-TargetArticulos">
                                                <div className="slider-item-container-TargetArticulos">
                                                <img src="\assets\BW-Resources\img\mesaMala.jpeg" alt="mesa mala"/>
                                                </div>
                                            </div>
                                            <div className="slider-item-TargetArticulos">
                                                <div className="slider-item-container-TargetArticulos">
                                                    <img src="\assets\BW-Resources\img\mesaMala.jpeg" alt="mesa mala"/>
                                                </div>
                                            </div>
                                        </Carrusel>
                                
                                    </div>
                                        {/* <button className="carrusel-btnNext" id="carrusel-btnNext3"><img src="\assets\BW-Resources\arrowRight.svg" alt="ArrowRight"/></button> */}
                                
                                    <div className="carruselPuntos" id={`carruselPuntos${id}`}/>
                                </div>

                                <div>
                                    <div style={{textAlign:'justify'}}>
                                        <p>
                                        Un niño pequeño se pega con una mesa y mamá (o papá), acude a su encuentro y con voz lastimera le dice: “Pobrecito, esa mesa fea me le pegó, ¡MESA FEA!, ¡MESA MALA!, ¡No me le vuelva a pegar al niño!, ¡PAO, PAO MESA TONTA!, ya mi amor, ya regañé a la mesa”.
                                        <br/><br/>
                                        ¿Algo que no se mueve es el responsable de su dolor?, ¿Que puede esperar del resto del universo?
                                        <br/><br/>
                                        Las personas aprendemos a encarar la vida desde el “victimismo” o desde la “responsabilidad” y ambas posiciones son bien diferentes. El victimismo es un sistema de creencias (generalmente programado por papá y mamá) limitante y dañino que obliga a alguien a sentirse habitualmente perjudicado por situaciones ajenas a él, un sistema que le obliga a creer que todo lo malo que le ocurre es porque el mundo y los demás están en contra suya.  
                                        <br/><br/>
                                        Quienes encaran la vida desde la responsabilidad, entienden que generalmente se tiene el poder para resolver la mayoría de las situaciones que se presentan en la vida. 
                                        <br/><br/>
                                        Ojo, no estoy diciendo que no existan “victimas” reales en el mundo, claro que las hay, hay millones de personas pasándola mal por situaciones sobre las que no han tenido ningún control, basta ver un niño sin hogar para entenderlo, sin embargo eso es muy diferente a criar niños con oportunidades llenos de miedo porque el mundo y los demás siempre le quieren hacer daño.
                                        <br/><br/>
                                        Hay muchas otras formas de educar a un niño en el “victimismo”, otra es quejándose a diario y por cosas intranscendentes delante de ellos, -“¿si mi papá o mi mamá que son los adultos, mis "héroes" y mi principal modelo sobre como "ser" en la vida, se quejan de los difícil que es el mundo, a mí que me esperará?”.
                                        <br/><br/>
                                        Recuerda que los niños pequeños hacen lo que nosotros hacemos y que nos creen todo, la responsabilidad para poner fin a creencias toxicas está en nosotros aquí y ahora. No subestimemos nuestras palabras en sus vidas.
                                        </p>
                                    
                                    </div> 
                                </div>
                            </div>


                            <div id={`btnVer${id}`} className="targetArticleBtnVer" onClick={toggleContent}>... Ver todo.</div>

                            <div className="targetDownButton" style={{color:'#d81861'}}>
                                <div className="targetheadButtonLove">
                                    <svg className="svg targetSvgLove" xmlns="http://www.w3.org/2000/svg" viewBox="-.8 -1 23 19">
                                        <g id="Capa_2" data-name="Capa 2"><g id="iconos">
                                        <path className="cls-1" d="M14,0A5.54,5.54,0,0,0,9.8,1.94,5.57,5.57,0,0,0,0,5.57c0,7,9.8,11.84,9.8,11.84S19.59,13,19.59,5.57A5.57,5.57,0,0,0,14,0Z"/></g></g>
                                    </svg>
                                    <span>8521</span>
                                </div>
                                <div>
                                    <svg className="svg targetSvgSave" xmlns="http://www.w3.org/2000/svg" viewBox="-.8 -1 16 19">
                                        <g id="Capa_2" data-name="Capa 2"><g id="iconos">
                                            <path className="cls-1" d="M7,10.64a.49.49,0,0,1,.69,0s6.28,6.81,6.74,6.74c.15,0,.25-.23.24-.61V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V16.77c0,.25,0,.53.26.64S7,10.64,7,10.64Z"/></g></g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="targetLineDown"></div>
            </div>   
        </>
    )
}

export default BWTargetArticulos
