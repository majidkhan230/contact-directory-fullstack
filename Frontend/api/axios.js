import apiClient from "./index";

const getReq = async (path) => {
try {
    const res = await apiClient.get(path);
    return res;
} catch (error) {
    console.log(error)
}
};



const postReq = async (path,data) => {
try {
    const res = await apiClient.post(path,data);
    return res;
} catch (error) {
    console.log(error)
}
  };

const updReq = async (path,data) => {
try {
    const res = await apiClient.put(path,data);
    return res;
} catch (error) {
    console.log(error)
}
  };


const delReq = async (path) => {
try {
    const res = await apiClient.delete(path);
    return res;
} catch (error) {
    console.log(error)
}
  };
  

  export  {getReq,postReq,updReq,delReq}