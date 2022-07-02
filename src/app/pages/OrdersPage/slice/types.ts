/* --- STATE --- */
export interface OrdersManagerState {
  loading: boolean;
  data: any;
  params: { page: number; size: number };
}
