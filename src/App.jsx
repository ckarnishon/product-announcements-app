
import { BrowserRouter } from "react-router-dom";
import * as S from "./stylesApp";
import { AppRoutes } from "./routs/routs";


function App() {
 
  return (
    <BrowserRouter>
      <S.GlobalStyle/>
        <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
