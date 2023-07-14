import {
  useAddCommentMutation,
  useGetCommentAdsQuery,
} from "../../redux/Api/Api";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../redux/Hooks/useAuth";
import { setSeller } from "../../redux/Slises/sellerSlise";

import * as S from "./comments.style";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments({ setShowCommentAds, params }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [valueComment, setValueComment] = useState();
  const HOST = "http://127.0.0.1:8090/";

  const { isAuth } = useAuth();

  const payload = {
    id: params.id,
    text: valueComment,
  };

  const { data, isSuccess } = useGetCommentAdsQuery(params.id);
  const [addComents] = useAddCommentMutation();

  const handleSeller = (item) => {
    console.log(item);
    if (isSuccess) {
      dispatch(
        setSeller({
          idSeller: item.author.id,
          SellerName: item.author.name,
          SellerEmail: item.author.email,
          citySeller: item.author.city,
          avatarSeller: item.author.avatar,
          sellsFrom: item.author.sells_from,
          SellerPhone: item.author.phone,
        })
      );
      navigate("/seller");
    }
  };

  const handleAddComment = () => {
    addComents(payload);
  };

  return isSuccess ? (
    <S.ModalBlock>
      <S.ModalContent>
        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
        <S.BtnCloseDiv>
          <S.btnCloseLine
            onClick={() => {
              setShowCommentAds(false);
            }}
          />
        </S.BtnCloseDiv>
        <S.ModalScroll>
          {isAuth ? (
            <S.FormNewArt id="formNewArt" action="#">
              <S.FormBlock>
                <S.Label htmlFor="text">Добавить отзыв</S.Label>
                <S.FormArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="5"
                  placeholder="Введите описание"
                  onChange={(e) => setValueComment(e.target.value)}
                />
              </S.FormBlock>
              <S.BtnPab onClick={handleAddComment}>Опубликовать</S.BtnPab>
            </S.FormNewArt>
          ) : (
            <S.BlokAuth>
              <S.H3>Вы не авторизованы</S.H3>
              <Link to="/login">
                <S.LinkP>Войти</S.LinkP>
              </Link>
            </S.BlokAuth>
          )}
          <S.ModalReviews>
            {data.map((item) => (
              <S.ReviewsReview key={item.id}>
                <S.ReviewItem>
                  <S.ReviewLeft>               
                      <S.ReviewImg onClick={() => handleSeller(item)}>
                        <S.Img src={HOST + item.author.avatar} alt="avatar" />
                      </S.ReviewImg>              
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName onClick={() => handleSeller(item)}>
                      {item.author.name}{" "}
                      <span>{item.created_on.substr(0, 10)}</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>{item.text}</S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
              </S.ReviewsReview>
            ))}
          </S.ModalReviews>
        </S.ModalScroll>
      </S.ModalContent>
    </S.ModalBlock>
  ) : (
    <h3>Загрузка....</h3>
  );
}

export default Comments;
