# Battle Sheep AI

<div style="padding-top: 90%; position: relative;">
  <iframe 
    style="border:none; position:absolute; top:0; left:0; width: 100%; height: 100%;"
    title="Battle Sheep AI"
    src="/battle-sheep-ai/index.html"
  >
  </iframe>
</div>

[If the text is too small, click here to go to the fullscreen version](/battle-sheep-ai/index.html)

[Link to the English rules](/battle-sheep-rules-en.png)

[Link to full rules PDF](http://www.blueorangegames.eu/wp-content/uploads/2017/05/BATTLE-SHEEP_rules_ML.pdf)

(Battle Sheep is Trademarked by Blue Orange games, and designed by Francesco Rotta)

### About this Project

This was created as the final project for the Artificial Intelligence course at Grove City. This project was completed in collaboration with the talented Emily Wasylenko. The source code can be found on [GitHub](https://github.com/samcarlinone/BattleSheepAI)

### Technical Details

The AI for this project was created using a custom implementation of the Min-Max algorithm with Alpha-Beta pruning. Unfortunately, in the game of Battle Sheep the opening moves are very important. We use a time constraint to keep the program feeling responsive, combined with additional heuristics that try to search more likely paths first. However, the AI is vulnerable to moves in the very early game which setup unfavorable late game states (a common problem with this class of algorithm).

The UI is implemented using an SVG generation system, built on top of a custom hexagon coordinate system. This hexagon coordinate system converts back and forth between hexagonal coordinates and cartesian coordinates for rendering. However, the hexagon coordinates are a homebrew system which is essentially a scaled cartesian coordinate system, which gives nicer decimal values for odd columns. During work on the project I came across more robust ways of representing hexagonal grids, which served as another reminder not to re-implement non-trivial systems without considering using existing implementations. 
