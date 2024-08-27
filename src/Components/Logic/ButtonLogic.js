export function numberRender(num, state) {
    const newState = state + num;
    inputers.textContent = newState;
    return newState;
}

export const parseIntToNumber = (num) => {
    const number = parseInt(num, 10);
    return number;
}

export const delString = (value, state) => {
    const deletedNum = value.slice(0, -1);
    state(deletedNum);
}

export const userChooseDivision = (setStateDiv, setStateNumber, num) => {
    setStateDiv(num);
    setStateNumber("");
}

export const userChooseMultiplication = (setStateMult, setStateNumber, num) => {
    setStateMult(num);
    setStateNumber("");
}

export const userChooseSum = (setStateSum, setStateNumber, num) => {
    setStateSum(num);
    setStateNumber("");
}

export const userChooseMin = (setStateMin, setStateNumber, num) => {
    setStateMin(num);
    setStateNumber("");
}

export const userChooseMod = (setStateMod, setStateNumber, num) => {
    setStateMod(num);
    setStateNumber("");
}
