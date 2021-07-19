import React, { useEffect } from 'react';
import './Carrusel.css';

//Note para el correcto funcionamiento si desea visualizar mas de 4 items debe modificar el width del item en la clase .slider-item. a un porcentaje menor

const Carrusel = ({ slidesToShow,slidesToScroll,items,arrowPrev,arrowNext, children }) => {

    //useEffect para ejecutar el codigo cada que carga el componente, se ejecuta almenos una vez y despues de crear los elementos html.
    useEffect(() => {

        // Funcion regresa true si la pantalla cumple con el width indicado
        function isSmallScreen() {
            return window.matchMedia('(max-width: 500px)').matches;
        }
        let slidesToShowValue;
        //Si la pantalla es menor a 500px (celular Vertical) solo muestra 1 Item. Si no muestra los Item indicados al crear el componente.
        if(isSmallScreen()){
            slidesToShowValue = 1;
        }else{
            slidesToShowValue = slidesToShow;
        }


        //obtiene los elementos con las clases .carruselContainer y  .slider.
        let carruselContainer = document.querySelector('.carruselContainer');
        let slider = document.querySelector('.slider');
        //Obtiene Todos los items dentro del Componente.
        let itemsChild = document.querySelectorAll(items);

        //Obtiene los estilos del item. (width y maxWidth)
        let itemStyles = document.querySelector(items);
        let elementStyle = window.getComputedStyle(itemStyles);
        let widthItem = elementStyle.getPropertyValue('width'); 
        
        //If else que evalua si los items que están dentro del componente son >= que el valor de items a mostrar (slidesToShowValue) enviado al componente.
        if (itemsChild.length>=slidesToShowValue) {   
            //Si el numero de items dentro del componente es mayor o igual a slidesToShowValue se pueden mostrar correctamente.
            //Obtiene el width y maxWidth para el Carrusel mutiplicando el ancho de cada Item por el total de items a mostrar.
            const widthCarrusel = parseFloat(widthItem) * slidesToShowValue+'px';
            // const maxWidthCarrusel = parseFloat(maxWidthItem) * slidesToShowValue+'px';
            //Asigna valores al elemento carruselContainer.
            carruselContainer.style.width = widthCarrusel;
        } else {
            //De lo contrario se muestran el total de items.
            const widthCarrusel = parseFloat(widthItem) * itemsChild.length+'px';
            //Asigna width al elemento carrusel
            carruselContainer.style.width = widthCarrusel;
        }
        


        //Evento que escucha cuando cambia el tamaño de la pantalla
        window.addEventListener("resize",()=>{

            //Verifica cada vez que cambia el tamaño si se cumple el max-width para visualizar el componente de una manera responsive.
            function isSmallScreen() {
                return window.matchMedia('(max-width: 500px)').matches;
            }
            let slidesToShowValue;
            //Si la pantalla es menor a 500px (celular Vertical) solo muestra 1 Item. Si no muestra los Item indicados al crear el componente.
            if(isSmallScreen()){
                slidesToShowValue = 1;
            }else{  
                slidesToShowValue = slidesToShow;
            }

            //Obtiene los estilos del item. (width y maxWidth) cada vez que cambia el tamaño para visualizar de modo responsive.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width');
            

            if (itemsChild.length>=slidesToShowValue) {    
                const widthCarrusel = parseFloat(widthItem) * slidesToShowValue+'px';
                carruselContainer.style.width = widthCarrusel;
            } else {
                const widthCarrusel = parseFloat(widthItem) * itemsChild.length+'px';
                carruselContainer.style.width = widthCarrusel;
            }

        });

        //Seleccciona los botones next & prev.
        const Prev = document.querySelector(arrowPrev);
        const Next = document.querySelector(arrowNext);

        Next.addEventListener("click",()=>{
            //Obtiene de nuevo los estilos del item. (width) por si hubo algun cambio.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 
            const widthItemNum = parseFloat(widthItem)*slidesToScroll;
            slider.scrollLeft +=widthItemNum;
        })
        Prev.addEventListener("click",()=>{
            //Obtiene de nuevo los estilos del item. (width) por si hubo algun cambio.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 
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