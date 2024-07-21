import axios from 'axios';

const baseUrl = 'https://api.timbu.cloud';
const organizationId = 'f03d061f380f467eaf3cd09b90ef8b20';
const appid = 'ES42I1L9BSDSVH2';
const apikey = 'a81ec612e74d4189a464e2f3e35ab17d20240713160038463229';

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
