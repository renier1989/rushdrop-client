const { default: authContext } = require("@/context/auth/authContext")
const { useContext } = require("react")


const useAuth = () =>{
    return useContext(authContext);
}
export default useAuth