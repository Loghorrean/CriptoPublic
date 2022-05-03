import {appConfig} from "../config";
import {MoneyProviderFactory, MoneyProvider, Headers} from "../api";

function getBaseHeaders(): Headers {
    return { "Accept": "application/json" };
}

export function createMoneyProvider(): MoneyProvider {
    const factory = new MoneyProviderFactory(
        appConfig.apiBaseUrl,
        getBaseHeaders()
    );
    return factory.createMoneyProvider();
}