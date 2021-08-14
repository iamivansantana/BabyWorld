import React from 'react';
import './BWTarget.css';

const BWTargetNames = () => {
    return (
        <>
            <div className="targetContainer">
                {/* <div style={{ color: '#d0d7e0'}}>______________________________________________</div> */}
                <div className="targetType">🌎 Nombres. </div>
                <div className="targetBody">
                    <div className="targetHead">
                        <div className="targetHeadName">Iván</div>
                        <div style={{color:'#d81861'}}>🤍3285  📃</div>
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
                                <div>Masculino💙</div>
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
