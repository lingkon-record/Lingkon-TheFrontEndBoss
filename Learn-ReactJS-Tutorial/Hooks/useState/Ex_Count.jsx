function MyComponent() {
  const [count, setCount] = useState(0); // Initial value is 0
  // Here, 'count' is the current state value, and 'setCount' is the function to update it.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
