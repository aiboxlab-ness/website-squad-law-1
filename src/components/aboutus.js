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
                  Nossa equipe é formada por engenheiros de software, com diversos backgrounds dentro da tecnologia da informação. Qualquer dúvida sobre o JudLaw ou sugestões, entre em contato com a gente através do LinkedIn.
                </p>
              </div>
              <div style={{ textIndent: "2em" }}>
                <p></p>
              </div>
            </div>

            <div className="components" style={{width: '100%', margin: 'auto'}}>

            <Grid>
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
                        href="https://github.com/caiocesarrm"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-github" aria-hidden="true" style={{marginRight:"10px"}} />
                        Github
                      </Button>
                      <Button
                        href="https://github.com/caiocesarrm"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-linkedin" aria-hidden="true" style={{marginRight:"10px"}} />
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
                        href="https://github.com/diogocaetano"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-github" aria-hidden="true" style={{marginRight:"10px"}} />
                        Github
                      </Button>
                      <Button
                        href="https://www.linkedin.com/in/diogocaetanoalves/"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-linkedin" aria-hidden="true" style={{marginRight:"10px"}} />
                        LinkedIn
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
              </Cell>
              </Grid>

              <Grid>
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
                        href="https://github.com/prpsilva"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-github" aria-hidden="true" style={{marginRight:"10px"}} />
                        Github
                      </Button>
                      <Button
                        href="https://www.linkedin.com/in/paulo-pereira-prps/"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-linkedin" aria-hidden="true" style={{marginRight:"10px"}} />
                        LinkedIn
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
              </Cell>
           

                      
 
              <Cell col={6} tablet={12} phone={12}>
                <Card shadow={5} tablet={12} phone={12} style={{ minWidth: "450", height:"450", margin: "auto" }}>
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
                        href="https://github.com/jcrbsa"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-github" aria-hidden="true" style={{marginRight:"10px"}} />
                        Github
                      </Button>
                      <Button
                        href="https://www.linkedin.com/in/richardson-bruno-889b7944/"
                        target="_blank"
                        colered
                      >
                        <i className="fab fa-linkedin" aria-hidden="true" style={{marginRight:"10px"}} />
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
