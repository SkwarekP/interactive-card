import classes from "./CardSubmittedInfo.module.css";

function CardSubmittedInfo(props) {

    const submitHandler = () => {
        props.onContinue(false);
    }

    return (
        <div className={classes.info__container}>
            <div className={classes.approved__circle}></div>
            <div className={classes.approved__text}>
                <header><h1>thank you!</h1></header>
                <p className={classes.under__header}>We've added your card details</p>
                <button onClick={submitHandler} className={classes.confirm__btn}>Continue</button>
            </div>
        </div>
    )
}
export default CardSubmittedInfo;