
import api from 'src/services/api';

import useSWR, { SWRConfiguration } from 'swr'

type FetchProps = { path: string ; init?: RequestInit }

const swrOptions : SWRConfiguration = {
  revalidateOnFocus:false
}

export function useFetch<Data = any, Error = any>({path,init}:FetchProps) {
  const { data, error, mutate } = useSWR<Data, Error>(path, async url => {
    
    const response = await api.request(url,init);

    return response.data;

  },swrOptions)

return { data, error, mutate }

}