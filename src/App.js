import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContact";

function App() {
  return (
    //  <>
    //   <Login/>
    //  </>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              {/* <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              /> */}
              <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
