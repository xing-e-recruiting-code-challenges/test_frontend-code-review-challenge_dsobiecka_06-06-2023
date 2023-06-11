import {ArticlesResponse} from 'types/articles';

const mockArticles: ArticlesResponse = {
  articles: [
    {
      source: {
        id: null,
        name: 'Youtube.com',
      },
      author: null,
      title:
        'Watch live: NASA to conduct historic first all-female spacewalk - Washington Post',
      description:
        'NASA astronauts Christina Koch and Jessica Meir walk outside the International Space Station to replace a damaged battery unit just months after NASA had to ...',
      url: 'https://www.youtube.com/watch?v=KGRl_-wWMD0',
      urlToImage: 'https://i.ytimg.com/vi/KGRl_-wWMD0/hqdefault_live.jpg',
      publishedAt: '2019-10-18T11:11:55Z',
      content:
        'NASA astronauts Christina Koch and Jessica Meir walk outside the International Space Station to replace a damaged battery unit just months after NASA had to cancel an all-female spacewalk because of a spacesuit-sizing problem. At a media briefing before the s… [+494 chars]',
      id: '057bca12-982e-42cb-9854-0d3ff96523e7',
    },
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Jon Porter',
      title:
        'Samsung says fingerprint security fix is coming as early as next week - The Verge',
      description:
        'Samsung says that it plans to release a patch for its in-display fingerprint sensors as early as next week. It follows reports that the biometric security method could be compromised by certain screen protectors.',
      url: 'https://www.theverge.com/2019/10/18/20920522/samsung-galaxy-s10-note-10-fingerprint-recognition-patch-next-week-bug-biometric-security',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/0S8WzgMFefP2HzwqwrSJi35l_0g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/14843648/akrales_190228_3255_0065.jpg',
      publishedAt: '2019-10-18T10:45:43Z',
      content:
        'And advises removing silicone screen protecting cases for now\r\nPhoto by Amelia Holowaty Krales / The Verge\r\nSamsung says that it plans to release a patch for its phones in-display fingerprint sensors as early as next week, after reports emerged that the biome… [+963 chars]',
      id: 'a82ae44b-2597-402e-af6a-d1e5640764b3',
    },
  ],
};

export default mockArticles;
