import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../../Components/Register";
import ActionLogin from "../../Components/ActionLogin";
//import Api from "../../services/api";
//import firebase from "../../firebaseConfig";

export default () => {
//   const actionLoginGoogle = async () => {
//     let result = await Api.googleLogIn();
//     if (result) {
    //       actionLoginDataGoogle(result.user);
    //     } else {
        //       alert("Usuário ou senha inválidos");
        //     }
        //   };
        
        // { actionLoginDataGoogle }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Routes>
          <Route path="*" element={<ActionLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
