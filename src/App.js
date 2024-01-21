import TodoBody from "./component/TodoBody";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App ">
      <Container className="p-5">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-8">
            <TodoBody/>      
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
