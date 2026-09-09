export type ProjectInfo = {
  slug: string
  title: string;
  description: string;
  imgUrl: string;
  imgAlt?: string;
  className?: string;
}

export const PROJECTS: ProjectInfo[] = [
  {
    slug: 'test',
    title: 'test project',
    description: 'This project will be removed before final release',
    imgUrl: '',
  },
  {
    slug: 'portfolio-site',
    title: 'portfolio site project',
    description: `The development history behind the creation of this website. 
                  Created in my spare time over the summer of 2025 using raw JavaScript, 
                  CSS, and HTML to create something that is both dynamic and responsive`,
    imgUrl: '/projects/personal-site/article-feed-sketch.jpg',
    imgAlt: ''
  },
  {
    slug: 'blueprint-website-v2',
    title: 'Blueprint website redesign',
    description: 'As a junior developer I helped work with others to redo the club website',
    imgUrl: '',
    imgAlt: ''
  },
  {
    slug: 'cip-cta',
    title: 'Full stack development at CIP',
    description: `Creation of a database, server, and content creation tool for internal use at CIP Modular`,
    imgUrl: '',
    imgAlt: ''
  },
]