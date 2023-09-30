import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onHandleSubmit} className={css.searchform}>
          <button type="submit" className={css.searchformbutton}>
            <span className={css.searchformbuttonlabel}>Search</span>
          </button>

          <input
            className={css.searchforminput}
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
