import { api } from './index.ts';

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
