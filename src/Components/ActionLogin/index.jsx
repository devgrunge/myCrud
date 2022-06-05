import Api from "../../services/api"
import { Link } from "react-router-dom";

export default function ActionDefault () {
  
  const actionLoginGoogle = async () => {
    let result = await Api.googleLogIn();

    if (result) {
      actionLoginDataGoogle(result.user);
    } else {
      alert("Usuário ou senha inválidos");
    }
  };
  
  return (
    <div>
    <h1>
        Faça login em sua conta
    </h1>
    <button>
        Fazer Login com Facebook
    </button>
    <button onClick={actionLoginGoogle}>
        Fazer Login o Google
    </button>

    <p>OU</p>

    <form>
        <div className="form-input" >
            <label>E-mail</label>
            <input type="email" />
        </div>
        <div className="form-input" >
            <label>Senha</label>
            <input type="password" />
        </div>

        <button>
            Entrar
        </button>

        <div className="footerLogin">
            Não tem uma conta? <Link to="/register"> Registre-se </Link>
        </div>

    </form>


</div>
  )
}