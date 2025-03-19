import React from 'react';

function InputForm() {
  return (
    <div className="container my-5">
      <h2 className="text-center">Calcular Resultado</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">Primer Valor</label>
          <input type="number" className="form-control" id="input1" placeholder="Ingrese un valor" />
        </div>
        <div className="mb-3">
          <label htmlFor="input2" className="form-label">Segundo Valor</label>
          <input type="number" className="form-control" id="input2" placeholder="Ingrese otro valor" />
        </div>
        <button type="button" className="btn btn-success w-100">Calcular</button>
      </form>
    </div>
  );
}

export default InputForm;
