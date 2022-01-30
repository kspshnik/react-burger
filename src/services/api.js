import { BACKEND_ROUTES } from '../constants';

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
    if (!ingredientsResponse.ok) {
      return Promise.reject(ingredientsResponse.status);
    }
    return ingredientsResponse.json();
  }

  // Мок получения данных с сервера
  // Подавление ошибки линтера включено сознательно - здесь _не_ _нужны_
  // поля класса, данные для мока импортируются.
  // eslint-disable-next-line class-methods-use-this
  async placeOrder(order) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients: order }),
    };
    const orderPromise = fetch(`${this._base}${this._routes.orders}`, options);
    const orderResponse = await orderPromise;
    if (!orderResponse.ok) {
      return Promise.reject(new Error(orderResponse.status));
    }
    return orderResponse.json();
  }
}

const burgerAPI = new API(BACKEND_ROUTES);
export default burgerAPI;
