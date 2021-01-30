getAvatarName = ({health, mind, sleep}) => {
  let middle = false;
  let dying = false;
  let bad = false;


  if (sleep <= 0) {
    dying = 'sleep';
  } else if (mind <= 0) {
    if (mind < sleep) {
      dying = 'mind';
    }
  } else if (health <= 0) {
    if (health < mind && health < sleep) {
      dying = 'health';
    }
  }

  if(dying) {
    if (dying == 'sleep') {
      return 'died of insomnia';
    } else if (dying == 'mind') {
      return 'gone crazy';
    } else if (dying == 'health') {
      return 'lost consciousness';
    }
  }

  if ((sleep < 50 && sleep > 0) && (mind < 50 && mind > 0) && (health < 50 && health > 0)) {
    bad = 'everything';
  } else if (sleep < 50 && sleep > 0) {
    bad = 'sleep';
  } else if (mind < 50 && mind > 0) {
    if (mind < sleep) {
      bad = 'mind';
    }
  } else if (health < 50 && health >= 00) {
    if (health < mind && health < sleep) {
      bad = 'health';
    }
  }

  if(bad) {
    if (bad == 'everything') {
      return 'everything is bad';
    } else if (bad == 'sleep') {
      return 'you have bad sleep';
    } else if (bad == 'mind') {
      return 'you have bad mind';
    } else if (bad == 'health') {
      return 'you have bad health';
    }
  }

  if ((sleep < 80 && sleep >= 50) && (mind < 80 && mind >= 50) && (health < 80 && health >= 50)) {
    middle = 'everything';
  } else if (sleep < 80 && sleep >= 50) {
    middle = 'sleep';
  } else if (mind < 80 && mind >= 50) {
    if (mind < sleep) {
      middle = 'mind';
    }
  } else if (health < 80 && health >= 50) {
    if (health < mind && health < sleep) {
      middle = 'health';
    }
  }

  if(middle) {
    if (middle == 'everything') {
      return 'everything is so so';
    } else if (middle == 'sleep') {
      return 'your sleep is so so';
    } else if (middle == 'mind') {
      return 'your mind is so so';
    } else if (middle == 'health') {
      return 'your health is so so';
    }
  }

  return 'norm';

}

let ururu = {
  health: 60,
  mind: 87,
  sleep: 87,
}

// 100-80 хорошо
// 80-50 средне
// 50-1 плохо
// 0 смерть сошел с ума обморок