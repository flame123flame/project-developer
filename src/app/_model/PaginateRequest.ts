export class PaginateRequest {
  page: number = 0
  length: number = 10
  sort: PaginateSort[] = []
  filter: PaginateFilter[] = []
}

export class PaginateRequestReport {
  page: number = 0
  length: number = 100000
  sort: PaginateSort[] = []
  filter: PaginateFilter[] = []
}

export class PaginateFilter {
  column: string
  op: string
  value: string
}

export class PaginateSort {
  column: string
  order: string
}