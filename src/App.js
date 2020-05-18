import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {

  //definimos la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias ] = useState([]);

  useEffect(()=>{
    //consultamos la API
    const consultarAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=fa75858fb6f34dc88379dfb42aea17ec`
      const respuesta = await fetch(URL)
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  },[categoria])
  return (
    <>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
      </div>
    </>
  );
}

export default App;
