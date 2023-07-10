import { useState } from "react";
import Addads from "../Modal/Addads"
import { Link } from "react-router-dom";

import * as S from "./header.style";

function HeaderAll() {
  const [newAdver, setNewAdver] = useState(false);
  const ShownNewAdver = () => {
    setNewAdver(!newAdver);  
  } 
  
  return (
    <S.Header>
      <S.HeaderNav>
        <S.BtnNewAdver onClick={ShownNewAdver}>
          Разместить объявление
        </S.BtnNewAdver>
        <Link to="/profile">
          <S.BtnPersoAccon> Личный кабинет</S.BtnPersoAccon>
        </Link>
      </S.HeaderNav>
      {newAdver && <Addads setNewAdver={setNewAdver} />}
    </S.Header>
  );
}

export default HeaderAll;
