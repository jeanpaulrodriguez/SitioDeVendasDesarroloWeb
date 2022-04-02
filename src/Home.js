import React from "react"
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
             className="home__image"
             src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"/> 

            
            <div className="home__row">
               <Product
               id="98"
               title="Apple iPhone 12 Pro Max, azul pacifico 256 GB - desbloqueado (renovado Premium)"
               price={1029.99}
               image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg"
               rating={4}
               />
               <Product
               id="99"
               title="MSI GL66 Laptop para juegos: pantalla FHD 1080p de 15,6 pulgadas, 144Hz FHD, Intel Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD, Win10, negro (11UGK-001)"
               price={1259.00}
               image="https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SL1500_.jpg"
               rating={5}
               />
            </div>

            <div className="home__row">
               <Product
               id="100"
               title="Mouse gamer inalámbrico Razer Basilisk X HyperSpeed: Compatible con Bluetooth e inalámbrico, sensor óptico de 16 K DPI, 6 botones programables, batería de 450 horas"
               price={39.14}
               image="https://m.media-amazon.com/images/I/81W3s4ZWMXL._AC_SL1500_.jpg"
               rating={4}
               />
               <Product
               id="101"
               title="X Rocker RGB Prism Pedestal 2.1 Dual - Silla gamer con luces LED, 33 x 25 x 45 pulgadas, color negro"
               price={196.22}
               image="https://m.media-amazon.com/images/I/81Ma08qYiDL._AC_SL1500_.jpg"
               rating={5}
               />              
               <Product
               id="102"
               title="Fitbit Luxe rastreador de fitness y bienestar con control del estrés, seguimiento del sueño y frecuencia cardíaca 24/7, correas de talla S L incluidas, Lunar White/Soft Gold, 1 unidad"
               price={128.80}
               image="https://m.media-amazon.com/images/I/61zX3Mzqw-L._AC_SL1500_.jpg"
               rating={1}
               /> 
            </div>

            <div className="home__row">
               <Product
               id="103"
               title="SAMSUNG Monitor de juegos ultraancho SJ55W de 34 pulgadas (LS34J550WQNXZA) – Refresh 75Hz Monitor de computadora WQHD, resolución de 3440 x 1440p, respuesta de 4 ms, FreeSync, pantalla dividida, HDMI, negro"
               price={299.99}
               image="https://m.media-amazon.com/images/I/91g-Y1B09EL._AC_SL1500_.jpg"
               rating={5}
               /> 
            </div>

        </div>
        
    </div>
  )
} 

export default Home;