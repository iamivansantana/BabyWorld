import React from 'react';
import './BWTarget.css';

const BWTargetNames = () => {
    return (
        <>
            <div className="targetContainer">
                {/* <div style={{ color: '#d0d7e0'}}>______________________________________________</div> */}
                <div className="targetType"><img src="\assets\BW-Resources\icons\ghostType-icon.svg" alt="gost-type"/> Nombres. </div>
                <div className="targetBody">
                    <div className="targetHead">
                        <div className="targetHeadName">Iván</div>
                        <div className="targetheadButton" style={{color:'#d81861'}}>
                            <div className="targetheadButtonLove">
                                <svg className="svg targetSvgLove" xmlns="http://www.w3.org/2000/svg" viewBox="-.8 -1 23 19">
                                    <g id="Capa_2" data-name="Capa 2"><g id="iconos">
                                    <path class="cls-1" d="M14,0A5.54,5.54,0,0,0,9.8,1.94,5.57,5.57,0,0,0,0,5.57c0,7,9.8,11.84,9.8,11.84S19.59,13,19.59,5.57A5.57,5.57,0,0,0,14,0Z"/></g></g>
                                </svg>
                                <span>3285</span>
                            </div>
                            <div>
                                <svg className="svg targetSvgSave" xmlns="http://www.w3.org/2000/svg" viewBox="-.8 -1 16 19">
                                    <g id="Capa_2" data-name="Capa 2"><g id="iconos">
                                        <path class="cls-1" d="M7,10.64a.49.49,0,0,1,.69,0s6.28,6.81,6.74,6.74c.15,0,.25-.23.24-.61V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V16.77c0,.25,0,.53.26.64S7,10.64,7,10.64Z"/></g></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="targetContent">
                        <div>
                            <div style={{ color: '#9c9fa8'}}>Significado:</div>
                            <div>“hombre con bendición divina”.</div>
                            {/* <div>“Si miramos el significado de Iván, podemos darnos cuenta de que el nombre significa “hombre con bendición divina”. Como podemos ver el nombre viene del latín, aunque también tiene algo de influencia búlgara a la hora de realizar la traducción.”.</div> */}
                        </div>
                        <div className="targetDown">
                            <div>
                                <div style={{ color: '#9c9fa8'}}>Origen:</div>
                                <div style={{textAlign:'left'}}>“Latino”.</div> 
                            </div>
                            <div>
                                <div style={{ color: '#9c9fa8'}}>Género:</div>
                                <div>Masculino <img className="targetGeneroIcon" src="\assets\BW-Resources\icons\men-icon.svg" alt="men-icon"/></div>
                                <div>Femenino <img className="targetGeneroIcon" src="\assets\BW-Resources\icons\women-icon.svg" alt="women-icon"/></div>
                                {/* <div>Masculino💙 Femenino 💜</div> */}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="targetLineDown"></div>
            </div>  


            
        </>
    )
}

export default BWTargetNames
