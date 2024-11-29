import "./App.css";
import MyNavBar from "./components/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyActionBar from "./components/MyActionBar";
import MySlider from "./components/MySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavBar />
      <MyActionBar />
      <MySlider title="Harry Potter's Saga" searchFilmSaga="Harry+Potter" />
      <MySlider title="Matrix's Saga" searchFilmSaga="Matrix" />
      <MySlider title="Star Wars's Saga" searchFilmSaga="Star+Wars" />
      <MyFooter />
    </>
  );
}

export default App;
