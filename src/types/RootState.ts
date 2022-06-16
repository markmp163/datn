import { CartManagerState } from './../app/pages/CartPage/slice/types';
import { HomeManagerState } from './../app/pages/HomePage/slice/types';
import { LoginManagerState } from 'app/pages/LoginPage/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
import { SignUpManagerState } from 'app/pages/SignUpPage/slice/types';
import { ProductManagerState } from 'app/pages/ProductPage/slice/types';
import { ProductDetailManagerState } from 'app/pages/ProductDetailPage/slice/types';
import { ProfilePageManagerState } from 'app/pages/ProfilePage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  loginManager: LoginManagerState;
  homeManager: HomeManagerState;
  signUpManager: SignUpManagerState;
  productManager: ProductManagerState;
  productDetailManager: ProductDetailManagerState;
  cartManager: CartManagerState;
  profilePageManager: ProfilePageManagerState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
