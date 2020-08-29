import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import caio from "../image/caio.png";
import diogo from "../image/diogo.jpeg";
import paulo from "../image/paulo.jpeg";
import richardson from "../image/richardson.jpeg";
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


class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid style={{ overflow: "auto" }}>
          <Cell className="about-title" col={12}>
            <h1>Nossa Equipe</h1>
          </Cell>

          <Cell
            className="about-cell-2"
            col={8}
            tablet={12}
            phone={12}
            style={{ margin: "auto" }}
          >
            <div style={{ textIndent: "2em" }}>
              <div style={{ textIndent: "2em" }}>
                <p style={{textAlign:"center"}}>
                  Nossa equipe é formada por engenheiros de software, com diversos backgrounds dentro da tecnologia da informação.
                </p>
              </div>
              <div style={{ textIndent: "2em" }}>
                <p></p>
              </div>
            </div>

            <div className="components" style={{width: '100%', margin: 'auto'}}>

            <Grid style={{ overflow: "auto" }}>
              <Cell col={6} tablet={12} phone={12}>
                <Card shadow={5} tablet={12} phone={12} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "176px", textAlign: "center"}}>
                    <div class="image round" style={{marginTop:"40px"}}>
                      <img className="about-profile-pic" src={caio} alt="Caio" style={{width:"50%", margin: "auto"}} />
                    </div>
                    
                    </CardTitle>
                    <CardText style={{ textAlign: "center", margin:"auto"}}>
                      {" "}
                      <h4 style={{textAlign:"center"}}>Caio</h4>
                      Engenheiro de Software
                      {" "}
                    </CardText>
                    <CardActions border>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        Github
                      </Button>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        LinkedIn
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
              </Cell>
           

                      
 
              <Cell col={6} tablet={12} phone={12}>
                <Card shadow={5} tablet={12} phone={12} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "176px", textAlign: "center"}}>
                    <div class="image round" style={{marginTop:"40px"}}>
                      <img className="about-profile-pic" src={diogo} alt="Diogo" style={{width:"55%", margin: "auto"}} />
                    </div>
                    
                    </CardTitle>
                    <CardText style={{ textAlign: "center", margin:"auto"}}>
                      {" "}
                      <h4 style={{textAlign:"center"}}>Diogo</h4>
                      Engenheiro de Software
                      {" "}
                    </CardText>
                    <CardActions border>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        Github
                      </Button>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        LinkedIn
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
              </Cell>
              </Grid>

              <Grid style={{ overflow: "auto" }}>
              <Cell col={6} tablet={12} phone={12}>
                <Card shadow={5} tablet={12} phone={12} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "176px", textAlign: "center"}}>
                    <div class="image round" style={{marginTop:"40px"}}>
                      <img className="about-profile-pic" src={paulo} alt="Paulo" style={{width:"55%", margin: "auto"}} />
                    </div>
                    
                    </CardTitle>
                    <CardText style={{ textAlign: "center", margin:"auto"}}>
                      {" "}
                      <h4 style={{textAlign:"center"}}>Paulo</h4>
                      Engenheiro de Software
                      {" "}
                    </CardText>
                    <CardActions border>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        Github
                      </Button>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        LinkedIn
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
              </Cell>
           

                      
 
              <Cell col={6} tablet={12} phone={12}>
                <Card shadow={5} tablet={12} phone={12} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "176px", textAlign: "center"}}>
                    <div class="image round" style={{margin:"auto", }}>
                      <img className="about-profile-pic" src={richardson} alt="Richardson" style={{width:"80%", margin: "auto"}} />
                    </div>
                    
                    </CardTitle>
                    <CardText style={{ textAlign: "center", margin:"auto"}}>
                      {" "}
                      <h4 style={{textAlign:"center"}}>Richardson</h4>
                      Engenheiro de Software
                      {" "}
                    </CardText>
                    <CardActions border>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        Github
                      </Button>
                      <Button
                        href="https://github.com/prpereiras89/predictor"
                        target="_blank"
                        colered
                      >
                        LinkedIn
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
              </Cell>
              </Grid>

            </div>
            <Cell
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
              }}
            ></Cell>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutPage;
