import { Routes, Route } from "react-router";
import Form from "../Components/Form";
import FormName from "../Components/FormName";
import FormEmail from "../Components/FormEmail";
import FormPassword from "../Components/FormPassword";
import FormContact from "../Components/FormContact";
import Results from "../Components/Results";
import FormSignUp from "../Components/FormSignUp";
const FormRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form></Form>}>
        <Route index element={<FormSignUp />}></Route>
        <Route path="name" element={<FormName></FormName>}></Route>
        <Route path="email" element={<FormEmail></FormEmail>}></Route>
        <Route path="password" element={<FormPassword></FormPassword>}></Route>
        <Route path="contact" element={<FormContact></FormContact>}></Route>
      </Route>
      <Route path="/results" element={<Results></Results>}></Route>
    </Routes>
  );
};

export default FormRoutes;
