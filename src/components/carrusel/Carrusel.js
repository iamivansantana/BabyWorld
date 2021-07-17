import React, { useEffect } from 'react';
import './Carrusel.css';


const Carrusel = ({ slidesToShow,slidesToScroll,items,arrowPrev,arrowNext, children }) => {

    //useEffect para ejecutar el codigo cada que carga el componente, se ejecuta almenos una vez y despues de crear los elementos html.
    useEffect(() => {

        function isSmallScreen() {
            return window.matchMedia('(max-width: 500px)').matches;
        }
        let slidesToShowValue;
        
        if(isSmallScreen()){
            slidesToShowValue = 1;
        }else{
            // console.log('false')   
            slidesToShowValue = slidesToShow;
        }

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
        window.addEventListener("resize",()=>{

            let itemsChild = document.querySelectorAll(items);

            function isSmallScreen() {
                return window.matchMedia('(max-width: 500px)').matches;
            }
            let slidesToShowValue;
            
            if(isSmallScreen()){
                slidesToShowValue = 1;
            }else{  
                slidesToShowValue = slidesToShow;
            }

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

        //Seleccciona los botones next & prev.
        const Prev = document.querySelector(arrowPrev);
        const Next = document.querySelector(arrowNext);

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
