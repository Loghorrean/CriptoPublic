export const appConfig = {
    get apiBaseUrl(): string {
        return process.env.REACT_APP_API_BASE_URL || "";
    }
}