import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  User: {
    UserLogin: `${apiURL}auth/login`,
    GoogleLogin: `${apiURL}auth/login/google`,
    UserRegister: `${apiURL}auth/signup`,
    UserInfo : `${apiURL}user/info`,
    UserAddresses : `${apiURL}user/addresses`,
    UserAddAddresses : `${apiURL}user/addAddresses`,
    UserUpdateAddresses : `${apiURL}user/updateAddresses`,
    UserDeleteAddresses : `${apiURL}user/deleteAddresses`,
    GetTickets : `${apiURL}user/supportTicketsList`,
    supportTicketUrl : `${apiURL}user/supportTicketDetails`,
    TicketReply : `${apiURL}user/ticketReply`,
    UserUpdate : `${apiURL}profile/update`
  },
  Products: {
    GetProducts: `${apiURL}products/home`,
    GetCategoryWiseProducts: `${apiURL}products/categoryProducts`,
    PostSingelProducts: `${apiURL}products/details`,
    Reviews:`${apiURL}reviews/submit`
  },
  Wishlist: {
    PostWishlist: `${apiURL}wishlists-add-product`,
    GetAllWishlist: `${apiURL}wishlists`,
    DeleteWishlist: `${apiURL}wishlists-remove-product`
  },
  Cart: {
    PostCart: `${apiURL}cart/add`,
    GetCart: `${apiURL}carts/list`,
    DeleteCart: `${apiURL}cart/delete`,
    UpdateCart: `${apiURL}cart/update`,
    AllCartDelete : `${apiURL}allCartDelete`
  },
  Checkout: { 
    PostCheckout: `${apiURL}checkout`,
    PlaceOrder: `${apiURL}order/store`,
    stripeCharge: `${apiURL}stripe/charge`,
    GetPaymentTypes: `${apiURL}payment-types` ,
    Countries : `${apiURL}countries`,
    States : `${apiURL}states-by-country`,
    city : `${apiURL}cities-by-state`
  },
  Dashboard:{
    OrdersList:`${apiURL}order/userOrderList`,
    OrderDetail:`${apiURL}order/userOrderDetail`,
    OrderSummary:`${apiURL}order/userOrderSummary`,
    TrackOrderData:`${apiURL}track-order`
  },
  ApplyCoupon: { 
    PostApplyCoupon: `${apiURL}coupon-apply`,
    RemoveCoupon: `${apiURL}coupon-remove`,
   },
  ShippingApi:{
    Pincode:"https://pre-alpha.ithinklogistics.com/api_v3/pincode/check.json",
    CreateOrder:"https://pre-alpha.ithinklogistics.com/api_v3/order/add.json",
    TrackOrder:"https://pre-alpha.ithinklogistics.com/api_v3/order/track.json",
    PrintShipmnet:"https://pre-alpha.ithinklogistics.com/api_v3/shipping/label.json",
    Manifest:"https://pre-alpha.ithinklogistics.com/api_v3/shipping/manifest.json",
    OrderCancel:"https://pre-alpha.ithinklogistics.com/api_v3/order/cancel.json",
  }, 
  Subscribe: { SubscribePost: `${apiURL}Subscribe` },
  Contact: { PostContact: `${apiURL}ticket-support` },
  AllCategory : {GetAllCategory:`${apiURL}allCategory`},
  AllBrands : {GetAllBrands:`${apiURL}brands`},
  SearchData : {SearchAllData:`${apiURL}mainAllSearch`},
  bannersData : {bannersData:`${apiURL}banners`},
  BestSellers : {BestSellersData:`${apiURL}products/best-seller`},
  AllHomeCard : {GetHomeCard:`${apiURL}homeCard`},

};

export { urlConstant as default };
