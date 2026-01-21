import { fetchAPI, getAuthHeader } from '../lib/api';
import { Bank } from '../types/index';

export const getAllBank = async (): Promise<Bank[]> => {
    return await fetchAPI<Bank[]>('/banks');
}

export const createBankOption = async (data: Partial<Bank>): Promise<Bank> => {
    return await fetchAPI<Bank>('/banks', {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            ...getAuthHeader(),
            "content-type": "application/json"
        }
    });
}

export const updateBankOption = async (id: string, data: Partial<Bank>): Promise<Bank> => {
    return await fetchAPI<Bank>(`/banks/${id}`, {
        body: JSON.stringify(data),
        method: "PUT",
        headers: {
            ...getAuthHeader(),
            "content-type": "application/json"
        }
    });
}

export const deleteBankOption = async (id: string): Promise<void> => {
    return await fetchAPI<void>(`/banks/${id}`, {
        headers: {
            ...getAuthHeader()
        },
        method: "DELETE"
    });
}