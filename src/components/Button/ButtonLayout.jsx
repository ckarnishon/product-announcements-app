import { useEffect } from "react";
import { useGetUserQuery } from "../../redux/Api/Api";
import {useAuth} from "../../redux/Hooks/useAuth"
import BtnChangBox from "./BtnChangBox.jsx";
import ButtunPhone from "./ButtonPhone";

 function ButtonLayout({ info, params }) {
   const { isAuth } = useAuth();

   const { data, isSuccess, error } = useGetUserQuery();

   console.log(info, data);

   // <BtnChangBox info={info} params={params} />;
   // info.user_id === data.id;
   // return <ButtunPhone info={info} />;

   useEffect(() => {}, []);

    
   return(
      <BtnChangBox info={info} params={params} />
   )
    
   
 }

export default ButtonLayout;
