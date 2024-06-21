import React, { useState } from 'react';
import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

const App: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleAddition = () => {
    console.log('Numero 1:', num1);
    console.log('Numero 2:', num2);
    const sum = math.add(math.bignumber(num1), math.bignumber(num2));
    console.log('Soma:', sum);
    setResult(math.format(sum, { notation: 'fixed' }));
  };

  const handleSubtraction = () => {
    console.log('Numero 1:', num1);
    console.log('Numero 2:', num2);
    const difference = math.subtract(math.bignumber(num1), math.bignumber(num2));
    console.log('Diferenca:', difference);
    setResult(math.format(difference, { notation: 'fixed' }));
  };

  const handleMultiplication = () => {
    console.log('Numero 1:', num1);
    console.log('Numero 2:', num2);
    const product = math.multiply(math.bignumber(num1), math.bignumber(num2));
    console.log('Produto:', product);
    setResult(math.format(product, { notation: 'fixed' }));
  };

  const handleDivision = () => {
    console.log('Numero 1:', num1);
    console.log('Numero 2:', num2);
    const quotient = math.divide(math.bignumber(num1), math.bignumber(num2));
    console.log('Quociente:', quotient);
    setResult(math.format(quotient, { notation: 'fixed' }));
  };

  return (
    <div>
      <h1>Operacoes com Math.js</h1>
      <input
        type="text"
        placeholder="N1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="N2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAddition}>Adicao</button>
      <button onClick={handleSubtraction}>Subtracao</button>
      <button onClick={handleMultiplication}>Multiplicacao</button>
      <button onClick={handleDivision}>Divisao</button>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default App;
