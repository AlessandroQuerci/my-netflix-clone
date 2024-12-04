import MyActionBar from "./MyActionBar";
import MySlider from "./MySlider";

const Home = () => {
  return (
    <>
      <MyActionBar />
      <MySlider title="Harry Potter's Saga" searchFilmSaga="Harry+Potter" />
      <MySlider title="Matrix's Saga" searchFilmSaga="Matrix" />
      <MySlider title="Star Wars's Saga" searchFilmSaga="Star+Wars" />
    </>
  );
};

export default Home;
