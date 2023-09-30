import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';
import { SearchImages } from './servises/search-api';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    response: [],
    loading: false,
    hits: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.search !== prevState.search
    ) {
      try {
        this.setState({ loading: true });
        const response = await SearchImages(this.state.search, this.state.page);
        if (response.length === 0) {
          window.alert(
            `There are no images matching your search query. Please try again.`
          );
          return;
        }
        const data = response.map(({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        });
        return this.setState(prevState => ({
          response: [...prevState.response, ...data],
          hits: response.length,
        }));
      } catch (error) {
        window.alert(`Something went wrong :( Please try again.`);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  formSubmitHandler = data => {
    this.setState({
      search: data.search,
      page: 1,
      response: [],
      loading: false,
      hits: '',
    });
  };

  onNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery data={this.state.response} />
        {this.state.response.length > 0 && this.state.hits >= 12 && (
          <Button onNextPage={this.onNextPage} />
        )}
        {this.state.loading && <Loader />}
      </div>
    );
  }
}
