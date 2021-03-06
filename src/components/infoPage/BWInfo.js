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
        
        
    });



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
                      
                    <div id="bwApps-grid" className="bwApps-grid " >

                        <AppsCard 
                            img={'medicina'}desc={"\n Usted puede registrar:\n\n  ● Qué cantidad de medicamento, con qué frecuencia y durante cuánto tiempo lo debe tomar su hijo\n\n ● Cómo se debe administrar el medicamento. Por ejemplo: si se toma por boca; se inhala o aspira hacia los pulmones; se introduce en los oídos, los ojos o el recto; o se aplica sobre la piel"}
                            color={'Uno'}
                            flexAreaSide={'flexAreasLeft'}
                        >
                            <div>Lleva un registro y recordatorio del medicamento de tu bebé.</div>
                            <div>Usted puede registrar:</div>
                            <ul style={{textAlign:'justify'}}>
                                <li style={{marginBottom:'15px'}}>El nombre del medicamento y para qué se utiliza.</li>
                                <li style={{marginBottom:'15px'}}>Qué cantidad de medicamento, con qué frecuencia y durante cuánto tiempo lo debe tomar su hijo.</li>
                                <li>Cómo se debe administrar el medicamento.<span style={{color:'#7d8699'}}>(se toma por boca; se inhala o aspira hacia los pulmones; se introduce en los oídos, los ojos o el recto; o se aplica sobre la piel).</span></li>
                            </ul>
                        </AppsCard>
                        <AppsCard 
                            img={'lactancia'}
                            color={'Dos'}
                            flexAreaSide={'flexAreasRigt'}
                        >
                            <div>Lleva un registro sobre la lactancia de tu bebé.</div>
                            <div>Usted puede registrar:</div>
                            <ul style={{textAlign:'justify'}}>
                                <li style={{marginBottom:'15px'}}>El tiempo de alimentacion cronometrado.</li>
                                <li style={{marginBottom:'15px'}}>Tipo de Lactancia.<span style={{color:'#7d8699'}}>(Lactancia materna, lactancia de biberón).</span></li>
                                <li>Cantidad (ml.) en biberon, Recordatorios programados.</li>
                            </ul>
                        </AppsCard>
                        <AppsCard 
                            img={'pañales'}
                            color={'Tres'}
                            flexAreaSide={'flexAreasLeft'}
                        >
                            <div>Lleva el registro de los cambios de pañal de tu bebé.</div>
                            <div>Usted puede:</div>
                            <ul style={{textAlign:'justify'}}>
                                <li style={{marginBottom:'15px'}}>Registrar los cambios de pañales. </li>
                                <li style={{marginBottom:'15px'}}>Indica los diferentes tipos de cambio de pañal .<span style={{color:'#7d8699'}}>(Mojado, popó, ambos).</span></li>
                                <li style={{marginBottom:'15px'}}>Indica color, consistencia, cantidad.</li>
                                <li>Visualiza la cantidad de cambios por día.</li>
                            </ul>
                        </AppsCard>
                        <AppsCard 
                            img={'temperatura'}
                            color={'Cuatro'}
                            flexAreaSide={'flexAreasRigt'}
                        >
                            <div>Registra de los cambios de temperatura de tu bebé.</div>
                            <div>Usted puede:</div>
                            <ul style={{textAlign:'justify'}}>
                                <li style={{marginBottom:'15px'}}>Llevar un control de registro de los cambios de temperatura de su bebé.</li>
                                <li style={{marginBottom:'15px'}}>Guarda la temperatura de tu bebé en °C con hora de registro. </li>
                                <li>Visualiza el historial de registros.</li>
                            </ul>
                        </AppsCard>
                        <span className="bwApp-hiden-on ">
                            <AppsCard 
                                img={'vacunas'}
                                color={'Cinco'}
                                flexAreaSide={'flexAreasLeft'}
                                >
                                <div>Crea un calendario con recordatorio de las vacunas de tu bebé.</div>
                                <div>Usted puede:</div>
                                <ul style={{textAlign:'justify'}}>
                                    <li>Crear un calendario de vacunación para tu bebé.</li>
                                    <li>Programar recordatorios con alarmas.</li>
                                    <li>Visualiza el calendario registrado.</li>
                                </ul>
                            </AppsCard>
                            <AppsCard 
                                img={'siestas'}
                                color={'Seis'}
                                flexAreaSide={'flexAreasRigt'}
                            >
                                <div>Registra el tiempo de las siestas que toma tu bebé.</div>
                                <div>Usted puede:</div>
                                <ul style={{textAlign:'justify'}}>
                                    <li>Llevar el registro de las siestas de tu bebé.</li>
                                    <li>Tomar el tiempo cronometrado de cada siesta.</li>
                                    <li>Visualiza el historial de registros.</li>
                                </ul>
                            </AppsCard>
                            <AppsCard 
                                img={'llanto'}
                                color={'Siete'}
                                flexAreaSide={'flexAreasLeft'}
                            >
                                <div>Lleva un registro del tiempo de llanto a tu bebé.</div>
                                <div>Usted puede:</div>
                                <ul style={{textAlign:'justify'}}>
                                    <li>Llevar el registro del llanto de tu bebé.</li>
                                    <li>Tomar el tiempo cronometrado de cada llanto.</li>
                                    <li>Visualiza el historial de registros.</li>
                                </ul>
                            </AppsCard>
                            <AppsCard 
                                img={'notas'}
                                desc={'Crea notas, recordatorios, etc. y visualizalos facilmente.'}
                                color={'Ocho'}
                                flexAreaSide={'flexAreasRigt'}
                            >
                                <div>Crea notas, recordatorios, etc. y visualizalos facilmente.</div>
                                <div>Usted puede:</div>
                                <ul style={{textAlign:'justify'}}>
                                    <li>Crear notas, listas, recordatorios, etc...</li>
                                    <li>Visualiza todo el contenido registrado.</li>
                                </ul>
                            </AppsCard>
                            <AppsCard 
                                img={'resumen'}
                                desc={'Crea un resumen descargable con estadisticas de los datos registrados de tu bebé.'}
                                color={'Nueve'}
                                flexAreaSide={'flexAreasLeft'}
                            >
                               <div>Crea un resumen descargable con estadisticas de los datos registrados de tu bebé.</div>
                                <div>Usted puede:</div>
                                <ul style={{textAlign:'justify'}}>
                                    <li>Visualiza estadisticas de todo el contenido registrado.</li>
                                    <li>Visualiza estadisticas individuales del contenido registrado.</li>
                                    <li>Descargar el resumen de estadisticas en archivo PDF.</li>
                                </ul> 
                            </AppsCard>
                                
                            <AppsCard 
                                img={'visita medica'}
                                desc={'Enlista las visitas medicas anteriores y futuras de tu bebé.'}
                                color={'Diez'}
                                flexAreaSide={'flexAreasRigt'}
                            >
                                 <div>Enlista las visitas médicas anteriores y futuras de tu bebé.</div>
                                <div>Usted puede:</div>
                                <ul style={{textAlign:'justify'}}>
                                    <li>Crear un calendario de visitas médicas.</li>
                                    <li>Programar recordatorios con alarmas.</li>
                                    <li>Visualiza el calendario registrado.</li>
                                </ul>
                            </AppsCard>
                        </span>
                    </div>
                    <h2 className="apps-toggle" style={{marginTop:'-20px'}}>Ver todo...</h2>


                    <h4 style={{marginTop:'60px'}}>Aprendizaje.</h4>  
                    <div className="carruselFlexColum" >
                        <div className="display-Flex">
                            <button className="carrusel-btnPrev" id="carrusel-btnPrev"><img src="\assets\BW-Resources\arrowLeft.svg" alt="ArrowRight"/></button>
                            <div className="carrusel-container">
                            
                                {/* Note para el correcto funcionamiento si desea visualizar mas de 4 items debe modificar el width del item en la clase .slider-item. a un porcentaje menor */}
                                <Carrusel 
                                    id={123}
                                    slidesToShow = {4}
                                    slidesToScroll = {1}
                                    items = {'.slider-item'}
                                    arrowPrev = {'carrusel-btnPrev'}
                                    arrowNext = {'carrusel-btnNext'}
                                    puntos = {'carruselPuntos'}
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
                        
                            </div>
                                <button className="carrusel-btnNext" id="carrusel-btnNext"><img src="\assets\BW-Resources\arrowRight.svg" alt="ArrowRight"/></button>
                        </div>
                        <div className="carruselPuntos" id="carruselPuntos"/>
                    </div>


                   
                    
                        <Feed />
                </div>
            </div>
        </>
    )
}

export default BWInfo
