import { useNavigate } from "react-router-dom";

import * as S from "./style.buttun";
import EditAds from "../Modal/EditAds";
import { useState } from "react";
import { useDeleteAddProductMutation } from "../../redux/Api/Api";

function BtnChangBox({ info, params }) {
  const navigate = useNavigate();

  console.log(params.id);

  const [deleteAds, { data }] = useDeleteAddProductMutation();

  const [show, setShow] = useState(false);

  const clickDeleteAds = () => {
    deleteAds(params.id);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <S.Button onClick={() => setShow(true)}>
        Редактировать
        <S.Span />
      </S.Button>
      <S.Button onClick={clickDeleteAds}>
        Снять с публиукации
        <S.Span />
      </S.Button>
      {show && <EditAds setShow={setShow} info={info} />}
    </div>
  );
}

export default BtnChangBox;
