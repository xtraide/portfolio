
import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelProject from "../models/ModelProject";


const API_URL = `${import.meta.env.VITE_API_URL}`;// /projects

const Projects = {
    Create: async (Data: ModelProject) => {
        return await Post(API_URL, Data);
    },
    Read: async () => {
        return await Get(API_URL);
    },
    ReadOne: async (id: string) => {
        return await Get(`${API_URL}/${id}`);
    },
    Update: async (Data: ModelProject) => {
        return await Put(API_URL, Data);
    },
    Delete: async (id: string) => {
        return await Delete(API_URL, id);
    },

};

export default Projects;
