import classes from "./App.module.css";
import "./assets/style.css";
import Form from "./components/Form";
import Card from "./components/Card";
import BackCard from "./components/BackCard";
import {useState} from "react";

function App() {

    const [data, setData] = useState(
        {name: "", cardNumber:0, dateMM: 0, dateYY: 0, cvc: 0}
    )

    const receiveDataHandler = (data) => {
        setData(data);
    }
  return (
    <div className={classes.container}>
      <div className={classes.background__top}>
          <div className={classes.card__back}></div>
          <Card data={data}/>
          <div className={classes.card__back__desktop}>
          <BackCard cvc={data.cvc}/>
          </div>
      </div>
    <section className={classes.form__desktop__flex}>
        <Form onReceive={receiveDataHandler}/>
    </section>
    </div>
  );
}

export default App;
