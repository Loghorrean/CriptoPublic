import {Headers} from "../types/Headers";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export class ApiClient {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: Headers = {},
        private readonly authToken: string = "",
    )
    {}

    async get(endpoint: string = "", params?: object): Promise<any> {
        const client = this.createClient(params);
        const response = await client.get(endpoint);
        return response.data;
    }

    async post(params: object, data?: any): Promise<any> {
        const client = this.createClient(params);
        const response = await client.post("", data);
        return response.data;
    }

    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            headers: this.headers,
            params: params
        };
        if (this.authToken) {
            config.headers!.Authorization = `Bearer ${this.authToken}`;
        }
        return axios.create(config);
    }
}