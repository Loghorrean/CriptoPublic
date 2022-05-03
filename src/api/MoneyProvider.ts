import {ApiClient} from "./clients";

export class MoneyProvider {
    constructor(private readonly apiClient: ApiClient) {
    }

    getPrices(currency: string) {
        return this.apiClient.get(currency);
    }
}