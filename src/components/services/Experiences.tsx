import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelExperience from "../models/ModelExperience";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}`; ///experiences

const Experiences = {
    Create: async (Data: ModelExperience) => {
        return await Post(API_URL, Data);
    },
    Read: async () => {
        return await Get(API_URL);
    },
    ReadOne: async (id: string) => {
        return await Get(`${API_URL}/${id}`);
    },
    Update: async (Data: ModelExperience) => {
        return await Put(API_URL, Data);
    },
    Delete: async (id: string) => {
        return await Delete(API_URL, id);
    },
};

export default Experiences;