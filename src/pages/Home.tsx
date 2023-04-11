import LoadingPage from "../components/LoadingPage";
import LotoFacil from "../components/LotoFacil";
import MegaSena from "../components/MegaSena";
function Home() {
    return (
        <>
            <MegaSena />
            <LoadingPage />
            <LotoFacil /> 
        </>
    )
}
export default Home;