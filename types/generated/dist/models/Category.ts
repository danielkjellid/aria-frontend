/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Category = {
    readonly name?: string;
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
