import {useQuery} from '@tanstack/react-query';
import fetchArticles from 'services/fetchArticles';

function useFetchArticles(searchQuery?: string) {
  const queryKey = searchQuery ? ['articles', searchQuery] : ['articles'];

  return useQuery(queryKey, () => fetchArticles(searchQuery), {
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export default useFetchArticles;
