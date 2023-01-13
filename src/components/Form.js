import classes from "./Form.module.css";
import {useEffect, useState} from "react";

const cardNumberLimit = 20;
const datesLimit = 2;
const cvcLimit = 3;
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    function Form(props) {

    const [nameState, setNameState] = useState({name: "", isValid:false, message: ""})
    const [cardNumberState, setCardNumberState] = useState({cardNumber: "", isValid:false, message: ""});
    const [dateMMState, setDateMMState] = useState({dateMM: "", isValid:false, message: ""});
    const [dateYYState, setDateYYState] = useState({dateYY: "", isValid:false, message: ""});
    const [cvcState, setCVCState] = useState({cvc: "", isValid:false, message: ""});
    const [isValidate, setIsValidate] = useState({nameIsValid: true, cardIsValid:true, dateMMIsValid:true, dateYYIsValid:true, cvcIsValid:true})
    let isCancelled = false;
    let data = {}

    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }


    useEffect(() => {
        isCancelled = false;
        const handleChange = async () => {
            await timeout(1000)

            if(!isCancelled) {
                if (nameState.name !== "") {
                    setNameState({...nameState, isValid: true})
                    data = {...data, name: nameState.name}
                } else setNameState({...nameState, isValid: false, message: "name can't be blank"})
                if (cardNumberState.cardNumber !== "" && cardNumberState.cardNumber) {
                    setCardNumberState({...cardNumberState, isValid: true})
                    data = {...data, cardNumber: parseInt(cardNumberState.cardNumber)}
                } else setCardNumberState({...cardNumberState, isValid: false, message: "card number can't be blank"})
                if (dateMMState.dateMM !== "") {
                    setDateMMState({...dateMMState, isValid: true})
                    data = {...data, dateMM: parseInt(dateMMState.dateMM)}
                } else setDateMMState({...dateMMState, isValid: false, message: "date MM can't be blank"})
                if (dateYYState.dateYY !== "") {
                    setDateYYState({...dateYYState, isValid: true})
                    data = {...data, dateYY: parseInt(dateYYState.dateYY)}
                } else setDateYYState({...dateYYState, isValid: false, message: "date YY can't be blank"})
                if (cvcState.cvc !== "") {
                    setCVCState({...cvcState, isValid: true})
                    data = {...data, cvc: parseInt(cvcState.cvc)}
                } else setCVCState({...cvcState, isValid: false, message: "cvc can't be blank"})
                data = {
                    name: nameState.name,
                    cardNumber: cardNumberState.cardNumber,
                    dateMM: dateMMState.dateMM,
                    dateYY: dateYYState.dateYY,
                    cvc: cvcState.cvc
                }
                props.onReceive(data);
            }
        }
        handleChange()
        return () => {
            isCancelled = true;
        }

    }, [nameState.name, cardNumberState.cardNumber, dateMMState.dateMM, dateYYState.dateYY, cvcState.cvc])


    const submitFormHandler = (e) => {
        e.preventDefault();
        if(nameState.isValid && cardNumberState.isValid && dateMMState.isValid && dateYYState.isValid && cvcState.isValid) {
            setIsValidate({nameIsValid: true, cardIsValid: true, dateMMIsValid: true, dateYYIsValid: true, cvcIsValid: true})
            data = {
                name: nameState.name,
                cardNumber: cardNumberState.cardNumber,
                dateMM: dateMMState.dateMM,
                dateYY: dateYYState.dateYY,
                cvc: cvcState.cvc
            }
            console.log(data);
        }
        else {
            setIsValidate({nameIsValid: false, cardIsValid: false, dateMMIsValid: false, dateYYIsValid: false, cvcIsValid: false})
        }
         // if(!nameState.isValid) setIsValidate({...isValidate, nameIsValid: false})
         // if(!cardNumberState.isValid) setIsValidate({...isValidate, cardIsValid: false})
         // if(!dateMMState.isValid) setIsValidate({...isValidate, dateMMIsValid: false})
         // if(!dateYYState.isValid) setIsValidate({...isValidate, dateYYIsValid: false})
         // if(!cvcState.isValid) setIsValidate({...isValidate, cvcIsValid: false})
        }

    return (
        <div className={classes.form__container}>
            <form onSubmit={submitFormHandler}>
                <div className={classes.inp__container}>
                    <label>cardholder name</label>
                        <input type="text" placeholder="e.g. Jane Appleseed"
                        onChange={(e) => setNameState({...nameState, name:e.target.value})}
                        value={nameState.name}/>
                    {isValidate.nameIsValid ? "" : <p style={{color:"red", fontSize:".75rem"}}>{nameState.message}</p>}
                </div>
                <div className={classes.inp__container}>
                <label>card number</label>
                    <input type="number" placeholder="e.g. 1234 5678 9132 0000"
                    onChange={(e) => {
                        setCardNumberState({...cardNumberState,cardNumber:e.target.value.slice(0, cardNumberLimit)})
                    }}
                     value={cardNumberState.cardNumber}
                    />
                    {isValidate.cardIsValid ? "" : <p style={{color:"red", fontSize:".75rem"}}>{cardNumberState.message}</p>}
                </div>
                <div className={classes.inp__container}>
                    <label className={classes.dates__label}>exp. date</label>
                    <div className={classes.inp__dates}>
                        <input type="number" placeholder="MM"
                        onChange={(e) => {
                            setDateMMState({...dateMMState,dateMM: e.target.value.slice(0, datesLimit)})
                        }}
                        value={dateMMState.dateMM}/>
                        {isValidate.dateMMIsValid ? "" : <p style={{color:"red", fontSize:".75rem", display:"block"}}>{dateMMState.message}</p>}
                        <input type="number" placeholder="YY"
                        onChange={(e) => {
                            setDateYYState({...dateYYState, dateYY: e.target.value.slice(0, datesLimit)})
                        }}
                        value={dateYYState.dateYY}/>
                        {isValidate.dateYYIsValid ? "" : <p style={{color:"red", fontSize:".75rem"}}>{dateYYState.message}</p>}
                        <input type="number" placeholder="e.g. 123"
                        onChange={(e) => {
                            setCVCState({...cvcState, cvc: e.target.value.slice(0, cvcLimit)})
                        }}
                        value={cvcState.cvc}
                        />
                        {isValidate.cvcIsValid ? "" : <p style={{color:"red", fontSize:".75rem"}}>{cvcState.message}</p>}
                    </div>
                </div>
                <button type="submit" className={classes.confirm__btn}>Confirm</button>
            </form>
        </div>
    )
}

export default Form;