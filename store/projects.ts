import { defineStore, acceptHMRUpdate } from 'pinia';

import { createClient} from "contentful"; // for dev
import * as contentful from "contentful"; // for SSR, SSG

export const useProjectsStore = defineStore('projects-store',{
  state: () => {
    return {
      spaceID: process.env.CTF_SPACE_ID,
      accToken: process.env.CTF_ACCESS_TOKEN,
      projectList: [] as any,
      selectedProject: "" as any,
      projectLoading: false,
      projectsLoading: true,
    };
  },
  actions: {
    // get all projects
    async getProjects() {
      const createClientFunc =
        process.env.NODE_ENV === "development"
          ? createClient
          : contentful.createClient;
      const client = createClientFunc({
        space: this.spaceID as string,
        accessToken: this.accToken as string,
      });
      const response = await client.getEntries({
        content_type: "projects",
        order: "-sys.createdAt",
        limit: 100,
      });
      if (response.items.length > 0) {
        this.projectsLoading = false
        this.projectList = response.items;
      }
    },

    // get single project
    async getSingleProject(id:any) {
      this.projectLoading = true
      const createClientFunc =
        process.env.NODE_ENV === "development"
          ? createClient
          : contentful.createClient;
      const client = createClientFunc({
        space: this.spaceID as string,
        accessToken: this.accToken as string,
      });
      const response = await client.getEntries({
        content_type: "projects",
        "fields.slug": id,
        limit: 1,
      });
      if (response.items.length > 0) {
        this.projectLoading = false
        this.selectedProject = response.items[0];
      }
    },
  },
  getters: {
    projects: (state) => state.projectList,
  },
});
