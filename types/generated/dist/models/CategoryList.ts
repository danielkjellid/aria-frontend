/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CategoryList = {
    readonly id?: number;
    readonly name?: string;
    /**
     * A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs.
     */
    readonly slug?: string;
    /**
     * Order  in which the category should be displayed.
     */
    readonly ordering?: number;
    readonly width?: CategoryList.width | null;
    readonly images?: {
        apply_filter: boolean;
        readonly image_512x512?: string;
        readonly image_640x275?: string;
        readonly image_1024x1024?: string;
        readonly image_1024x575?: string;
        readonly image_1536x860?: string;
        readonly image_2048x1150?: string;
    };
}

export namespace CategoryList {

    export enum width {
        FULL = 'full',
        HALF = 'half',
    }


}
