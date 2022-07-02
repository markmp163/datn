/* --- STATE --- */
export interface ProductManagerState {
  listLoading: boolean;
  loadingCategory: boolean;
  params: any;
  listProduct: [];
  total: number;
  listCategory: [];
  categoryChoosed: number;
  nameFilter: string;
}
