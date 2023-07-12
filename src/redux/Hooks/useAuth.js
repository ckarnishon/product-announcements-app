import { useSelector } from "react-redux";

export function useAuth() {
  const { accessToken, refreshToken, tokenType } = useSelector(
    (state) => state.userToken
  );
  return {
    isAuth: !!accessToken,
    accessToken,
    refreshToken,
    tokenType,
  };
}
