import React, { Component } from "react";
// import Header from "../../components/header/Header";
// import Greeting from "../../containers/greeting/Greeting";
// import Skills from "../../containers/skills/Skills";
// import Footer from "../../components/footer/Footer";
// import TopButton from "../../components/topButton/TopButton";

const DesignStyles = {
  display: "block",
  maxWidth: "1600px",
  margin: "0 auto"
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <img alt="design" style={DesignStyles} width="100%" src={require(`../../assets/design/197499459_753257925348887_9065983798484886948_n.png`)} />
        <img alt="design" style={DesignStyles} width="100%" src={require(`../../assets/design/198709469_2993284834282728_5567266784561756959_n.png`)} />
        <img alt="design" style={DesignStyles} width="100%" src={require(`../../assets/design/198829890_2979752505681533_7593360201138606489_n.png`)} />
        <img alt="design" style={DesignStyles} width="100%" src={require(`../../assets/design/199637576_440337583986891_3187947300306788917_n.png`)} />
        <img alt="design" style={DesignStyles} width="100%" src={require(`../../assets/design/200087697_328336922091626_941398468522586669_n.png`)} />
      </div>
    );
  }
}

export default Home;
