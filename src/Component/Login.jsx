import useAuthStore from '../store/authStore'

function Login() {
  const login = useAuthStore((state) => state.login)

  return <button onClick={login}>Login</button>
}

export default Login
