import { useSelector } from "react-redux";


import * as S from "./profileSeller.style";
import Products from '../../components/Products/Products'
import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/Api/Api";

function Seller() {
  const [showButPhone, setShowButPhone] = useState(false);

  const sellerInfo = useSelector((state) => state.Seller);

  const { data } = useGetAllProductsQuery();

  const sellerProduct = data.filter(data => data.user_id === sellerInfo.idSeller)
  console.log(sellerProduct);

  const HOST = "http://127.0.0.1:8090/";

  return (
    <S.Main>
      <S.Container>
        <S.MainCtnterBlock>
          <S.MainH2>Профиль продовца</S.MainH2>
          <S.ProfileSell>
            <S.SellContent>
              <S.SellSeller>
                <S.SellerLeft>
                  <S.SellerImg>
                    <S.LeftImg
                      src={HOST + sellerInfo.avatarSeller}
                      alt="avatar"
                    />
                  </S.SellerImg>
                </S.SellerLeft>
                <S.SellerRight>
                  <S.SellerTitle>{sellerInfo.SellerName}</S.SellerTitle>
                  <S.CityInf>{sellerInfo.citySeller}</S.CityInf>
                  <S.CityInf>Продает товары с {sellerInfo.sellsFrom}</S.CityInf>
                  <S.Button onClick={() => setShowButPhone(true)}>
                    Показать телефон
                    <S.Span>
                      {sellerInfo.SellerPhone === null
                        ? "Телефон не указан"
                        : `${sellerInfo.SellerPhone.substr(0, 5)} XXXX-XX`}
                    </S.Span>
                  </S.Button>
                  {showButPhone && (
                    <S.ShowPhone>
                      <S.btnCloseLine onClick={() => setShowButPhone(false)} />
                      <S.text>Телефона продавца:</S.text>
                      <S.SpanPhone>
                        {sellerInfo.SellerPhone === null
                          ? "Телефон не указан"
                          : sellerInfo.SellerPhone}
                      </S.SpanPhone>
                    </S.ShowPhone>
                  )}
                </S.SellerRight>
              </S.SellSeller>
            </S.SellContent>
          </S.ProfileSell>
          <S.TitleH3>Товары продавца</S.TitleH3>
        </S.MainCtnterBlock>
        {sellerProduct.length === 0 ? (
          <h3> Нет товаров... </h3>

        ) : (
          <Products posts={sellerProduct} />
        )}
      </S.Container>
    </S.Main>
  );
}

export default Seller;
