import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

const handleSum = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2) || num1 === '' || num2 === '') {
        alert('숫자만 입력할 수 있습니다.');
        return;
    }
    setResult(n1 + n2);
};

const handleMinus = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2) || num1 === '' || num2 === '') {
        alert('숫자만 입력할 수 있습니다.');
        return;
    }
    setResult(n1 - n2);
};

  return (
    <div>
      <input
        type="text"
        value={num1}
        placeholder="첫 번째 숫자"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        value={num2}
        placeholder="두 번째 숫자"
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={handleSum}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >더하기</button>
        <button onClick={handleMinus}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >빼기</button>
      </div>
      <p>결과: {result}</p>
    </div>
  );
}

export default Calculator;