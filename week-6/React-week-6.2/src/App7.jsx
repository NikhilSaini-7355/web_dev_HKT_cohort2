// if there is a parent component that rerenders then all of it's children components . grandchildren components, grandgrandhildren components ,so on, also rerendered 
// this can be stopped by React.memo()
// React.memo() lets you skip rerendering a component when it's props are unchanged
// memoized components only rerender when the value of their props change or change in the state variables defined inside them

// useMemo() hook is used to memoize the data(primitive data) or to do any operation that remains same across several rerenders and return a primitive value, and hence wrapped inside useMemo() so that it remains same across several rerenders and operates or runs only when things in the dependency array change 
// useCallback() hook is used to memoize the reference datatypes like arrays,objects,functions,etc. or to do any operation that remains same across several rerenders and return a reference datatyype value or does not return anything ,and hence wrapped inside useCallback() so that it remains same across several rerenders and operates or runs only when things in the dependency array change 
// useMemo() and useCallback() are several times used along with React.memo()



import { useCallback, useEffect, useMemo, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    })
  }, [])

  const cryptoReturns = useMemo(()=>{
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data]) 


  const calculateCryptoReturns = useCallback(()=>{
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data])
  
  const incomeTax = (cryptoReturns + bankData.income+ calculateCryptoReturns()) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App