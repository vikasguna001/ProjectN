import { environment } from '../../environments/environment';
export const urlConstant = {
  loginModule: {
    LoggedIn: environment.APIUrl + 'users/login',
  },
  perfume: {
    getAll: environment.APIUrl + 'perfume/all',
    addPerfume: environment.APIUrl + 'perfume/add',
  },
  store: {
    getAllStore: environment.APIUrl + 'store/all',
    addStore: environment.APIUrl + 'store/add',
    getPerfumeById: environment.APIUrl + 'perfume',
  }
};
