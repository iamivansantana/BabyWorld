import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Carrusel.css';

//Note para el funcionamiento correcto si desea visualizar mas de 4 items debe modificar el width del item en la clase .slider-item. a un porcentaje menor

const Carrusel = ({ id,slidesToShow,slidesToScroll,items,arrowPrev,arrowNext,puntos,children }) => {


    const [scrollL, setScrollL] = useState('spanDot0');

    // Estado de cantidad de dots
    const [tamañoDots, settamañoDots] = useState(0);


    //useEffect para ejecutar el codigo cada que carga el componente, se ejecuta almenos una vez y despues de crear los elementos html.    
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        let carruselContainer = document.querySelector(`#carruselContainer${id}`);
        let slider = document.querySelector(`#slider${id}`);
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


        //Funcion para calcular cantidad de Dots del carrusel
        const sizeDots = () => {
            
            let widthCarrusell;
            if (itemsChild.length < slidesToShowValue) widthCarrusell = parseFloat(widthItem) * itemsChild.length; 
            else widthCarrusell = parseFloat(widthItem) * slidesToShowValue;

            const scrollWidth = slider.scrollWidth;
            const itemWidth = parseFloat(widthItem);
            const resultDots = 1+((scrollWidth-widthCarrusell)/itemWidth);


            return Math.round( resultDots);
        } 

        const tamañoDotsValue =sizeDots();
        settamañoDots(tamañoDotsValue);

        const puntosClass = document.querySelector(`#${puntos}`);
        
        let dotsArray = new Array(sizeDots());//create elements of array
        let result=[];
        for(var i=0;i<dotsArray.length;i++){
            result = [...result,` <span class='1234${id}' id='spanDot${i}'>●</span>`];
        }
        const htmldots = result.reduce((accumulator, currentValue) => accumulator + currentValue);
        puntosClass.innerHTML = htmldots; 


        //Asigna clase activa al renderizar el componente.
        const spans = document.getElementsByClassName(`1234${id}`);
        var arr = Array.prototype.slice.call( spans );

        arr.forEach(element => {

            const resp = element.classList.contains('dotActive');
            if (!resp) element.classList.remove('dotActive');
            if(element.id === scrollL) element.classList.add('dotActive');
        });


        //BOTONES NEXT & PREV.
        //Seleccciona los botones next & prev.
        const Prev = document.querySelector(`#${arrowPrev}`);
        const Next = document.querySelector(`#${arrowNext}`);

        if(!Prev || !Next) return;

        Next.addEventListener("click",()=>{
            //Obtiene de nuevo los estilos del item. (width) por si hubo algun cambio.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 
            const widthItemNum = parseFloat(widthItem)*slidesToScroll;
            slider.scrollLeft +=widthItemNum;
        });

        Prev.addEventListener("click",()=>{
            //Obtiene de nuevo los estilos del item. (width) por si hubo algun cambio.
            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 
            const widthItemNum = parseFloat(widthItem)*slidesToScroll;
            slider.scrollLeft -=widthItemNum;

        });

    });

    useEffect(() => {

        const screenResize = () => {

            //Obtiene Todos los items dentro del Componente.
            let itemsChild = document.querySelectorAll(items);
            //obtiene los elementos con las clases .carruselContainer y  .slider.
            let carruselContainer = document.querySelector(`#carruselContainer${id}`);
            let slider = document.querySelector(`#slider${id}`);


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

            //Funcion para calcular cantidad de Dots del carrusel
            const sizeDots = () => {
                
                let widthCarrusell;
                if (itemsChild.length < slidesToShowValue) widthCarrusell = parseFloat(widthItem) * itemsChild.length; 
                else widthCarrusell = parseFloat(widthItem) * slidesToShowValue;

                const scrollWidth = slider.scrollWidth;
                const itemWidth = parseFloat(widthItem);
                const resultDots = 1+((scrollWidth-widthCarrusell)/itemWidth);
                return Math.round( resultDots);
            } 
        
            let sizeDotsValue = sizeDots();
            
            settamañoDots(sizeDotsValue);
        }

        //Evento que escucha cuando cambia el tamaño de la pantalla
        window.addEventListener("resize",()=>{screenResize()});

    });

    useEffect(() => {
            const puntosClass = document.querySelector(`#${puntos}`);
        
            if(tamañoDots === 0) return;

            let dotsArray = new Array(tamañoDots);//create elements array
            // console.log(dotsArray); //se cre cada vez un array de n elementos pero vacio !!Arreglar....
        
            let result=[]
            for(var i=0;i<dotsArray.length;i++){
            // const numi = i+1;
             result = [...result,` <span class='1234${id}' id='spanDot${i}'>●</span>`];

            }
            // console.log(result);
           const htmldots = result.reduce((accumulator, currentValue) => accumulator + currentValue);
            // console.log(htmldots);
            puntosClass.innerHTML = htmldots; 
    }, [tamañoDots,puntos,id])



    useEffect(() => {
        let slider = document.querySelector(`#slider${id}`);
        
        const dotsActive = ()=>{

            let itemStyles = document.querySelector(items);
            let elementStyle = window.getComputedStyle(itemStyles);
            let widthItem = elementStyle.getPropertyValue('width'); 

            const scrL = slider.scrollLeft;
            const scrnum = Math.round(scrL/parseFloat(widthItem));
            setScrollL('spanDot'+ scrnum);
            // console.log(scrnum);
        }

        //Evento que escucha el scrool del Slider.
        slider.addEventListener("scroll",()=>{dotsActive()});

    });

    // Efecto que agrega clase activo al Dot
    useEffect(() => {

                const spans = document.getElementsByClassName(`1234${id}`);
                var arr = Array.prototype.slice.call( spans );

                arr.forEach(element => {

                    const resp = element.classList.contains('dotActive');
                    if (!resp) element.classList.remove('dotActive');
                    if(element.id === scrollL) element.classList.add('dotActive');
                    
                });

    }, [scrollL,tamañoDots,id]);
    

    return (
        <>
            <div className="carruselContainer" id={`carruselContainer${id}`}>
                <div className="slider" id={`slider${id}`}>
                    {children} 
                </div>
            </div>
        </>
    )
}

export default Carrusel;




Carrusel.propTypes = {
    id: PropTypes.any.isRequired,
    slidesToShow: PropTypes.number.isRequired,
    slidesToScroll: PropTypes.number.isRequired,
    items:PropTypes.string.isRequired,
    arrowPrev: PropTypes.string,
    arrowNext: PropTypes.string,
    puntos: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}

