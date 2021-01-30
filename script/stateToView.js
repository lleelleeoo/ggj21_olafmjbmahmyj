getStateToView = ({health, mind, sleep}) => {
  let statesToView = {
    health: 'норм',
    sleep: 'норм',
    mind: 'норм',
  }

  if(health >= 80) {
    statesToView[health] = 'норм';
  } else if (health <= 80 && health > 50) {
    statesToView[health] = 'средне';
  } else if (health <= 50 && health > 0) {
    statesToView[health] = 'плохо';
  } else if (health = 0) {
    statesToView[health] = 'потеряно';
  }

  if(mind >= 80) {
    statesToView[mind] = 'норм';
  } else if (mind <= 80 && mind > 50) {
    statesToView[mind] = 'средне';
  } else if (mind <= 50 && mind > 0) {
    statesToView[mind] = 'плохо';
  } else if (mind = 0) {
    statesToView[mind] = 'потеряно';
  }

  if(sleep >= 80) {
    statesToView[sleep] = 'норм';
  } else if (sleep <= 80 && sleep > 50) {
    statesToView[sleep] = 'средне';
  } else if (sleep <= 50 && sleep > 0) {
    statesToView[sleep] = 'плохо';
  } else if (sleep = 0) {
    statesToView[sleep] = 'потеряно';
  }

  return statesToView;
}