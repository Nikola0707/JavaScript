// Напишете фунција која што треба да прима array of strings како single argument и вратете (returns)
// го најдолгиот стринг (string) во низата. Фунцијата треба да го врати првиот најден од најдолгите стрингови
// (во случај ако постоијат повеќе од иста должина).

const mix = [' Greens','Artichokes', 'Beans', 'Carrots', 'Ginger', 'Revolution', 'Aberration'];

const longestString = (string) => {
    const longestString = string.reduce((previous, current) => {
      return previous.length >= current.length ? previous : current;
    });
    return longestString;
  };
  console.log(longestString(mix));
  