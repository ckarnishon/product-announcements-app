import * as S from "./search.style";
import logo from "../../img/logo.png";


function Search() {
  return (
    <S.MainSearch>
      <S.SearchLogoLink href="#">
        <S.SearchLogoImg src={logo} alt="logo" />
      </S.SearchLogoLink>
      <S.SearchForm>
        <S.SearchInput
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <S.SearchBtn>Найти</S.SearchBtn>
      </S.SearchForm>
    </S.MainSearch>
  );
}

export default Search;
