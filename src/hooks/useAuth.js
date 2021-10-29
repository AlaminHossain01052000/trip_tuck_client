import { useContext } from "react"
import { AuthContext } from "../firebase/AuthProvider/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;