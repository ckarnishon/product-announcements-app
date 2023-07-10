import { useGetCommentAdsQuery } from "../../redux/Api/Api";
import * as S from "./comments.style";

function Comments({ setShowCommentAds, params }) {
  
  const { data, isSuccess } = useGetCommentAdsQuery(params.id);
  console.log(data);

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
          <S.FormNewArt id="formNewArt" action="#">
            <S.FormBlock>
              <S.Label htmlFor="text">Добавить отзыв</S.Label>
              <S.FormArea
                name="text"
                id="formArea"
                cols="auto"
                rows="5"
                placeholder="Введите описание"
              />
            </S.FormBlock>
            <S.BtnPab id="btnPublish">Опубликовать</S.BtnPab>
          </S.FormNewArt>

          <S.ModalReviews>
            {data.map((item) => (
              <S.ReviewsReview key={item.id}>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImg>
                      <S.Img src="" alt="avatar" />
                    </S.ReviewImg>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      {item.author.name}{" "}
                      <span>{item.created_on.substr(0, 10)}</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      {item.text}
                    </S.ReviewText>
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
