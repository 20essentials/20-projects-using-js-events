import '@/styles/ContainerCards.css';
import { InteractiveCard } from './InteractiveCard';
import { withBase } from '@/utils/functionsTs';

const arrayOfSliders = [
  {
    title: 'Rodadores',
    repo: 'https://github.com/20essentials/project-000-409',
    web: 'https://20essentials.github.io/project-000-409/',
    localImage: '/assets/n409.avif',
    id: '001'
  },
  {
    title: 'Omg',
    repo: 'https://github.com/20essentials/project-000-375',
    web: 'https://20essentials.github.io/project-000-375/',
    localImage: '/assets/n375.avif',
    id: '002'
  },
  {
    title: 'Rumblas',
    repo: 'https://github.com/20essentials/project-000-393',
    web: 'https://20essentials.github.io/project-000-393/',
    localImage: '/assets/n393.avif',
    id: '003'
  },
  {
    title: 'Destello Fugaz',
    repo: 'https://github.com/20essentials/project-000-403',
    web: 'https://20essentials.github.io/project-000-403/',
    localImage: '/assets/n403.avif',
    id: '004'
  },
  {
    title: 'Destello',
    repo: 'https://github.com/20essentials/project-000-415',
    web: 'https://20essentials.github.io/project-000-415/',
    localImage: '/assets/n415.avif',
    id: '005'
  },
  {
    title: 'Cantidad',
    repo: 'https://github.com/20essentials/project-000-427',
    web: 'https://20essentials.github.io/project-000-427/',
    localImage: '/assets/n427.avif',
    id: '006'
  },
  {
    title: 'Par Effect',
    repo: 'https://github.com/20essentials/project-000-434',
    web: 'https://20essentials.github.io/project-000-434/',
    localImage: '/assets/n434.avif',
    id: '007'
  },
  {
    title: 'Effects With Hover',
    repo: 'https://github.com/20essentials/project-000-429',
    web: 'https://20essentials.github.io/project-000-429/',
    localImage: '/assets/n429.avif',
    id: '008'
  },
  {
    title: 'Chim',
    repo: 'https://github.com/20essentials/project-000-442',
    web: 'https://20essentials.github.io/project-000-442/',
    localImage: '/assets/n442.avif',
    id: '009'
  },
  {
    title: 'Destellin',
    repo: 'https://github.com/20essentials/project-000-407',
    web: 'https://20essentials.github.io/project-000-407/',
    localImage: '/assets/n407.avif',
    id: '010'
  },
  {
    title: 'Kick',
    repo: 'https://github.com/20essentials/project-000-413',
    web: 'https://20essentials.github.io/project-000-413/',
    localImage: '/assets/n413.avif',
    id: '011'
  },
  {
    title: 'Syntra',
    repo: 'https://github.com/20essentials/project-000-474',
    web: 'https://20essentials.github.io/project-000-474/',
    localImage: '/assets/n474.avif',
    id: '012'
  },
  {
    title: 'Left 4 Dead 2',
    repo: 'https://github.com/20essentials/project-000-546',
    web: 'https://20essentials.github.io/project-000-546/',
    localImage: '/assets/n546.avif',
    id: '013'
  },
  {
    title: 'Gusano',
    repo: 'https://github.com/20essentials/project-000-564',
    web: 'https://20essentials.github.io/project-000-564/',
    localImage: '/assets/n564.avif',
    id: '014'
  },
  {
    title: 'Scratch Image',
    repo: 'https://github.com/20essentials/project-000-568',
    web: 'https://20essentials.github.io/project-000-568/',
    localImage: '/assets/n568.avif',
    id: '015'
  },
  {
    title: 'Fond',
    repo: 'https://github.com/20essentials/project-000-536',
    web: 'https://20essentials.github.io/project-000-536/',
    localImage: '/assets/n536.avif',
    id: '016'
  },
  {
    title: 'Simple View Transitions',
    repo: 'https://github.com/20essentials/project-000-844',
    web: 'https://20essentials.github.io/project-000-844/',
    localImage: '/assets/n844.avif',
    id: '017'
  },
  {
    title: 'Autocomplete',
    repo: 'https://github.com/20essentials/project-000-785',
    web: 'https://20essentials.github.io/project-000-785/',
    localImage: '/assets/n785.avif',
    id: '018'
  },
  {
    title: 'Sort',
    repo: 'https://github.com/20essentials/project-000-794',
    web: 'https://20essentials.github.io/project-000-794/',
    localImage: '/assets/n794.avif',
    id: '019'
  },
  {
    title: 'Drag and Drop',
    repo: 'https://github.com/20essentials/project-000-804',
    web: 'https://20essentials.github.io/project-000-804/',
    localImage: '/assets/n804.avif',
    id: '020'
  }
];

export function ContainerCards() {
  return (
    <article className='container-cards'>
      {arrayOfSliders.map(({ title, repo, id, localImage }) => (
        <InteractiveCard>
          <a href={repo} className='am-anchor' key={id}>
            <img src={withBase(localImage)} alt={title} />
          </a>
        </InteractiveCard>
      ))}
    </article>
  );
}
