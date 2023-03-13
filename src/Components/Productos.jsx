import React from "react";
import { TraerDatos } from "../Funtions/Api";
import "../Styles/Productos.css"

const Personajes = () => {
  const Data = TraerDatos("https://fakestoreapi.com/products");

  console.log(Data);

  return (
    <>
      <div class="container-items">
        {Data != null
          ? Data.map((i) => (
              <div key={i.id}>
                <div className="item">
                  
                  <figure>
                    <img src={i.image} alt="producto" />
                  </figure>

                  <div className="info-product">
                    <h2>{i.title}</h2>
                    <p className="price">${i.price}</p>
                    {/* <span>Categoria: {i.category}</span> */}
                    <span>Disponibles: {i.rating.count}</span>
                    {/* <button>Añadir al carrito</button>
                    <button>Ver producto </button> */}
                  </div>
                
                
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};
export default Personajes;
