const positions = ['defender', 'midfielder', 'forward'];
const skills = ['defense', 'attack', 'speed', 'strength', 'stamina'];

export const playerValidation = req => {
  const { name, position, playerSkills } = req;

  if (!name || !position || !playerSkills) {
    const response = `Player ${
      name === '' ? 'name' : position === '' ? 'position' : 'playerSkills'
    } can not be empty!`;
    return response;
  }
  if (!positions.includes(position)) {
    const response = `Invalid position value "${position}". Allowed positions are: [${positions}]`;
    return response;
  }
};

export const playerSkillValidation = playerSkills => {
  let response;
  playerSkills.map(skillItem => {
    !skills.includes(skillItem.skill)
      ? (response = `Invalid skill "${skillItem.skill}". Allowed skills are: [${skills}]`)
      : null;
  });
  return response;
};
