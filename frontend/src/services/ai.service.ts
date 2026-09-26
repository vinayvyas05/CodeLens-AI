import api from "./api";

export const fetchResponse = async(prompt: string): Promise<string> => {
    console.log("Calling:", `${api.defaults.baseURL}/get-response`);
    const response = await api.post('/get-response', {prompt}); 
    return response.data.data; 
}