import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
`;

export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
`;

export const ArticContent = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  ax-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
`;

export const FillImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleImg = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
  justify-content: space-around;
`;

export const ImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  border: transparent;
  margin: 0 5px;
  cursor: pointer;
`;

export const ArticleRight = styled.div`
  max-width: 621px;
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleTitle = styled.div`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;
`;

export const ArticleP = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;

export const ArticleLink = styled.div`
  cursor: pointer;
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
`;

export const PorPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const BtnBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonRedact = styled.button`
  width: 189px;
  margin-right: 10px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const ButtonRemove = styled.button`
  width: 225px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const ArticleAuthor = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

export const AuthorCont = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  cursor: pointer;
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding-top: 5px;
`;

export const MainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`;

export const MainText = styled.p`
  font-size: 25px;
  line-height: 24px;
  color: #000000;
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: normal;
`;

export const Span = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 400;
`;

export const ShowPhone = styled.div`
  gap: 10px;
  display: flex;
  border: 2px solid;
  border-radius: 12px;
  left: 44%;
  position: absolute;
  top: 36%;
  width: 350px;
  height: 150px;
  background-color: rgb(240, 240, 240);
  padding: 12px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const btnCloseLine = styled.div`
  cursor: pointer;

    &:after,
    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #585353;
        top: 44%;
        right: 10px;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
    &:hover {
        &:after,
        &:before {
            background-color: #0080C1;
        }
`;

export const text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  color: rgb(0, 158, 228);
  font-family: normal;
`;
export const SpanPhone = styled.span`
  font-size: 27px;
  font-weight: 500;
  line-height: 22px;
  color: rgb(0, 158, 228);
  font-family: normal;
`;
