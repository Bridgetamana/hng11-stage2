import axios from 'axios';

const baseUrl = 'https://api.timbu.cloud';
const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const appid = import.meta.env.VITE_API_ID;
const apikey = import.meta.env.VITE_API_KEY;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchProducts = async (page: number): Promise<any> => {
    const { data } = await axios.get(`${baseUrl}/products`, {
        params: {
            organization_id: organizationId,
            page,
            size: 10,
            Appid: appid,
            Apikey: apikey,
        },
    });
    return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchSingleProduct = async (id: string): Promise<any> => {
    const { data } = await axios.get(`${baseUrl}/products/${id}`, {
        params: {
            organization_id: organizationId,
            Appid: appid,
            Apikey: apikey,
        },
    });
    return data;
};
