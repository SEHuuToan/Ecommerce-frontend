import { create } from 'zustand';
import { axiosGetBlog } from '../utils/axiosUtils';

const useBlogStore = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    try {
      const res = await axiosGetBlog("all-blog");
      set({ blogs: res.data });
    } catch (error) {
      console.error("Fail to get list of blog", error);
    }
  },
}));

export default useBlogStore;
