import * as S from "./ads.style";

function Editads() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Редактировать объявление</S.ModalTitle>
            <S.BtnCloseDiv>
              <S.btnCloseLine />
            </S.BtnCloseDiv>
            <S.FormNewArt id="formNewArt" action="#">
              <S.FormBlock>
                <S.Label htmlFor="name">Название</S.Label>
                <S.FormInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value="Ракетка для большого тенниса Triumph Pro STС Б/У"
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
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </S.FormArea>
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
                <S.Label htmlFor="price">Цена</S.Label>
                <S.InputPrice
                  value="2 200"
                  type="text"
                  name="price"
                  id="formName"
                />
                <S.InputPriceCover />
              </S.BlockPrice>

              <S.BtnPub id="btnPublish">Сохранить</S.BtnPub>
            </S.FormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
  );
}

export default Editads;
