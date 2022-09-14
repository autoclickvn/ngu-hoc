import { memo, useCallback, useState } from 'react';

console.log('ducnh1122');

const add = (x: number) => {
  console.log('ducnh4444444444');
  return x + 1
}


function UseState() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState<boolean>(true);
  const [count2, setCount2] = useState<number>(0);
  // const [count3, setCount3] = useState<number>(0);

  // const add = (x: number) => {
  //   console.log('ducnh4444444444');
  //   return x + 1
  // }


  const add = useCallback((x: number) => {
    console.log('ducnh33333');
    return x + 1
  }, [])

  // console.log('ducnh', count);
  console.log('ducnh2', count2);
  // console.log('ducnh3', count3);

  // useEffect(() => {
  // setCount3(count3 + 1)
  // }, [count3])

  // useEffect(() => {
  //   const x = setTimeout(() => {
  //     console.log('timeouttttt');

  //     setCount(true)
  //   }, 3000)

  //   return () => clearTimeout(x)
  // }, [])


  return (
    <div>
      <p>You clicked {count2} times</p>
      <p>{add(count2)}</p>
      <button onClick={() => {
        // setCount(true)
        setCount2(prev => prev + 1)
        // setCount2(prev => prev + 1)
        // setCount2(prev => prev + 1)
      }}>
        Click me
      </button>
    </div>
  );
}

export default memo(UseState)