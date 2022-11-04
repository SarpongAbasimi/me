import { socialsLinks } from './socialsLinks'

export const summary = {
  name: 'Sarpong Abasimi',
  whoami:
    'Hey, I am Sarpong Abasimi, a curious engineer and youtuber. ' +
    'Working currently as a Scala engineer at',
  company: { site: `${socialsLinks.currentCompnaySite}`, name: '47 Degrees' },
  media: socialsLinks.youtube,
  hobbies: 'Outside of programming, I enjoy reading books 📕.',
  passion:
    'Dreaming up ideas and making them come true is where my passion lies, ' +
    'I guess that is why I am an engineer 😅. ' +
    'Honestly I enjoy learning, building and sharing my knowlegde hence why I started ',
  channelName: 'The Show',
  findMe: 'Find me on ',
  mediaNamesAndLinks: [
    { id: 'github', name: 'Github', link: socialsLinks.gitHub },
    { id: 'twitter', name: 'Twitter', link: socialsLinks.twitter },
    { id: 'youtube', name: 'YouTube', link: socialsLinks.youtube },
    { id: 'linkedIn', name: 'LinkedIn', link: socialsLinks.linkedIn },
  ],
}
