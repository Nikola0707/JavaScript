// Напишете фунција која што треба да врати колку денови остануваат до следниот Божиќ.

const daysToXmas = (year) => {
  const day = 1000 * 60 * 60 * 24;
  let momentDay = new Date();
  let christmas = new Date(`01, 07, ${year}`);

  let diferenceInTime =
    Math.round(christmas.getTime() - momentDay.getTime()) / day;
  let diferenceInDays = diferenceInTime.toFixed(0);
  
  return `${diferenceInDays} days until Christmas in ${year}!!!`;
};

console.log(daysToXmas(2021))