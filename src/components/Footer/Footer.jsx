import * as S from "./footer.style";
import IconHome from "../../img/icon_01.png";
import IconPlus from "../../img/icon_02.png";
import IconProfil from "../../img/icon_03.png";

function footer() {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <S.Img src={IconHome} alt="home" />
        </S.FooterImg>
        <S.FooterImg>
          <S.Img src={IconPlus} alt="home" />
        </S.FooterImg>
        <S.FooterImg>
          <S.Img src={IconProfil} alt="home" />
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
}

export default footer;
