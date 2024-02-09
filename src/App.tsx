import Header from "./Component/Header/Header.tsx";
import SignInPage from "./Pages/SignInPage/SignInPage.tsx";
import Footer from "./Component/Footer/Footer.tsx";
import "./assets/scss/PagesStyle/App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <SignInPage />
            </main>
            <Footer />
        </div>
    )
}

export default App;