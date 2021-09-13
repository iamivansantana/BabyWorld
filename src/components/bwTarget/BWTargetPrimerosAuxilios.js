import React from 'react'

const BWTargetPrimerosAuxilios = ({id}) => {
    return (
        <>
             <div className="targetContainer">
                <div className="targetType "><img src="\assets\BW-Resources\icons\ghostType-icon.svg" alt="gost-type"/> Primeros Auxilios. </div>
                <div className="targetBody">
                    <div className={`targetHead jumbotronn${id}`}>
                        <div className="targetHeadName targetHeadNameArticle">"Reanimación cardiopulmonar (RCP) en bebés".</div>
                        
                    </div>
                    <div className="targetContent">
                        <div className="targetContentBy">
                            <div style={{ color: '#9c9fa8'}}>Por:</div>
                            <div>Felipe Hernández (Youtube: bbmundo).</div>
                        </div>
                        <div className="targetDownArticle">


                        {/* Video de youtube */}
                        <iframe className="targetVideo" src="https://www.youtube.com/embed/UOJ8TiL6uoU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            

                            {/* Seccion de botones de reaccion y save */}
                            <div className="targetDownButton" style={{color:'#d81861', marginTop:'10px'}}>
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

export default BWTargetPrimerosAuxilios
