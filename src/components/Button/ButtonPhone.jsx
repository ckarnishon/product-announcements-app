import * as S from "./style.buttun";

import { useState } from "react";


function ButtunPhone({info}) {
  console.log(info);
  const [showButPhone, setShowButPhone] = useState(false);
 

  return (
    <div>
      <S.Button onClick={() => setShowButPhone(true)}>
        Показать телефон
        <S.Span>
          {info.user.phone === null
            ? "Телефон не указан"
            : `${info.user.phone.substr(0, 5)} XXХ-XX-XX`}
        </S.Span>
      </S.Button>
      {showButPhone && (
        <S.ShowPhone>
          <S.btnCloseLine onClick={() => setShowButPhone(false)} />
          <S.text>Телефона продавца:</S.text>
          <S.SpanPhone>
            {info.user.phone === null ? "Телефон не указан" : info.user.phone}
          </S.SpanPhone>
        </S.ShowPhone>
      )}
    </div>
  ); 
}

export default ButtunPhone;
