import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid style={{ width: "100%" }}>
            <Cell col={3} tablet={12} phone={12}>
              <h1>MÓDULO 1</h1>
              <p>coming out soon!</p>
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid style={{ width: "100%" }}>
            <Cell col={3} tablet={12} phone={12}>
              <h1>MÓDULO 2</h1>
              <p>coming out soon!</p>
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Grid style={{ width: "100%" }}>
            <Cell col={3} tablet={12} phone={12}>
              <h1>MÓDULO 3</h1>
              <p>coming out soon!</p>
            </Cell>
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Módulo 1</Tab>
          <Tab>Módulo 2</Tab>
          <Tab>Módulo 3</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Process;

{
  /**
<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
<CardTitle
  style={{
    color: "black",
    height: "176px",
    background:
      "white url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJ79aOGr6yFpgatGPTg5L5BprrLN4AP0jMg&usqp=CAU) center / cover",
  }}
>
  A Hybrid Mechanism of Horizontal Auto-scaling Based on
  Thresholds and Time Series
</CardTitle>
<CardText>
  This project is the proposal of my Msc degree, and it was
  presented and published at the 2019 IEEE International
  Conference on Systems, Man, and Cybernetics (SMC 2019) in
  Bari, Italy. This project is implemented using triggering
  thresholds and five forecasting models: Drift, Simple
  Exponential Smoothing, Holt, Holt-Winters and ARIMA. The main
  goal of this project is to achieve a better QoS related to the
  cloud computing environment.{" "}
</CardText>
<CardActions border>
  <Button
    href="https://github.com/prpereiras89/hybrid-autoscaling"
    target="_blank"
    colered
  >
    Github
  </Button>
  <Link
    style={{ textDecoration: "none", color: "black" }}
    to="/publications#hybrid-paper"
    colered
  >
    Paper
  </Link>
</CardActions>
<CardMenu style={{ color: "#fff" }}>
  <IconButton name="share" />
</CardMenu>
</Card>
</Cell>

<Cell col={3} tablet={12} phone={12}>

<Card
shadow={5}
tablet={12}
phone={12}
style={{ minWidth: "450", margin: "auto" }}
>
<CardTitle
  style={{
    color: "black",
    height: "176px",
    background:
      "white url(https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/2f5d1f79d631822a5812cd2f620b61105b979e47/4-Figure1-1.png) center / cover",
  }}
>
  Predictor
</CardTitle>
<CardText>
  {" "}
  This project is a tool that uses some forecasting techiniques
  to predict how the phenomenon software aging will increase
  over time. This project was presented and published at the
  2018 IEEE 37th International Performance Computing and
  Communications Conference (IPCCC 2018) with the title of
  Software Rejuvenation in Computer Systems: An Automatic
  Forecasting Approach Based on Time Series.{" "}
</CardText>
<CardActions border>
  <Button
    href="https://github.com/prpereiras89/predictor"
    target="_blank"
    colered
  >
    Github
  </Button>
  <Link
    style={{ textDecoration: "none", color: "black" }}
    to="/publications#predictor"
    colered
  >
    Paper
  </Link>
</CardActions>
<CardMenu style={{ color: "#fff" }}>
  <IconButton name="share" />
</CardMenu>
</Card>
</Cell>
<Cell col={3} tablet={12} phone={12}>

<Card
shadow={5}
tablet={12}
phone={12}
style={{ minWidth: "450", margin: "auto" }}
>
<CardTitle
  style={{
    color: "black",
    height: "176px",
    background:
      "white url(https://i.ytimg.com/vi/oAQ-v7hJKos/maxresdefault.jpg) center / cover",
  }}
>
  Fault Injector
</CardTitle>
<CardText>
  This project is a fault injector to test the availability of
  cloud, fog, and edge computing environments. It also monitors
  to see if the system is up or down.{" "}
</CardText>
<CardActions border>
  <Button
    href="https://github.com/prpereiras89/fault-injector"
    target="_blank"
    colered
  >
    Github
  </Button>
</CardActions>
<CardMenu style={{ color: "#fff" }}>
  <IconButton name="share" />
</CardMenu>
</Card> */
}
