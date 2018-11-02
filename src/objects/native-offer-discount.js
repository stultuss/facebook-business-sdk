/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * NativeOfferDiscount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NativeOfferDiscount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      currency: 'currency',
      override: 'override',
      text: 'text',
      type: 'type',
      value1: 'value1',
      value2: 'value2',
      id: 'id'
    });
  }
}
