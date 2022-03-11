/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type KitchenList = {
    readonly id?: number;
    readonly name?: string;
    /**
     * A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs.
     */
    readonly slug?: string;
    readonly thumbnailDescription?: string;
    readonly thumbnail500x305?: Blob;
    readonly thumbnail660x400?: Blob;
    readonly thumbnail850x520?: Blob;
}
