function Counter() {
  //const [count, setCount] = useState(0);
  // count: 현재 숫자 상태
  // setCount: count를 변경하는 함수
  let count = 0;
  const handleIncrease = () => {
    count = count + 1;
    // 이전 값(prev)을 안전하게 참조해서 +1
  };

  return (
    <div>
      <h1>{count} 번 눌렀다! ✨</h1>
      <button onClick={handleIncrease}>카운트 올리기</button>
    </div>
  );
}

export default Counter;
