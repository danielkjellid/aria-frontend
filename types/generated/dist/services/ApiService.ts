/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountVerification } from '../models/AccountVerification';
import type { AccountVerificationConfirm } from '../models/AccountVerificationConfirm';
import type { Category } from '../models/Category';
import type { CategoryList } from '../models/CategoryList';
import type { CategoryNavigationList } from '../models/CategoryNavigationList';
import type { Kitchen } from '../models/Kitchen';
import type { KitchenList } from '../models/KitchenList';
import type { MyTokenObtainPair } from '../models/MyTokenObtainPair';
import type { PasswordReset } from '../models/PasswordReset';
import type { PasswordResetConfirm } from '../models/PasswordResetConfirm';
import type { Product } from '../models/Product';
import type { ProductList } from '../models/ProductList';
import type { ProductListByCategory } from '../models/ProductListByCategory';
import type { RequestUser } from '../models/RequestUser';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { User } from '../models/User';
import type { UserCreate } from '../models/UserCreate';
import type { Users } from '../models/Users';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ApiService {

    /**
     * View for getting info about request user
     * @returns RequestUser
     * @throws ApiError
     */
    public static retrieveRequestUser(): CancelablePromise<RequestUser> {
        return __request({
            method: 'GET',
            path: `/api/user/`,
        });
    }

    /**
     * View for listing all users in the application.
     *
     * Returns list of users.
     * @returns any
     * @throws ApiError
     */
    public static listUsers({
        page,
        pageSize,
        search,
    }: {
        /** A page number within the paginated result set. **/
        page?: number,
        /** Number of results to return per page. **/
        pageSize?: number,
        /** A search term. **/
        search?: string,
    }): CancelablePromise<{
        count?: number;
        next?: string | null;
        previous?: string | null;
        results?: Array<Users>;
    }> {
        return __request({
            method: 'GET',
            path: `/api/users/`,
            query: {
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }

    /**
     * View for viewing, updating or deleting a single user instance
     *
     * Returns a single user instance
     * @returns User
     * @throws ApiError
     */
    public static retrieveUser({
        id,
    }: {
        /** A unique integer value identifying this bruker. **/
        id: string,
    }): CancelablePromise<User> {
        return __request({
            method: 'GET',
            path: `/api/users/${id}/`,
        });
    }

    /**
     * View for viewing, updating or deleting a single user instance
     *
     * Returns a single user instance
     * @returns User
     * @throws ApiError
     */
    public static updateUser({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this bruker. **/
        id: string,
        requestBody?: User,
    }): CancelablePromise<User> {
        return __request({
            method: 'PUT',
            path: `/api/users/${id}/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * View for viewing, updating or deleting a single user instance
     *
     * Returns a single user instance
     * @returns User
     * @throws ApiError
     */
    public static partialUpdateUser({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this bruker. **/
        id: string,
        requestBody?: User,
    }): CancelablePromise<User> {
        return __request({
            method: 'PATCH',
            path: `/api/users/${id}/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * View for viewing, updating or deleting a single user instance
     *
     * Returns a single user instance
     * @returns void
     * @throws ApiError
     */
    public static destroyUser({
        id,
    }: {
        /** A unique integer value identifying this bruker. **/
        id: string,
    }): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api/users/${id}/`,
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static listNoteEntrys({
        id,
    }: {
        /** A unique integer value identifying this Note. **/
        id: string,
    }): CancelablePromise<Array<any>> {
        return __request({
            method: 'GET',
            path: `/api/users/${id}/notes/`,
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static createNoteEntry({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this Note. **/
        id: string,
        requestBody?: any,
    }): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/users/${id}/notes/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static updateNoteEntry({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this Note. **/
        id: string,
        requestBody?: any,
    }): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api/users/${id}/notes/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Viewset for listing available kitchens
     * @returns KitchenList
     * @throws ApiError
     */
    public static listKitchens(): CancelablePromise<Array<KitchenList>> {
        return __request({
            method: 'GET',
            path: `/api/kitchens/`,
        });
    }

    /**
     * Viewset for getting a specific kitchen instance based on slug
     * @returns Kitchen
     * @throws ApiError
     */
    public static retrieveKitchen({
        slug,
    }: {
        /** A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs. **/
        slug: string,
    }): CancelablePromise<Kitchen> {
        return __request({
            method: 'GET',
            path: `/api/kitchens/${slug}/`,
        });
    }

    /**
     * View for listing all products in application backend
     *
     * Returns list of products.
     * @returns any
     * @throws ApiError
     */
    public static listProducts({
        page,
        pageSize,
    }: {
        /** A page number within the paginated result set. **/
        page?: number,
        /** Number of results to return per page. **/
        pageSize?: number,
    }): CancelablePromise<{
        count?: number;
        next?: string | null;
        previous?: string | null;
        results?: Array<ProductList>;
    }> {
        return __request({
            method: 'GET',
            path: `/api/products/`,
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }

    /**
     * View for listing all products in application backend
     *
     * Returns list of products.
     * @returns ProductList
     * @throws ApiError
     */
    public static createProduct({
        requestBody,
    }: {
        requestBody?: ProductList,
    }): CancelablePromise<ProductList> {
        return __request({
            method: 'POST',
            path: `/api/products/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Viewset for getting a specific product instance based on slug
     * @returns Product
     * @throws ApiError
     */
    public static retrieveProduct({
        slug,
    }: {
        /** A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs. **/
        slug: string,
    }): CancelablePromise<Product> {
        return __request({
            method: 'GET',
            path: `/api/products/${slug}/`,
        });
    }

    /**
     * Viewset for listing all categories and its associated images, does not include children
     * @returns CategoryList
     * @throws ApiError
     */
    public static listCategorys(): CancelablePromise<Array<CategoryList>> {
        return __request({
            method: 'GET',
            path: `/api/categories/`,
        });
    }

    /**
     * Vierset for listing categories and subcategories to be listed in the navbar
     * @returns CategoryNavigationList
     * @throws ApiError
     */
    public static listCategorys1(): CancelablePromise<Array<CategoryNavigationList>> {
        return __request({
            method: 'GET',
            path: `/api/categories/navigation/`,
        });
    }

    /**
     * Viewset for listing a specific category instance
     * @returns Category
     * @throws ApiError
     */
    public static retrieveCategory({
        slug,
    }: {
        /** A slug is a short label for something, containing only letters, numbers, underscores or hyphens. They’re generally used in URLs. **/
        slug: string,
    }): CancelablePromise<Category> {
        return __request({
            method: 'GET',
            path: `/api/categories/${slug}/`,
        });
    }

    /**
     * This viewset takes the category parameter given by the url and find related products
     * @returns ProductListByCategory
     * @throws ApiError
     */
    public static listProductListByCategorys({
        category,
        search,
    }: {
        category: string,
        /** A search term. **/
        search?: string,
    }): CancelablePromise<Array<ProductListByCategory>> {
        return __request({
            method: 'GET',
            path: `/api/categories/${category}/products/`,
            query: {
                'search': search,
            },
        });
    }

    /**
     * @returns MyTokenObtainPair
     * @throws ApiError
     */
    public static createMyTokenObtainPair({
        requestBody,
    }: {
        requestBody?: MyTokenObtainPair,
    }): CancelablePromise<MyTokenObtainPair> {
        return __request({
            method: 'POST',
            path: `/api/auth/token/obtain/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @returns TokenRefresh
     * @throws ApiError
     */
    public static createTokenRefresh({
        requestBody,
    }: {
        requestBody?: TokenRefresh,
    }): CancelablePromise<TokenRefresh> {
        return __request({
            method: 'POST',
            path: `/api/auth/token/refresh/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Viewset for blacklisting used and expired refresh tokens
     * @returns any
     * @throws ApiError
     */
    public static createLogoutAndBlacklistRefreshTokenForUser({
        requestBody,
    }: {
        requestBody?: any,
    }): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/auth/token/blacklist/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * View for creating a user instance
     * @returns UserCreate
     * @throws ApiError
     */
    public static createUserCreate({
        requestBody,
    }: {
        requestBody?: UserCreate,
    }): CancelablePromise<UserCreate> {
        return __request({
            method: 'POST',
            path: `/api/users/create/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a serializer with request.data
     * @returns PasswordReset
     * @throws ApiError
     */
    public static createPasswordReset({
        requestBody,
    }: {
        requestBody?: PasswordReset,
    }): CancelablePromise<PasswordReset> {
        return __request({
            method: 'POST',
            path: `/api/users/password/reset/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Password reset e-mail link is confirmed, therefore
     * this resets the user's password.
     *
     * Accept the following POST parameters: token, uid, new_password1,
     * new_password2
     *
     * Returns the success/fail message.
     * @returns PasswordResetConfirm
     * @throws ApiError
     */
    public static createPasswordResetConfirm({
        uidb64,
        token,
        requestBody,
    }: {
        uidb64: string,
        token: string,
        requestBody?: PasswordResetConfirm,
    }): CancelablePromise<PasswordResetConfirm> {
        return __request({
            method: 'POST',
            path: `/api/users/password/reset/confirm/${uidb64}/${token}/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * View for sending verification email.
     *
     * Accepts the following POST parameters: email
     * Returns the success/fail message.
     * @returns AccountVerification
     * @throws ApiError
     */
    public static createAccountVerification({
        requestBody,
    }: {
        requestBody?: AccountVerification,
    }): CancelablePromise<AccountVerification> {
        return __request({
            method: 'POST',
            path: `/api/users/verify/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Verification e-mail link is confirmed, therefore
     * this sets the user.has_confirmed_email to true.
     *
     * Accept the following POST parameters: token, uid
     *
     * Returns the success/fail message.
     * @returns AccountVerificationConfirm
     * @throws ApiError
     */
    public static createAccountVerificationConfirm({
        uidb64,
        token,
        requestBody,
    }: {
        uidb64: string,
        token: string,
        requestBody?: AccountVerificationConfirm,
    }): CancelablePromise<AccountVerificationConfirm> {
        return __request({
            method: 'POST',
            path: `/api/users/verify/confirm/${uidb64}/${token}/`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static destroyNoteEntry({
        id,
    }: {
        /** A unique integer value identifying this Note. **/
        id: string,
    }): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api/utils/notes/${id}/delete/`,
        });
    }

}