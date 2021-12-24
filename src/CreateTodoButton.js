import React, { Fragment, useState } from 'react'
import './CreateTodoButton.css';


function CreateTodoButton() {

  const [prueba, setPrueba] = useState("")
  
  return (

    <Fragment>

      <div className='Tittle'>
        <h1 className='tittle-1'>Ingrese su cedula</h1>
      </div>

      <div className='Inputt'>
      <input
      id="nui"
      type="text"
      value={prueba}
      autoComplete="off"
      onChange={() => false}
      />
      </div>

      <div className='Keypad'>
      <div className='Button'>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        1
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        2
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        3
      </button>
      </div>
      
      <div className='Button'>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        4
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        5
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        6
      </button>
      </div>

      <div className='Button'>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        7
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        8
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        9
      </button>      
      </div>

      <div className='Button'>
      <button className="CreateTodoButton" type='button' onClick={() => setPrueba(prueba.slice(0, -1))}>
        Borrar
      </button>
      <button className="CreateTodoButton" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
        0
      </button>
      <button className="CreateTodoButton" type='button' onClick={() => setPrueba(prueba.slice(0, -1))}>
        Continuar
      </button>
      </div>
      </div>
    </Fragment>
    
    
  );
}

export { CreateTodoButton };