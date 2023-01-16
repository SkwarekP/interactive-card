import classes from "./App.module.css";
import "./assets/style.css";
import Form from "./components/Form";
import Card from "./components/Card";
import BackCard from "./components/BackCard";
import CardSubmittedInfo from "./components/CardSubmittedInfo";
import {useState} from "react";

function App() {

    const [data, setData] = useState(
        {name: "", cardNumber:0, dateMM: 0, dateYY: 0, cvc: 0}
    )
    const [isSubmitted, setIsSubmitted] = useState(false);

    const receiveDataHandler = (dataReceived, flag) => {
        setData(dataReceived);
        if(flag) {
            setIsSubmitted(true);
        }
    }

    const continueSubmitHandler = (flag) => {
        setIsSubmitted(flag)
    }

  return (
    <div className={classes.container}>
      <div className={classes.background__top}>
          <div className={classes.card__back}>
              {data.cvc === 0 || data.cvc === "" ?
                  <span className={classes.card__back__numbers}>000</span> :
                  <span className={classes.card__back__numbers}>{data.cvc}</span>}
          </div>
          <Card data={data}/>
          <div className={classes.card__back__desktop}>
          <BackCard cvc={data.cvc}/>
          </div>
      </div>
    <section className={classes.form__desktop__flex}>
        {isSubmitted ? <CardSubmittedInfo onContinue={continueSubmitHandler}/> : <Form onReceive={receiveDataHandler}/>}
    </section>
        <div className={classes.attribution}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/SkwarekP">Patryk Skwara</a>.
        </div>
    </div>

  );
}

export default App;
