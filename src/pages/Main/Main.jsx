import { useState, useEffect } from "react";

import { useGetAllProductsQuery } from "../../redux/Api/Api";

import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import HeaderMain from "../../components/Header/HeaderMain";
import * as S from "./main.style";
import { useAuth } from "../../redux/Hooks/useAuth";
import HeaderAll from "../../components/Header/HederAll";

function Main() {

  const [posts, setPosts] = useState([]);

  const { data } = useGetAllProductsQuery();

  const { isAuth } = useAuth();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <S.Wrapper>
      <S.Container>
       { isAuth ? <HeaderAll/> : <HeaderMain />}
        <S.Main>
          <Search />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <Products posts={posts} />
          </S.MainContainer>
        </S.Main>
     </S.Container>
    </S.Wrapper>
  );
}

export default Main;
