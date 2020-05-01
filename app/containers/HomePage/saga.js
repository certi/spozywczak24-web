import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCTS } from 'containers/App/constants';

import request from 'utils/request';

// import { makeSelectCurrentQuery } from 'containers/HomePage/selectors';
import { productsLoaded, productsLoadingError } from '../App/actions';
import { makeSelectCurrentQuery } from '../App/selectors';

/**
 * Github repos request/response handler
 */
export function* getProducts() {
  const currentQuery = yield select(makeSelectCurrentQuery());
  // const requestURL = `https://api.github.com/users/${currentQuery}/repos?type=all&sort=updated`;

  const products = [
    {
      id: 'f3i',
      fid: '19989748',
      name: 'Woseba kawa palona ziarnista Cafe Brasil 500g',
      image: 'https://webapi.selgros24.pl/m/prodImages/WOSEBA_Woseba_kawa_palona_ziarnista_Cafe_Brasil_500g_19989748_0_350_350.jpg',
      price: '1.99',
    },
    {
      id: 'er8',
      fid: 92563949,
      name: '100% kawa naturalna palona ziarnista segafredo espresso casa 1000g ziarnista',
      image: 'https://webapi.selgros24.pl/m/prodImages/Segafredo_Zanetti_100_KAWA_NATURALNA_PALONA_ZIARNISTA_SEGAFREDO_ESPRESSO_CASA_1000G_ZIARNISTA_92563949_0_350_350.jpg',
      price: '11.23',
    },
    {
      id: 'fls',
      fid: 71526578,
      name: 'Jacobs Espresso Kawa ziarnista 500 g',
      image: 'https://webapi.selgros24.pl/m/prodImages/Jacobs_Jacobs_Espresso_Kawa_ziarnista_500_g_71526578_0_350_350.jpg',
      price: '9.56',
    },
    {
      id: '02k',
      fid: 31708803,
      name: 'HERBATA TETLEY CLASSIC CZARNA 100 torebek x 1,5g',
      image: 'https://webapi.selgros24.pl/m/prodImages/Tetley_HERBATA_TETLEY_CLASSIC_CZARNA_100_torebek_x_1_5g_31708803_0_350_350.jpg',
      price: '10.12',
    },
    {
      id: 'g9o',
      fid: 34151431,
      name: 'HERBATA TETLEY INTENSIVE BLACK 25 TOREBEK x 2g',
      image: 'https://webapi.selgros24.pl/m/prodImages/Tetley_HERBATA_TETLEY_INTENSIVE_BLACK_25_TOREBEK_x_2g_34151431_0_350_350.jpg',
      price: '10.76',
    },
    {
      id: 'd3r',
      fid: 24535957,
      name: 'Minutka czarna – 140g (100x1,4g)',
      image: 'https://webapi.selgros24.pl/m/prodImages/Minutka_Minutka_czarna_140g_100x1_4g_76547538_0_350_350.jpg',
      price: '8.34',
    },
    {
      id: 's02',
      fid: 58788670,
      name: 'Minutka czarna – 40 torebek',
      image: 'https://webapi.selgros24.pl/m/prodImages/Minutka_Minutka_czarna_40_torebek_49269145_0_350_350.jpg',
      price: '23.19',
    },
    {
      id: 'ssf',
      fid: 37116886,
      name: 'Herbapol herbaciany ogród herbatka owocowa malina z żurawiną 20tb/54g',
      image: 'https://webapi.selgros24.pl/m/prodImages/Herbaciany_Ogrod_HERBAPOL_HERBACIANY_OGROD_HERBATKA_OWOCOWA_MALINA_Z_ZURAWINA_20TB54G_37116886_0_350_350.jpg',
      price: '11.45',
    },
    {
      id: 'lho',
      fid: 24953952,
      name: 'Herbaciany ogród herbatka owocowa prosto z lasu 20tb/50g',
      image: 'https://webapi.selgros24.pl/m/prodImages/Herbaciany_Ogrod_HERBACIANY_OGROD_HERBATKA_OWOCOWA_PROSTO_Z_LASU_20TB50G_24953952_0_350_350.jpg',
      price: '12.99',
    },
    {
      id: 'eo0',
      fid: 23690191,
      name: 'Herbapol herbaciany ogród herbatka owocowa imbir z pomarańczą i pigwą 20tb/50g',
      image: 'https://webapi.selgros24.pl/m/prodImages/Herbaciany_Ogrod_HERBAPOL_HERBACIANY_OGROD_HERBATKA_OWOCOWA_IMBIR_Z_POMARANCZA_I_PIGWA_20TB50G_23690191_0_350_350.jpg',
      price: '7.56',
    },
  ];

  try {
    // Call our request helper (see 'utils/request')
    // const repos = yield call(request, requestURL);
    yield put(productsLoaded(products, currentQuery));
  } catch (err) {
    yield put(productsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PRODUCTS, getProducts);
}
