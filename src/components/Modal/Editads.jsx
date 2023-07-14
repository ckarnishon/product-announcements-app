import { useState } from "react";
import * as S from "./ads.style";

function EditAds({ setShow, info }) {
  const [titleValue, setTitleValue] = useState(info.title);
  const [descriptionValue, setDescriptionValue] = useState(info.description);
  const [priceValue, setPriceValue] = useState(info.price);

  console.log(info.title);
  return (
    <S.ModalBlock>
      <S.ModalContent>
        <S.ModalTitle>Редактировать объявление</S.ModalTitle>
        <S.BtnCloseDiv>
          <S.btnCloseLine
            onClick={() => {
              setShow(false);
            }}
          />
        </S.BtnCloseDiv>
        <S.FormNewArt id="formNewArt" action="#">
          <S.FormBlock>
            <S.Label htmlFor="name">Название</S.Label>
            <S.FormInput
              type="text"
              name="name"
              id="formName"
              placeholder="Введите название"
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
              value={titleValue}
            />
          </S.FormBlock>
          <S.FormBlock>
            <S.Label htmlFor="text">Описание</S.Label>
            <S.FormArea
              name="text"
              id="formArea"
              cols="auto"
              rows="10"
              placeholder="Введите описание"
              onChange={(e) => {
                setDescriptionValue(e.target.value);
              }}
              value={descriptionValue}
            ></S.FormArea>
          </S.FormBlock>
          <S.FormBlock>
            <S.FormNewArtP>
              Фотографии товара<span>не более 5 фотографий</span>
            </S.FormNewArtP>
            <S.BarImg>
              <S.BlockImg>
                <S.Img src="" alt="foto" />
                <S.ImgCoverLine />
              </S.BlockImg>
              <S.BlockImg>
                <S.Img src="" alt="foto" />
                <S.ImgCoverLine />
              </S.BlockImg>
              <S.BlockImg>
                <S.ImgCoverLine />
                <S.Img src="" alt="foto" />
              </S.BlockImg>
              <S.BlockImg>
                <S.ImgCoverLine />
                <S.Img src="" alt="foto" />
              </S.BlockImg>
              <S.BlockImg>
                <S.ImgCoverLine />
                <S.Img src="" alt="foto" />
              </S.BlockImg>
            </S.BarImg>
          </S.FormBlock>
          <S.BlockPrice>
            <S.Label htmlFor="price"></S.Label>
            <S.InputPrice
              type="text"
              name="price"
              id="formName"
              onChange={(e) => {
                setPriceValue(e.target.value);
              }}
              value={priceValue}
            />
            <S.InputPriceCover />
          </S.BlockPrice>

          <S.BtnPub id="btnPublish">Сохранить</S.BtnPub>
        </S.FormNewArt>
      </S.ModalContent>
    </S.ModalBlock>
  );
}

export default EditAds;
