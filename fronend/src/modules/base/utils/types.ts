type ApiResponseStatus = "success" | "error" | 200;

export interface ApiResponse<T> {
  status: ApiResponseStatus;
  data?: T;
}

export interface ApiErrorResponse {
  code: number;
  data?: unknown;
}
