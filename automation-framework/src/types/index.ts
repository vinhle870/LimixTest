export interface ApiResponse {
    status: number;
    message: string;
    data?: any;
}

export interface ApiRequest {
    body: any;
    params: Record<string, string>;
    query: Record<string, string>;
}