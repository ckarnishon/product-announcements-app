
import { Link } from "react-router-dom";


import * as S from "./header.style";

function HeaderMain() {
  return (
    <S.Header>
      <S.HeaderNav>
        <Link to="/login">
          <S.BtnPersoAccon>Вход в личный кабинет</S.BtnPersoAccon>
        </Link>
      </S.HeaderNav>
    </S.Header>
  );
}

export default HeaderMain;
