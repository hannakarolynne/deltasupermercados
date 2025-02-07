import FormSignup from "../../components/form-signup/FormSignup";
import Logo from "../../components/logo/LogoForm";


function Signup() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "120px",
        margin: "3% 0px 3% 0px",
        


      }}
    >
      <Logo/>
      <FormSignup/>
     
    </div>
  );
}

export default Signup;
