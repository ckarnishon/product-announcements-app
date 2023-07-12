import { useAuth } from "../../redux/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ProfileTitle from "../../components/ProfileContent/ProfileTitle";
import MyProducts from "../../components/Products/MyProducts";
import * as S from "./profile.style";
import { useGetUserQuery } from "../../redux/Api/Api";

function Profile() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const { isAuth } = useAuth();
  // const [user, setUser] = useState({});
  const { data, isSuccess } = useGetUserQuery();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login", { replace: true });
    }
  }, []);

  
  return isSuccess ? (
    <S.Main>
      <S.Container>
        <S.MainCtnterBlock>
          <S.MainH2>Здравствуйте, {data.name}!</S.MainH2>
          <ProfileTitle data={data} />
          <S.TitleH3>Мои товары</S.TitleH3>
        </S.MainCtnterBlock>
        <MyProducts posts={posts} />
      </S.Container>
    </S.Main>
  ) : (
    <S.TitleH3>идент загрузка..</S.TitleH3>
  );
}

export default Profile;
