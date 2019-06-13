import { call, put, select } from 'redux-saga/effects';
import http from '../../services/http';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const response = yield call(http.get, `repos/${action.payload.repository}`);

    const isDuplicated = yield select(state =>
      state.favorites.data.find(({ id }) => response.id === id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure({
        title: 'Repository duplicated',
      }));
    } else {
      const repositoryData = {
        id: response.id,
        name: response.full_name,
        description: response.description,
        url: response.html_url,
      };

      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (error) {
    yield put(FavoriteActions.addFavoriteFailure({
      title: 'Error while adding repository:',
      message: error.message,
    }));
  }
}
