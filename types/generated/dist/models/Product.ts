/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Product = {
    readonly id?: number;
    readonly unit?: string;
    readonly name?: string;
    /**
     * A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs.
     */
    readonly slug?: string;
    /**
     * The short description will be displayed on the top part of the product, above the variant selection
     */
    readonly shortDescription?: string | null;
    readonly description?: string | null;
    /**
     * Designates whether the product comes in sizes out of the ordinary
     */
    readonly availableInSpecialSizes?: boolean;
    readonly absorption?: number | null;
    readonly sizes?: string;
    readonly colors?: Array<{
        readonly name?: string;
    }>;
    readonly styles?: string;
    readonly applications?: string;
    readonly materials?: string;
    readonly images?: Array<{
        apply_filter: boolean;
        readonly image_512x512?: string;
        readonly image_640x275?: string;
        readonly image_1024x1024?: string;
        readonly image_1024x575?: string;
        readonly image_1536x860?: string;
        readonly image_2048x1150?: string;
    }>;
    readonly variants?: string;
    readonly files?: Array<{
        readonly name?: string;
        readonly file?: Blob;
    }>;
    readonly originCountry?: string;
    readonly siteState?: string;
}
