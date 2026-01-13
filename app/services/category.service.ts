import { fetchAPI } from '../lib/api'
import { Category } from '../types/index'

export const getAllCategories = async (): Promise<Category[]> => {
    return await fetchAPI<Category[]>('/categories');
}