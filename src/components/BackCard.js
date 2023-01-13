import classes from "./BackCard.module.css";

function BackCard(props) {

    return (
        <div className={classes.backcard__container}>
            <div className={classes.backcard__border}>

            </div>
            <div className={classes.backcard__light_border}>
                {props.cvc === 0 || props.cvc === "" || props.cvc === undefined ? <span>000</span> : <span>{props.cvc}</span>}
            </div>
        </div>
    )
}

export default BackCard;