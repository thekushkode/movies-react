import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            inputValue: '',
            hidden: true,
            title: '',
            year: '',
            poster: '',
            noResults: false
        }
    }

    getMovie = () => {
        fetch(`http://www.omdbapi.com/?s=${this.state.inputValue}&apikey=9cb3c2d3&`)
            .then(res => res.json())
            .then(data => {
                if (data.Search) {
                    this.setState({
                        movies: data.Search,
                        noResults: false
                    })
                } else {
                    this.setState({
                        noResults: true
                    })
                }
            })
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.getMovie();
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        return (
            <div className='mt-4'>
                <MDBContainer className="d-flex justify-content-center">
                    <MDBRow>
                        <MDBCol>
                            <form>
                                <p className="h5 text-center mb-4">Search For Movie</p>
                                <div className="grey-text">
                                    <MDBInput label="Enter Movie Title" icon="video" group type="text" validate error="wrong"
                                        success="right" value={this.state.inputValue} onChange={this.handleChange} />
                                </div>
                                <div className="text-center">
                                    <MDBBtn outline color="info" type='submit' onClick={this.handleSearch}>
                                        Search
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <hr my-3></hr>
                <div className="m-3">
                    <MDBRow>
                        {this.state.noResults && (<div>Nadda</div>)}
                        {this.state.movies.map((movie, index) => {
                            return (
                                <MDBCol md={3} lg={3} key={index}>
                                    <MDBCard>
                                        <MDBCardImage className="img-fluid" src={movie.Poster} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>{movie.Title}</MDBCardTitle>
                                            <MDBCardText>
                                                Released: {movie.Year}
                                            </MDBCardText>
                                            <MDBBtn href="#">Add Movie</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            )
                        })}
                    </MDBRow>
                </div>
            </div>
        )
    }
}

export default MovieCard;
