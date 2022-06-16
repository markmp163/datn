/* --- STATE --- */
export interface ProductManagerState {
  listLoading: boolean;
  loadingCategory: boolean;
  params: any;
  listProduct: [];
  total: number;
  listCategory: [];
  listCategoryChoosed: any;
  price: [];
  nameFilter: string;
}
