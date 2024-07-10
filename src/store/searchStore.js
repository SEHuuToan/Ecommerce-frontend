import {create} from 'zustand';

const useSearchProductStore = create((set) => ({
  searchResults: [],
  query: '',
  setSearchResults: (results) => set({ searchResults: results }),
  setQuery: (query) => set({query}),
  clearQuery: () => set({ query: '' }),
}));

export default useSearchProductStore;
