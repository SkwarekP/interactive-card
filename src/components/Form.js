import classes from "./Form.module.css";
import {useEffect, useState} from "react";

const cardNumberLimit = 16;
const datesLimit = 2;
const cvcLimit = 3;

    function Form(props) {

    const [nameState, setNameState] = useState({name: "", isValid:false, message: ""})
    const [cardNumberState, setCardNumberState] = useState({cardNumber: "", isValid:false, message: ""});
    const [dateMMState, setDateMMState] = useState({dateMM: "", isValid:false, message: ""});
    const [dateYYState, setDateYYState] = useState({dateYY: "", isValid:false, message: ""});
    const [cvcState, setCVCState] = useState({cvc: "", isValid:false, message: ""});
    const [isSubmitted, setIsSubmitted] = useState(false);

    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    function checkFormValidate() {
        let data = {};
        let arrayOfValidates = [];
        let name = document.getElementById("name");
        let cardNumber = document.getElementById("cardNumber");
        let dateMM = document.getElementById("dateMM");
        let dateYY = document.getElementById("dateYY");
        let cvc = document.getElementById("cvc");

        if (nameState.name === "") {
            setNameState({...nameState, isValid: false, message:"Name can't be blank!"});
            arrayOfValidates.push(false);
            name.classList.add(classes.onError);
            name.classList.remove(classes.onFocus);
        }
        else if(/\d/.test(nameState.name)) {
            setNameState({...nameState, isValid: false, message: "Name should contains only letters"})
            arrayOfValidates.push(false);
            name.classList.add(classes.onError);
            name.classList.remove(classes.onFocus);
        }
        else {
            setNameState({...nameState, isValid: true, message: ""});
            data = {...data, name: nameState.name};
            arrayOfValidates.push(true);
            name.classList.add(classes.onFocus);
            name.classList.remove(classes.onError);

        }
        if (cardNumberState.cardNumber === "") {
            setCardNumberState({...cardNumberState, isValid: false, message: "Card number can't be blank"})
            arrayOfValidates.push(false);
            cardNumber.classList.add(classes.onError);
            cardNumber.classList.remove(classes.onFocus);
        }
        else if(cardNumberState.cardNumber.length !==16) {
            setCardNumberState({...cardNumberState, isValid:false, message: "Card number must contains exactly 16 digits, format with no spaces"})
            arrayOfValidates.push(false);
            cardNumber.classList.add(classes.onError);
            cardNumber.classList.remove(classes.onFocus);
        }
        else if(!/^[0-9]+$/.test(cardNumberState.cardNumber)) {
            setCardNumberState({...cardNumberState, isValid:false, message:"Card number must contains only digits"});
            arrayOfValidates.push(false);
            cardNumber.classList.add(classes.onError);
            cardNumber.classList.remove(classes.onFocus);
        }
        else {
            setCardNumberState({...cardNumberState, isValid: true, message: ""})
            data = {...data, cardNumber: parseInt(cardNumberState.cardNumber)};
            arrayOfValidates.push(true);
            cardNumber.classList.add(classes.onFocus);
            cardNumber.classList.remove(classes.onError);
        }
        if (dateMMState.dateMM === "") {
            setDateMMState({...dateMMState, isValid: false, message:"can't be blank"})
            arrayOfValidates.push(false);
            dateMM.classList.add(classes.onError);
            dateMM.classList.remove(classes.onFocus);
        }
        else if(!/^[0-9]+$/.test(dateMMState.dateMM)) {
            setDateMMState({...dateMMState, isValid: false, message:"MM must contains only digits"})
            arrayOfValidates.push(false);
            dateMM.classList.add(classes.onError);
            dateMM.classList.remove(classes.onFocus);
        }
        else if(dateMMState.dateMM.length !==2) {
            setDateMMState({...dateMMState, isValid:false, message:"MM must contains exactly 2 digits"})
            arrayOfValidates.push(false);
            dateMM.classList.add(classes.onError);
            dateMM.classList.remove(classes.onFocus);
        }
        else if(dateMMState.dateMM > 12) {
            setDateMMState({...dateMMState, isValid:false, message:"Not valid month!"})
            arrayOfValidates.push(false);
            dateMM.classList.add(classes.onError);
            dateMM.classList.remove(classes.onFocus);
        }
        else
        {
            setDateMMState({...dateMMState, isValid: true, message: ""})
            data = {...data, dateMM: parseInt(dateMMState.dateMM)}
            arrayOfValidates.push(true);
            dateMM.classList.add(classes.onFocus);
            dateMM.classList.remove(classes.onError);
        }
        if (dateYYState.dateYY === "") {
            setDateYYState({...dateYYState, isValid: false, message: "can't be blank"})
            arrayOfValidates.push(false);
            dateYY.classList.add(classes.onError);
            dateYY.classList.remove(classes.onFocus);
        }
        else if(!/^[0-9]+$/.test(dateYYState.dateYY)) {
            setDateYYState({...dateYYState, isValid:false, message:"YY must contains only digits"})
            arrayOfValidates.push(false);
            dateYY.classList.add(classes.onError);
            dateYY.classList.remove(classes.onFocus);
        }
        else if(dateYYState.dateYY.length!==2) {
            setDateYYState({...dateYYState, isValid:false, message: "YY must contains exactly 2 digits"})
            arrayOfValidates.push(false);
            dateYY.classList.add(classes.onError);
            dateYY.classList.remove(classes.onFocus);
        }
        else {
            setDateYYState({...dateYYState, isValid: true, message: ""})
            data = {...data, dateYY: parseInt(dateYYState.dateYY)}
            arrayOfValidates.push(true);
            dateYY.classList.remove(classes.onError);
            dateYY.classList.add(classes.onFocus);
        }
        if (cvcState.cvc === "") {
            setCVCState({...cvcState, isValid: false, message:"can't be blank"});
            arrayOfValidates.push(false);
            cvc.classList.add(classes.onError);
            cvc.classList.remove(classes.onFocus);
        }
        else if(!/^[0-9]+$/.test(cvcState.cvc)) {
            setCVCState({...cvcState, isValid:false, message: "cvc must contains only digits"});
            arrayOfValidates.push(false);
            cvc.classList.add(classes.onError);
            cvc.classList.remove(classes.onFocus);
        }
        else if(cvcState.cvc.length !==3) {
            setCVCState({...cvcState, isValid: false, message:"cvc must contains only 3 digits"})
            arrayOfValidates.push(false);
            cvc.classList.add(classes.onError);
            cvc.classList.remove(classes.onFocus);
        }
        else {
            setCVCState({...cvcState, isValid:true, message: ""});
            data = {...data, cvc: parseInt(cvcState.cvc)};
            arrayOfValidates.push(true);
            cvc.classList.add(classes.onFocus);
            cvc.classList.remove(classes.onError);
        }

        return {data, arrayOfValidates};
    }

    const focusInputHandler = (e) => {
        e.target.classList.add(classes.onFocus);
    }
    const blurInputHandler = (e) => {
        e.target.classList.remove(classes.onFocus);
    }


    useEffect(() => {
        let isCancelled = false;
        let data = {};

        const handleChange = async () => {
            await timeout(1000)

            if(!isCancelled && !isSubmitted) {
                data = {
                    name: nameState.name,
                    cardNumber: cardNumberState.cardNumber,
                    dateMM: dateMMState.dateMM,
                    dateYY: dateYYState.dateYY,
                    cvc: cvcState.cvc
                }
                props.onReceive(data, false);
            }
        }
        handleChange()
        return () => {
            isCancelled = true;
        }

    }, [nameState.name, cardNumberState.cardNumber, dateMMState.dateMM, dateYYState.dateYY, cvcState.cvc, isSubmitted])


    const submitFormHandler = (e) => {
        e.preventDefault();
        let variable = checkFormValidate();
        if(variable.arrayOfValidates.includes(false)) {
            setIsSubmitted(false);
        }
        else {
            setIsSubmitted(true);
            props.onReceive(variable.data, true);
            setNameState({name: "", isValid: false, message: ""});
            setCardNumberState({cardNumber: "", isValid: false, message: ""});
            setDateMMState({dateMM: "", isValid: false, message: ""});
            setDateYYState({dateYY: "", isValid: false, message: ""});
            setCVCState({cvc: "", isValid: false, message: ""})
        }

        }

    return (
        <div className={classes.form__container}>
            <form onSubmit={submitFormHandler}>
                <div className={classes.inp__container}>
                    <label>cardholder name</label>
                        <input type="text" placeholder="e.g. Jane Appleseed"
                        onChange={(e) => setNameState({...nameState, name:e.target.value})} id="name"
                        value={nameState.name}
                        onFocus={focusInputHandler}
                        onBlur={blurInputHandler}
                        />
                    {nameState.isValid ? "" : <p className={classes.invalid__message}>{nameState.message}</p>}
                </div>
                <div className={classes.inp__container}>
                <label>card number</label>
                    <input type="text" placeholder="e.g. 1234 5678 9132 0000"
                    onChange={(e) => {
                        setCardNumberState({...cardNumberState,cardNumber:e.target.value.slice(0, cardNumberLimit)})
                    }}
                           id="cardNumber"
                           value={cardNumberState.cardNumber}
                           onFocus={focusInputHandler}
                           onBlur={blurInputHandler}
                    />
                    {cardNumberState.isValid ? "" : <p className={classes.invalid__message}>{cardNumberState.message}</p>}
                </div>
                <div className={classes.inp__container}>
                    <label className={classes.dates__label}>exp. date</label>
                    <div className={classes.inp__dates}>
                        <input type="text" placeholder="MM"
                        onChange={(e) => {
                            setDateMMState({...dateMMState,dateMM: e.target.value.slice(0, datesLimit)})
                        }}
                               id="dateMM"
                               value={dateMMState.dateMM}
                               onFocus={focusInputHandler}
                               onBlur={blurInputHandler}
                        />
                        <input type="text" placeholder="YY"
                        onChange={(e) => {
                            setDateYYState({...dateYYState, dateYY: e.target.value.slice(0, datesLimit)})
                        }}
                               id="dateYY"
                               value={dateYYState.dateYY}
                               onFocus={focusInputHandler}
                               onBlur={blurInputHandler}
                        />
                        <input type="text" placeholder="e.g. 123"
                        onChange={(e) => {
                            setCVCState({...cvcState, cvc: e.target.value.slice(0, cvcLimit)})
                        }}
                               id="cvc"
                               value={cvcState.cvc}
                               onFocus={focusInputHandler}
                               onBlur={blurInputHandler}
                        />
                    </div>
                    <div className={classes.invalid__message_container}>
                        {dateMMState.isValid ? "" : <p className={classes.invalid__message}>{dateMMState.message}</p>}
                        {dateYYState.isValid ? "" : <p className={classes.invalid__message}>{dateYYState.message}</p>}
                        {cvcState.isValid ? "" :
                            <p className={classes.invalid__message}>{cvcState.message}</p>
                        }
                    </div>
                </div>
                <button type="submit" className={classes.confirm__btn}>Confirm</button>
            </form>
        </div>
    )
}

export default Form;