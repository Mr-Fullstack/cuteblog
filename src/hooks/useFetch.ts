
import {API} from 'src/services/api';

import useSWR, { SWRConfiguration } from 'swr'

type FetchProps = { path: string ; init?: RequestInit }

const swrOptions : SWRConfiguration = {
  revalidateOnFocus:false
}

export function useFetch<Data = any, Error = any>({path,init}:FetchProps) {
  const { data, error, mutate } = useSWR<Data, Error>(path, async url => {
    
    const request = await fetch(url,init);
    return request.json();

  },swrOptions)

return { data, error, mutate }

}