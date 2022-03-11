/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RequestUser = {
    firstName: string;
    fullName: string;
    avatarColor: RequestUser.avatarColor;
    initial: string;
    email: string;
    isAuthenticated: boolean;
    readonly permissions?: string;
    readonly groupPermissions?: string;
    /**
     * Angir at brukeren kan logge inn på denne administrasjonssiden.
     */
    isStaff?: boolean;
    /**
     * Designates whether the user is automatically granted all permissions.
     */
    isSuperuser?: boolean;
    hasConfirmedEmail?: boolean;
}

export namespace RequestUser {

    export enum avatarColor {
        _F87171 = '#F87171',
        _FBBF24 = '#FBBF24',
        _34D399 = '#34D399',
        _60A5FA = '#60A5FA',
        _A78BFA = '#A78BFA',
        _F472B6 = '#F472B6',
    }


}
