import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })),
      error: PropTypes.oneOfType([
        null,
        PropTypes.shape({
          title: PropTypes.string,
          message: PropTypes.string,
        }),
      ]),
    }).isRequired,
  }

  state = {
    repositoryInput: '',
  }

  handleAddRepository = (e) => {
    e.preventDefault();

    const { addFavoriteRequest } = this.props;
    const { repositoryInput } = this.state;

    addFavoriteRequest(repositoryInput);

    this.setState({ repositoryInput: '' });
  }

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;

    return (
      <Container>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit" className="ml-1">
            Add
          </button>
        </form>

        {favorites.loading && <p className="loader">Loading ...</p>}

        {!!favorites.error
          && (
            <div className="card card--danger">
              <p>
                {favorites.error.title} <br />
                <code>{favorites.error.message}</code>
              </p>
            </div>
          )
        }

        <ul>
          {favorites.data.map(favorite => (
            <li className="card" key={favorite.id}>
              <p>
                <a href={favorite.url}><strong>{favorite.name}</strong></a> - {favorite.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
