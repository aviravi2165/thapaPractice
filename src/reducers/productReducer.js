export const productReducer = (state, action) => {
  switch (action.type) {
    case 'API_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_PRODUCTS':
      const featuredProducts = action.payload.filter(
        (prd) => prd.featured === true
      );
      return {
        ...state,
        isLoading: false,
        featuredProducts,
        products: action.payload,
      };
    case 'API_ERROR':
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case 'SET_SINGLE_LOADING':
      return {
        ...state,
        isSingleProductLoading: true,
      };
    case 'SET_SINGLE_PRODUCT':
      return {
        ...state,
        singleProduct: action.payload,
        isSingleProductLoading: false,
      };
    case 'SET_SINGLE_ERROR':
      return {
        ...state,
        isSingleProductError: true,
        isSingleProductLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
