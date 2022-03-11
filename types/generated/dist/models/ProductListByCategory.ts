/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductListByCategory = {
    readonly id?: number;
    readonly name?: string;
    /**
     * A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs.
     */
    readonly slug?: string;
    readonly unit?: string;
    readonly categories?: Array<{
        readonly name?: string;
    }>;
    readonly colors?: Array<{
        readonly id?: number;
        readonly name?: string;
        readonly color_hex?: string;
    }>;
    readonly styles?: string;
    readonly applications?: string;
    readonly materials?: string;
    /**
     * Image must be above 380x575px
     */
    readonly thumbnail?: Blob;
    readonly variants?: string;
    readonly siteState?: string;
}
