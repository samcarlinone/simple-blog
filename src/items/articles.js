import {GAME, WEB} from '../components/tags';

import {readFileSync} from 'fs';

export const articles = [
  {
    thumb: '/ace-vox-thumb.png',
    title: 'Ace Vox',
    slug: 'ace-vox',
    blurb: 'A WebGL voxel building game. Inspired by Minecraft. Includes rudimentary terrain generation, collision detection, block placement.',
    tags: [GAME, WEB],
    markdown: readFileSync(__dirname + '/aceVox.md', 'utf-8'),
  },
  {
    thumb: '/fractured-snake-thumb.png',
    title: 'Fractured Snake',
    slug: 'fractured-snake',
    blurb: 'The only polished game I have ever released. Still available to play on Kongregate.',
    tags: [GAME, WEB],
    markdown: readFileSync(__dirname + '/fracturedSnake.md', 'utf-8'),
  },
];