import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import * as S from "./auth.style";
import logo from "../../img/logo_modal.png";
import { useUserRegistationMutation } from "../../redux/Api/Api";

function Singup() {
  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");
  const [passTwe, setPassTwe] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  const [registation, { isSuccess }] = useUserRegistationMutation();

  const userData = {
    email: log,
    password: pass,
    name: firstName,
    surname: lastName,
    role: "user",
    phone: "",
    city: city,
  };

  console.log( isSuccess);

  const OnSignup = (e) => {
    e.preventDefault();
    if (pass === passTwe) {
      registation(userData);
      
    } else {
      alert("Пароли не совпадают");
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormPassword>
            <Link to="/">
              <S.ModalLogo>
                <S.ModalLogoImg src={logo} />
              </S.ModalLogo>
            </Link>
            <S.ModalInput
              type="email"
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
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Повторить пароль"
              autocomplete="on"
              onChange={(e) => {
                setPassTwe(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              autocomplete="on"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              autocomplete="on"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              autocomplete="on"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <S.ModalBtnEnter onClick={OnSignup}>
              Зарегистрироваться
              {isSuccess && <Navigate to="/login" replace />}
            </S.ModalBtnEnter>
          </S.ModalFormPassword>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}

export default Singup;
