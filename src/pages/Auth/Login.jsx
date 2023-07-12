import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useUserLoginMutation } from "../../redux/Api/Api";
import { setUser } from "../../redux/Slises/tokenSlise";

import * as  S from "./auth.style";
import logo from "../../img/logo_modal.png";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [log, setLog] = useState('');
  const [pass, setPass] = useState("");

  const userData = {
    email: log,
    password: pass,
  };

  const [login, { data, isLoading }] = useUserLoginMutation();

  const OnLogin = () => {
    login(userData);
  }

 
  useEffect(() => {
    if (data) {
       dispatch(
         setUser({
           accessToken: data.access_token,
           refreshToken: data.refresh_token,
           tokenType: data.token_type,
         })
       );
    navigate("/", { replace: true });
    }
  }, [data]);

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src={logo} />
            </S.ModalLogo>
            <S.ModalInput
              type="texemailemailt"
              name="login"
              id="formlogin"
              placeholder="email"
              onChange={(e) => setLog(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              autocomplete="on"
              onChange={(e) => setPass(e.target.value)}
            />
            <S.ModalBtnEnter onClick={OnLogin}>
              {isLoading ? 'Выполняется вход...' : 'Войти'}
            </S.ModalBtnEnter>
            <Link to="/singup">
              <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}

export default Login;
