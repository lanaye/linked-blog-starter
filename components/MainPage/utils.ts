export const getInfo = (content) => {
  const parts = content.split('<h5></h5>');
  let sessions = parts[0].replace('<p>', '').replace('</p>', '').split(';\n');
  sessions.pop();
  sessions = sessions.map((session) => {
    const sessionParts = session.split(',');
    return {
      name: sessionParts[0],
      date: sessionParts[1],
      url: sessionParts[2],
    };
  })

  const info = parts[1].replace('<p>', '').replace('</p>', '').replace('\n', '').split('-');
  info.pop();

  let players = parts[2].replace('<p>', '').replace('</p>', '').replace('\n', '').split(';\n');
  players.pop();
  players = players.map((player) => {
    const playerParts = player.split(',,');
    return {
      name: playerParts[0],
      url: playerParts[1],
      src: playerParts[2],
      additionalText: playerParts[3],
    };
  })

  let npcs = parts[3].replace('<p>', '').replace('</p>', '').replace('\n', '').split(';\n');
  npcs = npcs.map((npc) => {
    const npcParts = npc.split(',');
    return {
      name: npcParts[0],
      url: npcParts[1],
      src: npcParts[2],
      additionalText: npcParts[3],
    };
  });

  return {
    sessions,
    npcs,
    players,
    info: {
      date: info[0],
      dayTime: info[1]
    }
  }
}
