import { useLocation } from "react-router-dom"
import AuthBackImage from "./components/shared/AuthBackImage"
import BackImage from "./components/shared/BackImage"
import AuthRoute from "./routes/AuthRoute"
import RoutePage from "./routes/Route"

function App() {
  const {pathname} = useLocation()

  if(pathname == '/sign-in' || pathname == '/sign-up' || pathname == '/confirm'){
    return (
      <AuthBackImage>
        <AuthRoute />
      </AuthBackImage>
    )
  }else{
    return (
      <BackImage>
        <RoutePage />
      </BackImage>
    )
  }
}

export default App
