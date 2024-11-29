import { Component } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

class MySlider extends Component {
  state = {
    films: [],
  };

  fetchFilms() {
    const search = this.props.searchFilmSaga;
    const URL = `http://www.omdbapi.com/?apikey=33ac775e&s=${search}`;
    console.log(URL);
    fetch(URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Richiesta non riuscita");
        }
      })
      .then((filmsData) => {
        console.log(filmsData.Search);
        this.setState({ films: filmsData.Search });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,

      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="sliderSection ps-5">
          <h3 className="text-white fs-5 pb-2 pt-4">{this.props.title}</h3>
          <Container fluid className="p-0 pb-3">
            <div className="slider-container">
              <Slider {...settings}>
                {this.state.films.map((film) => {
                  return (
                    <div className="slider-item pe-2">
                      <img src={film.Poster} alt="" className="img-fluid object-fit-cover" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default MySlider;
