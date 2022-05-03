import {ApiClientFactory} from "../factories";
import {Headers} from "../types";
import {MoneyProvider} from "../MoneyProvider";

export class MoneyProviderFactory {
    private apiClientFactory: ApiClientFactory;

    constructor(baseUrl: string, headers: Headers) {
        this.apiClientFactory = new ApiClientFactory(
            `${baseUrl}/prices/`,
            headers
        )
    };

    public createMoneyProvider(): MoneyProvider {
        return new MoneyProvider(
            this.apiClientFactory.createApiClient()
        );
    }
}