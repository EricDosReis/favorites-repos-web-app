import { call, put } from 'redux-saga/effects';
import http from '../../services/http';

import { addFavoriteSuccess } from '../actions/favorites';

export function* addFavorite(action) {
  const response = yield call(http.get, `repos/${action.payload.repository}`);

  const repositoryData = {
    id: response.id,
    name: response.full_name,
    description: response.description,
    url: response.html_url,
  };

  yield put(addFavoriteSuccess(repositoryData));
}
