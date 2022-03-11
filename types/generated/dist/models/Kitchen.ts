/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Kitchen = {
    readonly id?: number;
    readonly name?: string;
    /**
     * A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs.
     */
    readonly slug?: string;
    readonly description?: string;
    /**
     * Apply filter to image if the image is light to maintain an acceptable contrast
     */
    readonly applyFilter?: boolean;
    /**
     * Will be displayed bellow pricing example
     */
    readonly extraDescription?: string | null;
    exampleFromPrice: string;
    /**
     * Designates whether the product can be painted in suppliers 2000 colors
     */
    readonly canBePainted?: boolean;
    readonly silkVariants?: Array<{
        readonly id?: number;
        readonly name?: string;
        readonly color_hex?: string;
    }>;
    readonly decorVariants?: Array<{
        readonly name?: string;
        image: string;
    }>;
    readonly plywoodVariants?: Array<{
        readonly name?: string;
        image: string;
    }>;
    readonly laminateVariants?: Array<{
        readonly id?: number;
        readonly name?: string;
        readonly color_hex?: string;
    }>;
    readonly exclusiveVariants?: Array<{
        readonly id?: number;
        readonly name?: string;
        readonly color_hex?: string;
    }>;
    readonly trendVariants?: Array<{
        readonly id?: number;
        readonly name?: string;
        readonly color_hex?: string;
    }>;
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
