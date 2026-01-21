import { fetchAPI, getAuthHeader } from '../lib/api'
import { Transaction } from '../types/index'

export const transactionCheckout = async (form: FormData): Promise<Transaction> => {
    return await fetchAPI<Transaction>('/transactions/checkout', {
        method: "POST",
        body: form
    });
}

export const getTransactionByID = async (id: string): Promise<Transaction> => {
    return await fetchAPI<Transaction>(`/transactions/${id}`);
}

export const getAllTransaction = async (): Promise<Transaction[]> => {
    return await fetchAPI<Transaction[]>(`/transactions`, {
        headers: {
            ...getAuthHeader()
        }
    });
}

export const updateTransaction = async (id: string, data: FormData): Promise<Transaction[]> => {
    return await fetchAPI<Transaction[]>(`/transactions/${id}`, {
        method: "PUT",
        body: data,
        headers: {
            ...getAuthHeader()
        }
    })
}

export const deleteTransactions = async (id: string): Promise<void> => {
    return await fetchAPI<void>(`/transactions/${id}`, {
        method: "DELETE",
        headers: {
            ...getAuthHeader()
        }
    });
}
