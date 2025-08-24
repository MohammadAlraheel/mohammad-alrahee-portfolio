import { defineStore, acceptHMRUpdate } from 'pinia';

import { createClient} from "contentful"; // for dev
import * as contentful from "contentful"; // for SSR, SSG

export const useImageStore = defineStore('image-store',{
  state: () => {
    return {
      spaceID: process.env.CTF_SPACE_ID,
      accToken: process.env.CTF_ACCESS_TOKEN,
      images: [] as any,
      imageLoading: true,
    };
  },
  actions: {
    // get all image
    async getImage() {
      const createClientFunc =
        process.env.NODE_ENV === "development"
          ? createClient
          : contentful.createClient;
      const client = createClientFunc({
        space: this.spaceID as string,
        accessToken: this.accToken as string,
      });
      const response = await client.getEntries({
        content_type: "image",
        order: "-sys.createdAt",
        limit: 100,
      });
      this.imageLoading = false
      this.images = response.items;
      // if (response.items.length > 0) {
     
  
      // }
    },

    // get single project
    // async getSingleProject(id:any) {
    //   this.projectLoading = true
    //   const createClientFunc =
    //     process.env.NODE_ENV === "development"
    //       ? createClient
    //       : contentful.createClient;
    //   const client = createClientFunc({
    //     space: this.spaceID as string,
    //     accessToken: this.accToken as string,
    //   });
    //   const response = await client.getEntries({
    //     content_type: "image",
    //     "fields.slug": id,
    //     limit: 1,
    //   });
    //   if (response.items.length > 0) {
    //     this.projectLoading = false
    //     this.selectedProject = response.items[0];
    //   }
    // },
  },
  getters: {
    image: (state) => state.images,
  },
});
