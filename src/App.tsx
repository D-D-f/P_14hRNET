import Header from "./Component/Header/Header.tsx";
import UserPage from "./Pages/UserPage/UserPage.tsx";
import Footer from "./Component/Footer/Footer.tsx";
import "./assets/scss/PagesStyle/App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <UserPage />
            </main>
            <Footer />
        </div>
    )
}

export default App;