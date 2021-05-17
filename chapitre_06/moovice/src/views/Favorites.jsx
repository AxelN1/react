import React, { Component } from 'react'

class Favorites extends Component {

    constructor() {
        super();

        this.state = {
            movies: [],
            favIds: this.getStorage
        }
    }


    componentDidMount() {
        const arrFavIDs = this.state.favIDs;
        arrFavIDs.map((elem) => {
          let movie = this.getMovie(elem);
          return movie;
        });
      }


    getStorage() {

        return Favorites
    }

    getMovie = (id) => {
        console.log('id', id);
        fetch(
          `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`
        );
      };


    render() {
        return (
            <div>
                <h1>Favorites</h1>
            </div>
        )
    }
}

export default Favorites