import React from 'react';
import AppsCard from '../appsCard/appsCard';
import './BWInfoUs.css';


const BWInfoUs = () => {
    return (
        <>
            <div className="info-page" id="infoPage">
                <div className="infoPage-content">
                    <h2>BabyWorld Apps.</h2>  
                      
                    <div className="bwApps-grid">

                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé. Lleva un registro del tiempo amamantando a tu bebé'}
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
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                        />
                        <AppsCard 
                            img={'route'}
                            desc={'Lleva un registro del tiempo amamantando a tu bebé'}
                        />
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default BWInfoUs
