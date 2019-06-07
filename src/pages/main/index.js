import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container } from './styles';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })).isRequired,
  }

  state = {
    repositoryInput: '',
  }

  handleAddRepository = (e) => {
    e.preventDefault();

    const { addFavoriteRequest } = this.props;
    const { repositoryInput } = this.state;

    addFavoriteRequest(repositoryInput);
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

        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id0}>
              <p>
                <strong>{favorite.name}</strong> - {favorite.description}
              </p>

              <a href={favorite.url}>Repo link</a>
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
