import './index.css'
import ButtonsCalc from '../../Elements/ButtonsDiv'
import { useState } from 'react'
import { numberRender, delString, userChooseDivision, userChooseMin, userChooseMultiplication, userChooseSum, userChooseMod} from '../../Logic/ButtonLogic'
import InputOfCalc from '../../Elements/InputOfCalc'

function CalculatorFragments() {
    const [numbers, setNumber] = useState('')
    const [division, setDivision] = useState('')
    const [multiplication, setMultiplication] = useState("")
    const [min, setMin] = useState("")
    const [plus, setPlus] = useState("")
    const [modulus, setModulus] = useState("")
    
    const resetStates = () => {
      setDivision('');
      setMultiplication('');
      setMin('');
      setPlus('');
      setModulus('');
      setNumber(''); 
    };

    const equality = (functionRun, setNumber, a, b, resetStates) => {
      let result;
      if (functionRun === userChooseDivision) {
          result = a / b;
      } else if (functionRun === userChooseMultiplication) {
          result = a * b;
      } else if (functionRun === userChooseSum) {
          result = a + b;
      } else if (functionRun === userChooseMin) {
          result = a - b;
      } else if (functionRun === userChooseMod) {
          result = a % b;
      }
      setNumber(result.toString());
    };
   
 


    const determineOperation = () => {
        if (division) {
            equality(userChooseDivision, setNumber, parseInt(division), parseInt(numbers));
        } else if (multiplication) {
            equality(userChooseMultiplication, setNumber, parseInt(multiplication), parseInt(numbers));
        } else if (min) {
            equality(userChooseMin, setNumber, parseInt(min), parseInt(numbers));
        } else if (plus) {
            equality(userChooseSum, setNumber, parseInt(plus), parseInt(numbers));
        } else if (modulus) {
            equality(userChooseMod, setNumber, parseInt(modulus), parseInt(numbers));
        }
    }
   
    return (
        <>
            <InputOfCalc value={numbers}></InputOfCalc>
            <div className='barOfButtonCalc'>
                <ButtonsCalc buttonFunction={resetStates}>C</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { userChooseDivision(setDivision, setNumber, numbers) }}>/</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { userChooseMultiplication(setMultiplication, setNumber, numbers) }}>X</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => delString(numbers, setNumber)}>Del</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('7', numbers)) }}>7</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('8', numbers)) }}>8</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('9', numbers)) }}>9</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { userChooseMin(setMin, setNumber, numbers) }}>-</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('4', numbers)) }}>4</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('5', numbers)) }}>5</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('6', numbers)) }}>6</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { userChooseSum(setPlus, setNumber, numbers) }}>+</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('1', numbers)) }}>1</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('2', numbers)) }}>2</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('3', numbers)) }}>3</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { userChooseMod(setModulus, setNumber, numbers) }}>%</ButtonsCalc>
                <ButtonsCalc buttonFunction={() => { setNumber(numberRender('0', numbers)) }}>0</ButtonsCalc>
                <ButtonsCalc>,</ButtonsCalc>
                <ButtonsCalc buttonFunction={determineOperation}>=</ButtonsCalc>
            </div>
        </>
    )
}

export default CalculatorFragments
