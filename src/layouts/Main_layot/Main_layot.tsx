import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/common/";
import style from "./style.module.css"
const { container, wrper } = style
function Main_layot() {
    return (
        <Container className={container}>
            <Header />
            <div className={wrper}>
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default Main_layot