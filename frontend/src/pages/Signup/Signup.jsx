import FormSignup from "../../components/form-signup/FormSignup";
import LogoForm from "../../components/logo/LogoForm";


function Signup() {
  return (
    <div class
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "120px",
        margin: "3% 0px 3% 0px",
        


      }}
    >
      <LogoForm/>
      <FormSignup/>
     
    </div>
  );
}

export default Signup;
