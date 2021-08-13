import React from 'react';
import '../modal/ModalScreen.css';

const ModalScreen = () => {
    return (
        <>
            <div>
                <p className="appName">---- Registro de Actividades.----</p>
                <div className="modalApps-grid">

                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\medicina-btn.svg" alt="medicina"/>
                        </div>
                        <div className="appName">medicina</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\lactancia-btn.svg" alt="lactancia"/>
                        </div>
                        <div className="appName">lactancia</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\pañales-btn.svg" alt="pañales"/>
                        </div>
                        <div className="appName">pañales</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\temperatura-btn.svg" alt="temperatura"/>
                        </div>
                        <div className="appName">temperatura</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\vacunas-btn.svg" alt="vacunas"/>
                        </div>
                        <div className="appName">vacunas</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\siestas-btn.svg" alt="siestas"/>
                        </div>
                        <div className="appName">siestas</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\llanto-btn.svg" alt="llanto"/>
                        </div>
                        <div className="appName">llanto</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\notas-btn.svg" alt="notas"/>
                        </div>
                        <div className="appName">notas</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\resumen-btn.svg" alt="resumen"/>
                        </div>
                        <div className="appName">resumen</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground">
                            <img src="\assets\BW-Resources\btns\visita medica-btn.svg" alt="visita medica"/>
                        </div>
                        <div className="appName">visita medica</div>
                    </div>
                     
                </div>
                <p className="appName">---- Crecimiento / Desarrollo.----</p>
                <div className="modalApps-grid">
                    <div className="modalApps-container">
                        <div className="appBackground2">
                            <img src="\assets\BW-Resources\btns\animales-btn.svg" alt="animales"/>
                        </div>
                        <div className="appName">animales</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground2">
                            <img src="\assets\BW-Resources\btns\colores-btn.svg" alt="colores"/>
                        </div>
                        <div className="appName">colores</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground2">
                            <img src="\assets\BW-Resources\btns\vocales-btn.svg" alt="vocales"/>
                        </div>
                        <div className="appName">vocales</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground2">
                            <img src="\assets\BW-Resources\btns\numeros-btn.svg" alt="numeros"/>
                        </div>
                        <div className="appName">numeros</div>
                    </div>
                    <div className="modalApps-container">
                        <div className="appBackground2">
                            <img src="\assets\BW-Resources\btns\sonidos-btn.svg" alt="sonidos"/>
                        </div>
                        <div className="appName">sonidos</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalScreen
