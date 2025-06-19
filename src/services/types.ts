export interface GetAppsType {
    appName?: string;
    category?: string;
    pageNumber?: number;
    pageSize: 25 | 50;
}

export interface Application {
    appId: string;
    appName: string;
    appSources: string[];
    category: string;
}

export interface AppsResponse {
    "appRows": Application[];
    totalCount: number;
}