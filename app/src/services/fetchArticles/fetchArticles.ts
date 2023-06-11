import {ArticlesResponse} from 'types/articles';

const fetchArticles = async (
  searchQuery?: string
): Promise<ArticlesResponse> => {
  const withQueryParam = searchQuery ? `?q=${searchQuery}` : '';
  const response = await fetch(`http://0.0.0.0:8000/v1/news${withQueryParam}`);

  if (!response.ok) {
    throw new Error('response not ok');
  }

  return response.json();
};

export default fetchArticles;
