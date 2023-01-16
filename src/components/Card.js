import classes from "./Card.module.css";

function Card(props) {
    return (
        <div className={classes.card__container}>
            <div className={classes.flex__logos}>
                <div className={classes.white__circle}></div>
                <div className={classes.sm__circle}></div>
            </div>
            <div className={classes.card__number}>
                {/*<span>0000 0000 0000 0000</span>*/}
                {props.data.cardNumber === 0 || props.data.cardNumber === "" || props.data.cardNumber === undefined ?
                    <span>0000 0000 0000 0000</span> : <span>{props.data.cardNumber}</span>}
            </div>
            <div className={classes.flex__names_exp_date}>
                {props.data.name === "" || props.data.name === undefined? <span>Jane Applessed</span> : <span>{props.data.name}</span>}
                {/*<span>00/00</span>*/}
                {(props.data.dateMM === 0 && props.data.dateYY)
                ||
                (props.data.dateMM === "" && props.data.dateYY === "")
                || props.data.dateMM === undefined || props.data.dateYY === undefined ?
                    <span>00/00</span> : <span>{props.data.dateMM}/{props.data.dateYY}</span>}
            </div>
        </div>
    )
}
export default Card;