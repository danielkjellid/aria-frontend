/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Users = {
    readonly id?: number;
    profile: {
        full_name: string;
        initial: string;
        avatar_color: string;
    };
    email: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts if you want to preserve the data.
     */
    isActive?: boolean;
    dateJoined?: string;
}
