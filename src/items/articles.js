import {GAME, WEB} from '../components/tags';

import {readFileSync} from 'fs';

export const articles = [
  {
    thumb: '/react-logo.png',
    title: 'React is 2020',
    slug: 'react-tutorial',
    blurb: 'Clear and easy to understand with this tutorial.',
    tags: [WEB],
    markdown: readFileSync(__dirname + '/reactCrashCourse.md', 'utf-8'),
  },
  {
    thumb: '/js-cube.png',
    title: 'JS for React',
    slug: 'intro-to-js',
    blurb: 'A crash course in JS you\'ll need for React',
    tags: [WEB],
    markdown: readFileSync(__dirname + '/webCrashCourse.md', 'utf-8'),
  },
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
  {
    thumb: '/battle-sheep-ai-thumb.png',
    title: 'Battle Sheep AI',
    slug: 'battle-sheep-ai',
    blurb: 'A playable version of the board game Battle Sheep. Pits the player against a Min-Max AI opponent.',
    tags: [GAME, WEB],
    markdown: readFileSync(__dirname + '/battleSheepAi.md', 'utf-8'),
  },
];