import React from "react";
import Particles from "./Particles";
import Boid from "./Boid";
import StackOverflow from "./StackOverflow";
import Cleave from "cleave.js/react";
import anime from "animejs/lib/anime.es.js";
import icon1 from './icons8-chip-card-30.png'

import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaCreditCard
} from "react-icons/fa";

class CreditCard extends React.Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    cardHolderName: "",
    cardExpirationDate: "",
    cardCVC: "",
    cardType: ""
  };
  // Flip card animations
  flipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "180deg",
      duration: "100",
      easing: "linear"
    });
  };
  unFlipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "360deg",
      duration: "100",
      easing: "linear"
    });
  };
  // Helper functions
  setCardType = type => {
    this.setState({ cardType: type });
  };
  checkSubstring = (length, match) => {
    return this.state.cardNumber.substring(0, length) === match;
  };
  // Controlled inputs
  setNumber = e => {
    const cardNumber = e.target.value;
    this.setState({ cardNumber }, () => {
      const { cardNumber } = this.state;
      if (cardNumber[0] === "4") {
        this.setCardType("Visa");
      } else if (this.checkSubstring(4, "6011")) {
        this.setCardType("Discover");
      } else if (this.checkSubstring(2, "51")) {
        this.setCardType("MasterCard");
      } else if (this.checkSubstring(2, "34")) {
        this.setCardType("AmericanExpress");
      } else if (this.checkSubstring(3, "300")) {
        this.setCardType("DinersClub");
      } else if (this.checkSubstring(2, "35")) {
        this.setCardType("JCB");
      } else {
        this.setCardType("");
      }
    });
  };
  setName = e => {
    const cardHolderName = e.target.value.toUpperCase();
    this.setState({ cardHolderName });
  };
  setDate = e => {
    const cardExpirationDate = e.target.value;
    this.setState({ cardExpirationDate });
  };
  setCVC = e => {
    const cardCVC = e.target.value;
    this.setState({ cardCVC });
  };
  render() {
    const {
      cardNumber,
      cardHolderName,
      cardExpirationDate,
      cardCVC,
      cardType
    } = this.state;
    console.log(this.state);
    return (
      <div className="container" src={icon1} style={{
        display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'center',
    // width: '100vw',
    // height: '100vh',
    background: 'transparent',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont',
    fontSize: '18px',
    fontWeight: '200',
    textTransform: 'uppercase',
      }}>
        <div className="credit-card" style={{
          width: '420px',
          margin: '0',
          marginleft: '-35px',
          height: '250px',
          perspective: '1000px',
          backgroundColor: 'transparent',
        }}>
          <div className="credit-card-inner" style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.8s',
            transformstyle: 'preserve-3d',
              transform: 'rotateY(360deg)',
              borderRadius:'40px',
              background: 'linear-gradient(to top right, #0099ff 0%, #ff0866 100%)',
              
            }}>
            <div className="credit-card-front" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }} >
              <div id="card-type" style={{
                textAlign: 'right',
                height: '79px',
                fontSize: '55px',
                right: '33px',
                position: 'relative',
                color: 'white',
    
              }}>
                {cardType === "" && <FaCreditCard />}
                {cardType === "Discover" && <FaCcDiscover />}
                {cardType === "AmericanExpress" && <FaCcAmex />}
                {cardType === "Visa" && <FaCcVisa />}
                {cardType === "DinersClub" && <FaCcDinersClub />}
                {cardType === "JCB" && <FaCcJcb />}
                {cardType === "MasterCard" && <FaCcMastercard />}
              </div>

              <div id="card-number" style={{
                textAlign: 'center',
                height: '20px',
                display: 'inline-block',
                color:'white',
                fontWeight:'200',
                textTransform:'uppercase',
                fontSize:'30px'

              }}>
{cardNumber}</div>

              <div id="card-expiration" style={{position:'relative',
                top:'20px',
                left:'30px'}}>
                {cardExpirationDate !== "" && <div id="validthru" style={{
                  fontSize: '10px',
                  width: '25px',
                  display: 'inline-block',
                  marginTop: '1px',
                  position: 'relative',
    top: '6px',
    right: '10px',
                  
                }}>Valid Thru</div>}
                {cardExpirationDate}
              </div>

              
            </div>
            <div className="credit-card-back">
              <div className="card-stripe" />
              <div className="card-sig-container" style={{
                display:'flex',
                alignItems:'center',
                top: '74px',
                left: '23px',
                position:'relative'
              }}>
                <div className="signature" style={
                  {
                    display:'flex',
                    justifyContent:'right',

                    position:'relative',
                    left:'34px',
                    top:'-35px'


                  }
                }>{cardHolderName}</div>
                CVC {cardCVC}
              </div>
             
            </div>
          </div>
        </div>
        <form className="card-form" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '435px',
          marginTop: '50px',
          textAlign: 'left',
        }}>
          <label className="input-label" >Credit Card Number</label>
          <Cleave style={{
            padding: '15px',
            paddingleft: '0px',
            boxshadow: '0',
            border: '0',
            fontsize: '20px',
            marginbottom: '10px',
            outline: 'none',
            margin: '5px',
            backgroundColor: 'transparent',
            color: 'gray',
            borderBottom: '1px solid #ff0866',
            fontWeight: '100',
          }}
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            id="number-input"
            name="number-input"
            className="text-input"
            onChange={this.setNumber}
          />
          <label className="input-label">Card Holder Name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            value={cardHolderName}
            onChange={e => this.setName(e)}
            className="text-input"
            maxLength="30" style={{
              padding: '15px',
    paddingLeft: '0px',
    boxShadow: '0',
    border: '0',
    fontSize: '20px',
    marginBottom: '10px',
    outline: 'none',
    margin: '5px',
    backgroundColor: 'transparent',
    color: 'gray',
    borderBottom: '1px solid #ff0866',
    fontWeight: '100',
            }}
          />
          <div className="date-and-csv" style={{ display: "flex",
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont',
        fontSize: '25px',
        fontWeight: '200',
        textTransform: 'uppercase',}}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%",
              
            }}
            >
              <label className="input-label" style={{
                color:'black',
                fontSize:'15px',
                marginTop:'10px',
                position:'relative',
                top:'20px',
                left:'20px'
              }}>
                Expiration Date
              </label>
              <Cleave
                options={{
                  date: "true",
                  delimiter: "/",
                  datePattern: ["Y", "m"]
                }}
                placeholder="Enter expiration date"
                value={cardExpirationDate}
                className="text-input"
                onChange={e => this.setDate(e)}
                style={{
                  padding: '15px',
                  
        paddingLeft: '0px',
        boxShadow: '0',
        border: '0',
        fontSize: '20px',
        marginBottom: '10px',
        outline: 'none',
        margin: '5px',
        backgroundColor: 'transparent',
        color: 'gray',
        borderBottom: '1px solid #ff0866',
        fontWeight: '100',}}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="input-label"  style={{
               fontSize:'15px',
               color:'black',
               marginTop:'10px'}} >CVC Security Code</label>
              <Cleave
                options={{
                  numeral: "true"
                }}
                
                maxLength="3"
                value={cardCVC}
                className="text-input"
                onChange={e => this.setCVC(e)}
                onFocus={this.flipCard}
                onBlur={this.unFlipCard} 
                placeHolder="Enter CVC"
                style={{
                  padding: '15px',
                  paddingLeft: '0px',
                  boxShadow: '0',
                  border: '0',
                  fontSize: '20px',
                  marginBottom: '10px',
                  outline: 'none',
                  margin: '5px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  borderBottom: '1px solid #ff0866',
                  fontWeight: '100',
                }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreditCard;
