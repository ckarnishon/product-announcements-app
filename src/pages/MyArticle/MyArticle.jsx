import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/Api/Api";

import * as S from "./myArticle.style";
import { useDispatch } from "react-redux";
import { setSeller } from "../../redux/Slises/sellerSlise";
import { useState } from "react";
import Comments from "../../components/Modal/Сomments";

function MyArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  
  const [showButPhone, setShowButPhone] = useState(false);
  const [showCommentAds, setShowCommentAds] = useState(false);
  const { data, isLoading, isSuccess } = useGetProductQuery(params.id);

  const HOST = "http://127.0.0.1:8090/";
  console.log(data);


  const handleSeller = () => {
    if (isSuccess) {
      console.log();
      dispatch(
        setSeller({
          idSeller: data.user.id,
          SellerName: data.user.name,
          SellerEmail: data.user.email,
          citySeller: data.user.city,
          avatarSeller: data.user.id,
          sellsFrom: data.user.sells_from,
          SellerPhone: data.user.phone,
        })
      );
      navigate("/seller", { replace: true });
    }
  };

  return isLoading ? (
    <S.ArticleTitle>загрузка....</S.ArticleTitle>
  ) : (
    <S.Main>
      <S.MainArtic>
        <S.ArticContent>
          <S.ArticleLeft>
            <S.FillImg>
              <S.ArticleImg>
                <S.Img
                  src={
                    data.images.length === 0 ? " " : HOST + data.images[0].url
                  }
                  alt="product"
                />
              </S.ArticleImg>
              <S.ArticleImgBar>
                {data.images.map((item) => (
                  <S.ImgBarDiv>
                    <S.Img src={HOST+item.url} />
                  </S.ImgBarDiv>
                ))}
              </S.ArticleImgBar>
            </S.FillImg>
          </S.ArticleLeft>
          <S.ArticleRight>
            <S.ArticleBlock>
              <S.ArticleTitle>{data.title}</S.ArticleTitle>
              <S.ArticleInfo>
                <S.ArticleP>{data.created_on.substr(0, 10)}</S.ArticleP>
                <S.ArticleP>{data.user.city}</S.ArticleP>
                <S.ArticleLink onClick={() => setShowCommentAds(true)}>
                  Отзывы
                </S.ArticleLink>
                {showCommentAds && (
                  <Comments
                    setShowCommentAds={setShowCommentAds}
                    params={params}
                  />
                )}
              </S.ArticleInfo>
              <S.PorPrice>{data.price} ₽</S.PorPrice>
              <S.Button onClick={() => setShowButPhone(true)}>
                Показать телефон
                <S.Span>
                  {data.user.phone === null
                    ? "Телефон не указан"
                    : `${data.user.phone.substr(0, 5)} XXХ-XX-XX`}
                </S.Span>
              </S.Button>
              {showButPhone && (
                <S.ShowPhone>
                  <S.btnCloseLine onClick={() => setShowButPhone(false)} />
                  <S.text>Телефона продавца:</S.text>
                  <S.SpanPhone>
                    {data.user.phone === null
                      ? "Телефон не указан"
                      : data.user.phone}
                  </S.SpanPhone>
                </S.ShowPhone>
              )}
              <S.ArticleAuthor>
                <S.AuthorImg>
                  <S.Img src="" alt="avatar" />
                </S.AuthorImg>
                <S.AuthorCont>
                  <S.AuthorName onClick={handleSeller}>
                    {data.user.name}
                  </S.AuthorName>
                  <S.AuthorAbout>
                    Продает товары с {data.user.sells_from}
                  </S.AuthorAbout>
                </S.AuthorCont>
              </S.ArticleAuthor>
            </S.ArticleBlock>
          </S.ArticleRight>
        </S.ArticContent>
      </S.MainArtic>

      <S.MainContainer>
        <S.MainTitle>Описание товара</S.MainTitle>
        <S.MainContent>
          <S.MainText>{data.description}</S.MainText>
        </S.MainContent>
      </S.MainContainer>
    </S.Main>
  );
}

export default MyArticle;
