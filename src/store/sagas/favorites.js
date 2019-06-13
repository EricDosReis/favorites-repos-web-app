import { call, put } from 'redux-saga/effects';
import http from '../../services/http';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const response = yield call(http.get, `repos/${action.payload.repository}`);

    const repositoryData = {
      id: response.id,
      name: response.full_name,
      description: response.description,
      url: response.html_url,
    };

    yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(FavoriteActions.addFavoriteFailure({
      title: 'Error while adding repository:',
      message: error.message,
    }));
  }
}
