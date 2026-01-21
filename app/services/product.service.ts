import { fetchAPI, getAuthHeader } from '../lib/api'
import { Product } from '../types/index'

export const getAllProducts = async (): Promise<Product[]> => {
    return await fetchAPI<Product[]>('/products');
}

export const getProductDetail = async (id: string): Promise<Product> => {
    return await fetchAPI<Product>(`/products/${id}`);
}

export const createProduct = async (data: FormData): Promise<Product> => {
    return await fetchAPI<Product>('/products', {
        body: data,
        headers: {
            ...getAuthHeader()
        },
        method: "POST"
    });
}

export const updateProduct = async (id: string, data: FormData): Promise<Product> => {
    return await fetchAPI<Product>(`/products/${id}`, {
        body: data,
        headers: {
            ...getAuthHeader()
        },
        method: "PUT"
    });
}

export const deleteProduct = async (id: string): Promise<void> => {
    return await fetchAPI<void>(`/products/${id}`, {
        headers: {
            ...getAuthHeader()
        },
        method: "DELETE"
    });
}