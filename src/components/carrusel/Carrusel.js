import React, { useEffect } from 'react';
import './Carrusel.css';


const Carrusel = ({ slidesToShow,slidesToScroll,items,arrowPrev,arrowNext, children }) => {

    useEffect(() => {

        function isSmallScreen() {
            return window.matchMedia('(max-width: 500px)').matches;
        }
        let slidesToShowValue;
        
        if(isSmallScreen()){
            // console.log('true')
            slidesToShowValue = 1;
        }else{
            // console.log('false')   
            slidesToShowValue = slidesToShow;
        }

        // //Obtiene la dimencion de la pantalla.
        // const windowWidth = window.screen.width;
        // let slidesToShowValue;
        // if(windowWidth<= 500){
        //     slidesToShowValue = 1;
            
        // }else{
        //     slidesToShowValue = slidesToShow;
        // }



        //obtiene el elemento carrusel
        let carruselContainer = document.querySelector('.carruselContainer');
        let slider = document.querySelector('.slider');
        //Obtiene los items
        let itemsChild = document.querySelectorAll(items);

        //Obtiene los estilos del item
        let itemStyles = document.querySelector(items);
        let elementStyle = window.getComputedStyle(itemStyles);
        let widthItem = elementStyle.getPropertyValue('width');
        let maxWidthItem = elementStyle.getPropertyValue('max-width');
        
        
        
        
        // //Obtiene los estilos del item
        // let itemStyles = document.querySelector(items);
        // let elementStyle = window.getComputedStyle(itemStyles);
        // let widthItem = elementStyle.getPropertyValue('width');

        
        if (itemsChild.length>=slidesToShowValue) {    

            const widthCarrusel = parseFloat(widthItem) * slidesToShowValue+'px';
            const maxWidthCarrusel = parseFloat(maxWidthItem) * slidesToShowValue+'px';
            //Asigna valores al elemento carrusel
            carruselContainer.style.width = widthCarrusel;
            carruselContainer.style.maxWidth = maxWidthCarrusel;
        } else {
            const widthCarrusel = parseFloat(widthItem) * itemsChild.length+'px';
            const maxWidthCarrusel = parseFloat(maxWidthItem) * itemsChild.length+'px';
            //Asigna valores al elemento carrusel
            carruselContainer.style.width = widthCarrusel;
            carruselContainer.style.maxWidth = maxWidthCarrusel;
        }
        

        //Evento que escucha cuando cambia el tamaño de la pantalla
        // window.addEventListener("",()=>{

        // });

        
        // const matchResult = window.matchMedia('(max-width: 500px)');

        // console.log(matchResult);
       

        // mql.addEventListener(screenTest)

        //Evento que escucha cuando cambia el tamaño de la pantalla
        window.addEventListener("resize",()=>{

            
        // //Obtiene los estilos del item
        // let itemStylesVal = document.querySelector(items);
        // let elementStyleval = window.getComputedStyle(itemStylesVal);
        // let widthItemVal = elementStyleval.getPropertyValue('width');
        // const widthItemNum = parseFloat(widthItemVal)*slidesToScroll;

            let itemsChild = document.querySelectorAll(items);
            //Obtiene la dimencion de la pantalla.
            // const windowWidth = window.screen.width;
            
            // let slidesToShowValue;

            function isSmallScreen() {
                return window.matchMedia('(max-width: 500px)').matches;
            }
            let slidesToShowValue;
            
            if(isSmallScreen()){
                // console.log('true')
                slidesToShowValue = 1;
            }else{
                // console.log('false')   
                slidesToShowValue = slidesToShow;
            }

            // if(windowWidth< 501){
            //     slidesToShowValue = 1;
            //     const widthCarrusel = parseFloat(widthItemVal) * slidesToShowValue+'px';
            //     carruselContainer.style.width = widthCarrusel;

            // }else if(windowWidth> 500){
            //     slidesToShowValue = slidesToShow;
            // }

            //Obtiene los estilos del item
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width');
            let maxWidthItem = elementStyle.getPropertyValue('max-width');

            if (itemsChild.length>=slidesToShowValue) {    
                const widthCarrusel = parseFloat(widthItem) * slidesToShowValue+'px';
                const maxWidthCarrusel = parseFloat(maxWidthItem) * slidesToShowValue+'px';
                //Asigna valores al elemento carrusel
                carruselContainer.style.width = widthCarrusel;
                carruselContainer.style.maxWidth = maxWidthCarrusel;
            } else {
                const widthCarrusel = parseFloat(widthItem) * itemsChild.length+'px';
                const maxWidthCarrusel = parseFloat(maxWidthItem) * itemsChild.length+'px';
                //Asigna valores al elemento carrusel
                carruselContainer.style.width = widthCarrusel;
                carruselContainer.style.maxWidth = maxWidthCarrusel;
            }

        });


    //Funcion a los botones next & prev
    const Prev = document.querySelector(arrowPrev);
    const Next = document.querySelector(arrowNext);

    // console.log(Prev, Next);

    Next.addEventListener("click",()=>{
        const widthItemNum = parseFloat(widthItem)*slidesToScroll;
        slider.scrollLeft +=widthItemNum;
    })
    Prev.addEventListener("click",()=>{
        const widthItemNum = parseFloat(widthItem)*slidesToScroll;
        slider.scrollLeft -=widthItemNum;
    })
        
        

    });
    

    return (
        <>
            <div className="carruselContainer">
                <div className="slider">
                    {children} 
                </div>
            </div>
        </>
    )
}

export default Carrusel
