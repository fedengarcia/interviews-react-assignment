export interface PaginationOption {
    label: string;
    value: string;
}


export interface SearchParamsProps{ 
    setSearchParams: (params: URLSearchParams) => void;
    searchParams: URLSearchParams;
    setLimitSelected: (string) => void
}

export const PAGINATION_OPTIONS: PaginationOption[];