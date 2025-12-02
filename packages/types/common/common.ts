export type PaginatedResult = {
  pagination: {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

export type CommonResult = {
  message: string,
  status: string
}