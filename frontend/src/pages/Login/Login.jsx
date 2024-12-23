import FormLogin from "../../components/form-Login/FormLogin";
import LogoForm from "../../components/logo/LogoForm";
function Login() {
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
      <LogoForm/>
      <FormLogin/>
    </div>
  );
}

export default Login;
