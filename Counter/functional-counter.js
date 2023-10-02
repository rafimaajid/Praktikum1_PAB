const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2><strong>{count}</strong></h2>
      <div>
        <button onClick={decreaseCount}>-1</button>
        <button onClick={increaseCount}>+1</button>
      </div>
    </div>
  );
};

ReactDOM.render(<FunctionalCounter />, document.getElementById('functional-counter'));
