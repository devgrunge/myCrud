import {Link} from 'react-router-dom';

export default function Register () {
  return (
    <div>
    <h1 className="register-header">
        <Link to="/">voltar</Link> <br />
        Crie sua conta</h1>
    <p>Crie sua conta , é grátis!</p>
    <form>
        <div className="form-input" >
            <label>Nome</label>
            <input type="text" />
        </div>
        <div className="form-input" >
            <label>E-mail</label>
            <input type="email" />
        </div>
        <div className="form-input" >
            <label>Senha</label>
            <input type="password" />
        </div>

        <button>
            Comece Agora!
        </button>
        <div className="footerLogin">
            Já tem uma conta? <Link to="/"> Faça Login </Link>
        </div>
    </form>


</div>
  )
}