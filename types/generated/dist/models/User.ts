/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    readonly id?: number;
    readonly profile?: {
        full_name: string;
        initial: string;
        avatar_color: string;
    };
    address: string;
    readonly acquisitionSource?: string;
    readonly auditLogs?: string;
    readonly notes?: string;
    readonly phoneNumber?: string;
    lastLogin?: string | null;
    email: string;
    firstName: string;
    lastName: string;
    birthDate?: string | null;
    hasConfirmedEmail?: boolean;
    streetAddress: string;
    zipCode: string;
    zipPlace: string;
    /**
     * Decides if a user receives email from us. Typically used if we do not want a user to receive marketing (competetors).
     */
    disabledEmails?: boolean;
    /**
     * Decides if a user receives marketing emails from us.
     */
    subscribedToNewsletter?: boolean;
    /**
     * Decides if a user accepts a personalized experience within the app.
     */
    allowPersonalization?: boolean;
    /**
     * Decides if we share user cookies with external sources such as Facebook. This will make the user see adverts and other related content to the app.
     */
    allowThirdPartyPersonalization?: boolean;
    dateJoined?: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts if you want to preserve the data.
     */
    isActive?: boolean;
    site: number | null;
}
