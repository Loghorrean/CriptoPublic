import {Headers} from "../types/Headers";
import {ApiClient} from "../clients/ApiClient";

export class ApiClientFactory {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: Headers = {},
    ) {}

    createApiClient(): ApiClient {
        return new ApiClient(this.baseUrl, this.headers);
    }

    createAuthorizedApiClient(authToken: string) {
        return new ApiClient(this.baseUrl, this.headers, authToken);
    }
}