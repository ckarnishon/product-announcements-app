import { Link } from "react-router-dom";

import * as S from "./maunMenu.style";
import logo from "../../img/logo.png";

function MainMenu() {
  return (
    <S.MainMenu>
      <Link to="/">
        <S.MainImg src={logo} alt="logo" />
      </Link>
      <S.MenuForm>
        <Link to="/">
          <S.MenuBtn>Вернуться на главную</S.MenuBtn>
        </Link>
      </S.MenuForm>
    </S.MainMenu>
  );
}

export default MainMenu;
