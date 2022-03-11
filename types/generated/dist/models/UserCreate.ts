/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCreate = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthDate?: string | null;
    email: string;
    password: string;
    password2: string;
    streetAddress: string;
    zipCode: string;
    zipPlace: string;
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
}
