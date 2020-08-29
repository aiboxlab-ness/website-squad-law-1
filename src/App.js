import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            style={{ fontFamily: "Oxygen, sans-serif" }}
            title={
              <Link
                to="/"
                style={{
                  fontFamily: "Oxygen, sans-serif",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/aboutus">Sobre Nós</Link>
              <Link to="/product">Produto</Link>
              <Link to="/process">Processos</Link>
              <Link to="/artifacts">Artefatos</Link>
              {/*<Link to="/roles">Papéis</Link>*/}
              <Link to="/tools">Ferramentas</Link>
              <Link to="/contact">Contato</Link>
            </Navigation>
          </Header>
          <Drawer
            style={{ fontFamily: "Oxygen, sans-serif" }}
            title={
              <Link
                to="/"
                style={{
                  fontFamily: "Oxygen, sans-serif",
                  color: "rgb(66,66,66)",
                  textDecoration: "none",
                }}
              >
                ArtificiLaw
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutus">Sobre Nós</Link>
              <Link to="/product">Produto</Link>
              <Link to="/process">Processos</Link>
              <Link to="/artifacts">Artefatos</Link>
              {/*<Link to="/roles">Papéis</Link>*/}
              <Link to="/tools">Ferramentas</Link>
              <Link to="/contact">Contato</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
