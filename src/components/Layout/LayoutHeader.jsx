import { Outlet } from "react-router-dom";
import * as S from "./layout.style";
import HeaderAll from "../Header/HederAll";
import MainMenu from "../MainMenu/MainMenu";
import { useAuth } from "../../redux/Hooks/useAuth";
import HeaderMain from "../Header/HeaderMain";

function LayoutHeader() {
  const { isAuth } = useAuth();

  return (
    <S.Wrapper>
      <S.Container>
        {isAuth ? <HeaderAll /> : <HeaderMain/>}
        <MainMenu />
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
}

export default LayoutHeader;
