import { Component } from "react";
import {toast } from 'react-toastify';



class Searchbar extends Component {
    state = {
        query: '',
    }

    handleQueryChange = e => {
        this.setState({ query: e.currentTarget.value.toLowerCase() });
    }
    
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            toast("Введите запрос");
            return;
        }

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button" >
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="query"
                        value={this.state.query}
                        onChange={this.handleQueryChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;