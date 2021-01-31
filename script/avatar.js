getAvatarName = ({health, mind, sleep}) => {
  let middle = false;
  let dying = false;
  let bad = false;

  const characterPictures = {
    'died of insomnia': 'SPOILER_3.jpg',
    'gone crazy': 'SPOILER_4.jpg',
    'lost consciousness': 'SPOILER_2.jpg',
    'everything is bad': '6.jpg',
    'you have bad sleep': 'SPOILER_9.jpg',
    'you have bad mind': 'SPOILER_10.jpg',
    'you have bad health': '7.jpg',
    'everything is so so': 'SPOILER_5.jpg',
    'your sleep is so so': 'SPOILER_12.jpg',
    'your mind is so so': 'SPOILER_13.jpg',
    'your health is so so': 'SPOILER_11.jpg',
    'norm': 'SPOILER_1.jpg',
  }


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
      return characterPictures['died of insomnia'];
    } else if (dying == 'mind') {
      return characterPictures['gone crazy'];
    } else if (dying == 'health') {
      return characterPictures['lost consciousness'];
    }
  }

  if ((sleep < 50 && sleep > 0) && (mind < 50 && mind > 0) && (health < 50 && health > 0)) {
    bad = 'everything';
  } else if (sleep < 50 && sleep > 0) {
    bad = 'sleep';
  } else if (mind < 50 && mind > 0) {
    if (mind <= sleep) {
      bad = 'mind';
    }
  } else if (health < 50 && health >= 00) {
    if (health <= mind && health <= sleep) {
      bad = 'health';
    }
  }

  if(bad) {
    if (bad == 'everything') {
      return characterPictures['everything is bad'];
    } else if (bad == 'sleep') {
      return characterPictures['you have bad sleep'];
    } else if (bad == 'mind') {
      return characterPictures['you have bad mind'];
    } else if (bad == 'health') {
      return characterPictures['you have bad health'];
    }
  }

  if ((sleep < 80 && sleep >= 50) && (mind < 80 && mind >= 50) && (health < 80 && health >= 50)) {
    middle = 'everything';
  } else if (sleep < 80 && sleep >= 50) {
    middle = 'sleep';
  } else if (mind < 80 && mind >= 50) {
    if (mind <= sleep) {
      middle = 'mind';
    }
  } else if (health < 80 && health >= 50) {
    if (health <= mind && health <= sleep) {
      middle = 'health';
    }
  }

  if(middle) {
    if (middle == 'everything') {
      return characterPictures['everything is so so'];
    } else if (middle == 'sleep') {
      return characterPictures['your sleep is so so'];
    } else if (middle == 'mind') {
      return characterPictures['your mind is so so'];
    } else if (middle == 'health') {
      return characterPictures['your health is so so'];
    }
  }

  return characterPictures['norm'];

}

// 100-80 хорошо
// 80-50 средне
// 50-1 плохо
// 0 смерть сошел с ума обморок