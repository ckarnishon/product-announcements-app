import { useNavigate } from "react-router-dom";

import * as S from "./products.style";
import { useGetMyProductsQuery } from "../../redux/Api/Api";

function MyProducts() {
  const navigate = useNavigate();
  const HOST = "http://127.0.0.1:8090/";

  const { data, isSuccess } = useGetMyProductsQuery();

  const handleProd = (prod) => {
    navigate(`/myarticle/${prod.id}`, { replace: true });
  };

  if (isSuccess) {
    return data.length === 0 ? (
      <S.CardTitle>Нет объявлений</S.CardTitle>
    ) : (
      <S.MainContent>
        <S.Cards>
          {data?.map((prod) => (
            <S.CardsItem key={prod.id} onClick={() => handleProd(prod)}>
              <S.CardsCard>
                <S.CardImage>
                  <S.Img
                    src={
                      prod.images.length === 0 ? " " : HOST + prod.images[0].url
                    }
                    alt="picture"
                  />
                </S.CardImage>
                <S.CardContent>
                  <S.CardTitle>{prod.title}</S.CardTitle>
                  <S.CardPrice>{prod.price} ₽</S.CardPrice>
                  <S.CardPlace>{prod.user.city}</S.CardPlace>
                  <S.CardDate>{prod.created_on.substr(0, 10)}</S.CardDate>
                </S.CardContent>
              </S.CardsCard>
            </S.CardsItem>
          ))}
        </S.Cards>
      </S.MainContent>
    );
  }
  
}

export default MyProducts;
