import {GAME, WEB} from '../components/tags';

import {readFileSync} from 'fs';

export const articles = [
  {
    thumb: 'https://picsum.photos/280',
    title: 'Ace Vox',
    slug: 'ace-vox',
    blurb: 'A WebGL voxel building game. Inspired by Minecraft. Includes rudimentary terrain generation, collision detection, block placement.',
    tags: [GAME, WEB],
    markdown: readFileSync(__dirname + '/aceVox.md', 'utf-8'),
  },
  {
    thumb: 'https://picsum.photos/280/280',
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    blurb: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
    tags: [],
    markdown: '',
  },
]