import { fetchAPI, getAuthHeader } from '../lib/api'
import { Category } from '../types/index'

export const getAllCategories = async (): Promise<Category[]> => {
    return await fetchAPI<Category[]>('/categories');
}

export const createCategory = async (data: FormData): Promise<Category> => {
    return await fetchAPI<Category>('/categories', {
        body: data,
        method: "POST",
        headers: {
            ...getAuthHeader()
        }
    });
}

export const updateCategory = async (id: string, data: FormData): Promise<Category> => {
    return await fetchAPI<Category>(`/categories/${id}`, {
        body: data,
        method: "PUT",
        headers: {
            ...getAuthHeader()
        }
    });
}

export const deleteCategory = async (id: string): Promise<void> => {
    return await fetchAPI<void>(`/categories/${id}`, {
        headers: {
            ...getAuthHeader()
        },
        method: "DELETE"
    });
}