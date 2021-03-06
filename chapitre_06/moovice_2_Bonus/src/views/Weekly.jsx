import React, { Component } from 'react';
import Card from '../components/Card'
import { getLatestMovies } from '../utils/Api'



const moment = require("moment");

class Weekly extends Component {

    state = {
        movies: []
    }


    formatDateToday(dateString) {
        const today = moment(dateString).format("YYYY-MM-DD");
        return today;
      }
      formatDateLastWeek(dateString) {
        const lastWeek = moment(dateString)
          .subtract(7, "days")
          .format("YYYY-MM-DD");
        return lastWeek;
      }


    componentDidMount() {
        getLatestMovies()
            .then(data => {

                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Weekly</h1>

                <div className="row">
                    {
                        this.state.movies.map(elem => {
                            return (
                                <div className="col-6">
                                    <Card {...elem} />
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        );
    }
}

export default Weekly;
