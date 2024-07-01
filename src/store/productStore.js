import create from 'zustand';
import { axiosGet } from '../utils/axiosUtils';

const useProductStore = create((set) => ({
    products: [],
    selectedProduct: null,
    fetchProducts: async () => {
      const res = await axiosGet('all-product');
      const products = res.data;
      set({ products });
    },
    selectProduct: (id) => {
      set((state) => ({
        selectedProduct: state.products.find((product) => product.id === id) || null
      }));
    }
  }));
export default useProductStore;