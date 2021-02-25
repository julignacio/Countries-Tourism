import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "./containers/App";
import NewActivity from "./containers/NewActivity";
import Home from "./containers/Home";
import CountryDetail from "./containers/CountryDetail";

import Nav from "./components/Navbar";

configure({ adapter: new Adapter() });
describe("App", () => {
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  }).catch(err => {
    console.log(err
  });
  describe("El componente Nav debe renderizar en todas las rutas.", () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Nav)).toHaveLength(1);
    });
    it('Debería renderizarse en la ruta "/otraRuta"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/otraRuta"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Nav)).toHaveLength(1);
    });
  });

  it('El componente Home debe renderizar en la ruta /home (Sólo en la ruta "/home")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(NewActivity)).toHaveLength(0);
  });

  it("El componente NewActivity debe renderizar en la ruta /activity - este test no pasará si Otro componente (que no sea Nav) se renderiza en esta ruta.", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/activity"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(Nav)).toHaveLength(1);
    expect(container.find(Home)).toHaveLength(0);
    expect(container.find(NewActivity)).toHaveLength(1);
  });

  it("El componente CountryDetail debe renderizar en la ruta /detail/:id", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/detail/URY"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(Nav)).toHaveLength(1);
    expect(container.find(Home)).toHaveLength(0);
    expect(container.find(NewActivity)).toHaveLength(0);
    expect(container.find(CountryDetail)).toHaveLength(1);
  });
});
