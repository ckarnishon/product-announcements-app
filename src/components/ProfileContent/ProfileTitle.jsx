import { useRef, useState } from "react";
import * as S from "./profile.style";
import {
  useChangeUserAvatarMutation,
  useChangeUserMutation,
} from "../../redux/Api/Api";

function Profile(props) {
  const [valueName, setValueName] = useState(props.data.name);
  const [familyName, setFamilyName] = useState(props.data.surname);
  const [valueCity, setValueCity] = useState(props.data.city);
  const [phone, setPhone] = useState(props.data.phone);
  const [img, setImg] = useState();

  const fileRef = useRef(null);

  const [changeUser] = useChangeUserMutation();
  const [avatarChange, { data }] = useChangeUserAvatarMutation();

  console.log(data);

  const value = {
    name: valueName,
    surname: familyName,
    phone: phone,
    city: valueCity,
  };

  const ReqChangeData = () => {
    changeUser(value);
  };

  // const handleFils = (e) => {

  // };

  console.log(img);

  const clickInput = () => {
    fileRef.current.click();
  };

  const handleUpload = (e) => {
    setImg(e.target.files);
    const dataForm = new FormData();
    dataForm.append("file", img);
    avatarChange(dataForm);
  };

  const Upload = () => {};

  return (
    <S.MainProfile>
      <S.ProfileContent>
        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
        <S.ProfileSettings>
          <S.SettingsLeft>
            <S.SettingsImg>
              <S.Img src="#" alt="avatar" />
            </S.SettingsImg>

            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              hidden
              onChange={handleUpload}
            />
            <h3 onClick={Upload}> pfuhepbn</h3>
            <S.ChangePhoto onClick={clickInput}>Заменить</S.ChangePhoto>
          </S.SettingsLeft>
          <S.SettingsRight>
            <S.SettingsForm action="#">
              <S.SettingsDiv>
                <S.Label htmlFor="fname">Имя</S.Label>
                <S.SettingsInput
                  id="settings-fname"
                  name="fname"
                  type="text"
                  value={valueName}
                  onChange={(e) => setValueName(e.target.value)}
                />
              </S.SettingsDiv>

              <S.SettingsDiv>
                <S.Label htmlFor="lname">Фамилия</S.Label>
                <S.SettingsInput
                  id="settings-lname"
                  name="lname"
                  type="text"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                />
              </S.SettingsDiv>

              <S.SettingsDiv>
                <S.Label>Город</S.Label>
                <S.SettingsInput
                  id="settings-city"
                  name="city"
                  type="text"
                  value={valueCity}
                  onChange={(e) => setValueCity(e.target.value)}
                />
              </S.SettingsDiv>

              <S.SettingsDiv>
                <S.Label>Телефон</S.Label>
                <S.SettingsInput
                  style={{ width: "614px" }}
                  id="settings-phone"
                  name="phone"
                  min={8}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </S.SettingsDiv>

              <S.SettingsBtn onClick={ReqChangeData} id="settings-btn">
                Сохранить
              </S.SettingsBtn>
            </S.SettingsForm>
          </S.SettingsRight>
        </S.ProfileSettings>
      </S.ProfileContent>
    </S.MainProfile>
  );
}

export default Profile;
