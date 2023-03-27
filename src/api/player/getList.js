// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from '../../db/model/player';
import PlayerSkill from '../../db/model/playerSkill';

export default async (req, res) => {
  try {
    const players = await Player.findAll({ include: PlayerSkill });
    res.status(200).send(players);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Unable to fetch player list',
    });
  }
};
