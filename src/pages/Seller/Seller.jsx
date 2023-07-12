import { useSelector } from "react-redux";


import * as S from "./profileSeller.style";
import Products from '../../components/Products/Products'

function Seller() {
  const sellerInfo = useSelector((state) => state.Seller);

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
                    <S.LeftImg src={sellerInfo} alt="avatar" />
                  </S.SellerImg>
                </S.SellerLeft>
                <S.SellerRight>
                  <S.SellerTitle>{sellerInfo.SellerName}</S.SellerTitle>
                  <S.CityInf>{sellerInfo.citySeller}</S.CityInf>
                  <S.CityInf>Продает товары с {sellerInfo.sellsFrom}</S.CityInf>
                  <S.Button>
                    Показать телефон
                    <S.Span>
                      {sellerInfo.SellerPhone === null
                        ? "Телефон не указан"
                        : `${sellerInfo.SellerPhone.substr(0, 5)} XXXX-XX`}
                    </S.Span>
                  </S.Button>
                </S.SellerRight>
              </S.SellSeller>
            </S.SellContent>
          </S.ProfileSell>
          <S.TitleH3>Товары продавца</S.TitleH3>
        </S.MainCtnterBlock>
        <Products />
      </S.Container>
    </S.Main>
  );
}

export default Seller;
