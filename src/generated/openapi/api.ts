/* tslint:disable */
/* eslint-disable */
/**
 * Energy Australia Coding Test API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Band
 */
export interface Band {
    /**
     * 
     * @type {string}
     * @memberof Band
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Band
     */
    'recordLabel'?: string;
}
/**
 * 
 * @export
 * @interface MusicFestival
 */
export interface MusicFestival {
    /**
     * 
     * @type {string}
     * @memberof MusicFestival
     */
    'name'?: string;
    /**
     * 
     * @type {Array<Band>}
     * @memberof MusicFestival
     */
    'bands'?: Array<Band>;
}

/**
 * FestivalsApi - axios parameter creator
 * @export
 */
export const FestivalsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPIFestivalsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/festivals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FestivalsApi - functional programming interface
 * @export
 */
export const FestivalsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FestivalsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aPIFestivalsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MusicFestival>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aPIFestivalsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FestivalsApi - factory interface
 * @export
 */
export const FestivalsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FestivalsApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aPIFestivalsGet(options?: any): AxiosPromise<Array<MusicFestival>> {
            return localVarFp.aPIFestivalsGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FestivalsApi - object-oriented interface
 * @export
 * @class FestivalsApi
 * @extends {BaseAPI}
 */
export class FestivalsApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FestivalsApi
     */
    public aPIFestivalsGet(options?: AxiosRequestConfig) {
        return FestivalsApiFp(this.configuration).aPIFestivalsGet(options).then((request) => request(this.axios, this.basePath));
    }
}


