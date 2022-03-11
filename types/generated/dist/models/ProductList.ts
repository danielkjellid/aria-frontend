/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductList = {
    readonly id?: number;
    product: {
        name: string;
        /**
         * Image must be above 380x575px
         */
        thumbnail?: Blob;
    };
    unit: string;
    status: string;
    readonly variants?: string;
    readonly siteState?: string;
}
