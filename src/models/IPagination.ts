export interface IPaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export interface IPaginationOptions {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}
