import { call, put } from 'redux-saga/effects';
import http from '../../services/http';

import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

export function* addFavorite(action) {
  try {
    const response = yield call(http.get, `repos/${action.payload.repository}`);

    const repositoryData = {
      id: response.id,
      name: response.full_name,
      description: response.description,
      url: response.html_url,
    };

    yield put(addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoriteFailure({
      title: 'Error while adding repository:',
      message: error.message,
    }));
  }
}
