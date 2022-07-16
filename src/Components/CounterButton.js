import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getNumberOfClicks } from "../reduxFiles/selectors";
import { counteButtonClicked } from "../reduxFiles/actions";
import { lessCounterButtonClicked } from "../reduxFiles/actions";



const numberOfClicksOnLocalStorage = JSON.parse(localStorage.getItem('numberOfClicks') ||'[]');

export const CounterButton = () => {
    
    const dispatch = useDispatch();

    
    //console.log(numberOfClicksOnLocalStorage);

    const numberOfClicks = useSelector(getNumberOfClicks);
    const [incrementBy, setIncrementBy] = useState(1);  
    
    useEffect(() =>{
      localStorage.setItem("numberOfClicks", JSON.stringify(numberOfClicks))
    },[numberOfClicks]) ;
  
    /*
    const [numberOfClicks, setNumberOfClicks] = useState(0);  
      */
    


    //call the state in oreder to get their value

    
    // in redux dixpatch is used to call the action, in this case incrementig by the state used
    
    
    return(
        <>
        <p>you have clicked the button {numberOfClicks} times.</p>
        <label>
            Increment by:
            <input value={incrementBy} onChange= {(e) => {setIncrementBy(Number(e.target.value))}}></input>
        </label>
        <button onClick = {() => { 
            
             dispatch( counteButtonClicked(incrementBy))
            
            }}> Click me</button>
        <button onClick = {() => { dispatch(lessCounterButtonClicked(incrementBy))}}> Click me for less</button>

        </>
    )
}