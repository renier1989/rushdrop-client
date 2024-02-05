import appContext from "@/context/app/appContext";
const { useContext } = require("react")


const useRushDrop = () =>{
    return useContext(appContext);
}
export default useRushDrop