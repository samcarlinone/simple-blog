import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

const main = document.getElementById('main');

const articles = [
  {
    thumb: 'https://picsum.photos/320',
    title: 'Ace Vox',
    blurb: 'A WebGL voxel building game. Inspired by Minecraft. Includes rudimentary terrain generation, collision detection, block placement.',
  },
  {
    thumb: 'https://picsum.photos/320/320',
    title: 'Lorem Ipsum',
    blurb: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
]

ReactDOM.render(
  <>
    {articles.map(a => <Card article={a} key={a.title} />)}
  </>,
  main
);