import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  IconDefinition,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export let socialsLinks: {
  gitHub: string
  linkedIn: string
  youtube: string
  twitter: string
  byMeCoffee: string
  currentCompnaySite?: string
  medium: string
} = {
  gitHub: 'https://github.com/SarpongAbasimi',
  linkedIn: 'https://uk.linkedin.com/in/sarpong-abasimi-353380163',
  youtube: 'https://www.youtube.com/channel/UCIvL4BDxk3MrKjTF1avFmQQ/videos',
  twitter: 'https://twitter.com/sarpongTech',
  byMeCoffee: 'https://www.buymeacoffee.com/theshow',
  currentCompnaySite: 'https://www.47deg.com/',
  medium: 'https://medium.com/@1550707241489',
}

export const navSocials: {
  id: string
  fontAwesonIcon: IconDefinition
  link: string
}[] = [
  {
    id: 'heart',
    fontAwesonIcon: faHeart,
    link: socialsLinks.byMeCoffee,
  },
  {
    id: 'twitter',
    fontAwesonIcon: faTwitter,
    link: socialsLinks.twitter,
  },
  {
    id: 'github',
    fontAwesonIcon: faGithub,
    link: socialsLinks.gitHub,
  },
  {
    id: 'youtube',
    fontAwesonIcon: faYoutube,
    link: socialsLinks.youtube,
  },
  {
    id: 'linkedIn',
    fontAwesonIcon: faLinkedinIn,
    link: socialsLinks.linkedIn,
  },
  {
    id: 'medium',
    fontAwesonIcon: faMedium,
    link: socialsLinks.medium,
  },
]
