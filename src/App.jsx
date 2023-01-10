import { useState } from "react";
import Input from "./components/Input";
import Boton from "./components/Boton";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="bg-primary text-center text-white py-1">Desafío Estado de los componentes y eventos</h1>
      <div className="text-center my-5">
        <Input text="Nombre" type="text" placeholder="Ingrese nombre"/>
        <Input password={password} setPassword={setPassword} text="Contraseña" type="password" placeholder="Ingrese contraseña"/>
        <div className="mt-2">
          {
            password === "252525" && <Boton name={name} password={password} text="Correcto"></Boton>
          }
        </div>
      </div>
    </>
  )
}

export default App;