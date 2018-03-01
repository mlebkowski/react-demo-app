import express from 'express';
import serverRenderer from './renderer'
import storeFactory from '../src/Redux/store';
import ApiClient from '../src/Services/ApiClient';
import { addProducts } from '../src/Redux/actions';

const path = require('path');

const router = express.Router();

const actionIndex = (req, res, next) => {

  ApiClient().then(products => {
    const store = storeFactory();

    store.dispatch(addProducts(products))

    serverRenderer(store)(req, res, next);
  })

};

router.use('^/$', actionIndex)

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  {maxAge: '30d'},
))

export default router;
