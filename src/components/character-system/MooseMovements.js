const MoveMoose = (entities, { input }) => {
  const { payload } = input.find((x) => x.name === "onKeyDown") || {};

  const mainCharacter = entities["mainCharacter"];

  const charSize = 100;
  // Setting our Boundaries for our moose!
  // We know our scene is 800px by 600px
  // This tells us that to stay inside we need to stay at half those values
  const rightBound = 800 - charSize / 2;
  const leftBound = charSize / 2;
  const topBorder = charSize / 2;
  const downBorder = 600 - charSize / 2;

  if (payload) {
    // MOve right
    if (mainCharacter.x < rightBound && payload.code === "ArrowRight") {
      mainCharacter.x = mainCharacter.x + 10;
    }

    if (mainCharacter.y > topBorder && payload.code === "ArrowUp") {
      mainCharacter.y = mainCharacter.y - 10;
    }

    if (mainCharacter.x > leftBound && payload.code === "ArrowLeft") {
      mainCharacter.x = mainCharacter.x - 10;
    }

    if (mainCharacter.y < downBorder && payload.code === "ArrowDown") {
      mainCharacter.y = mainCharacter.y + 10;
    }
  }

  return entities;
};

export { MoveMoose };
