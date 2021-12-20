import { BACKEND_ROUTES } from './constants';
import initialOrder from './data';

class API {
  constructor(server) {
    this._base = server.base;
    this._routes = server.routes;
    //    this._jwt = '';
  }

  async getIngredients() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const ingredientsPromise = fetch(`${this._base}${this._routes.ingredients}`, options);
    const ingredientsResponse = await ingredientsPromise;
    if (ingredientsResponse.ok) {
      return ingredientsResponse.json();
    }
    return Promise.reject(ingredientsResponse.status);
  }

  // Мок получения данных с сервера
  // Подавление ошибки линтера включено сознательно - здесь _не_ _нужны_
  // поля класса, данные для мока импортируются.
  // eslint-disable-next-line class-methods-use-this
  async getOrder() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(initialOrder), 100);
    });
  }
}

const burgerAPI = new API(BACKEND_ROUTES);
export default burgerAPI;
