import { PagingOrder } from './__json__/paging-order';
import { MessageFolder } from './__json__/message-folder';
import { InboxMessageFilterParamsJson } from './__json__/inbox-message-filter-params-json';

/**
 * Inbox Message Filter Params.
 */
/* istanbul ignore next: autogenerated */
export class InboxMessageFilterParams {

  constructor(private _json: InboxMessageFilterParamsJson) {
  }

  /**
   * Get folder.
   * @returns {MessageFolder}
   */
  get folder(): MessageFolder {
    return this._json.folder;
  }

  /**
   * Get offset.
   * @returns {number}
   */
  get offset(): number {
    return this._json.offset;
  }

  /**
   * Get limit.
   * @returns {number}
   */
  get limit(): number {
    return this._json.limit;
  }

  /**
   * Get order.
   * @returns {PagingOrder}
   */
  get order(): PagingOrder {
    return this._json.order;
  }

  /**
   * Get the json representation of this class.
   * @returns {InboxMessageFilterParams}
   */
  get json(): InboxMessageFilterParamsJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
