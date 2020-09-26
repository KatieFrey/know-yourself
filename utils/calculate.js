export const calculate = (score) => {
  let abr = "";
  let title = [];

  if (score["extrovertIntrovert"] < 0) {
    abr += "I";
    title.push("Introvert");
  } else {
    abr += "E";
    title.push("Extrovert");
  }

  if (score["sensingIntuitive"] < 0) {
    abr += "S";
    title.push("Sensing");
  } else {
    abr += "N";
    title.push("Intuition");
  }

  if (score["thinkingFeeling"] < 0) {
    abr += "T";
    title.push("Thinking");
  } else {
    abr += "F";
    title.push("Feeling");
  }

  if (score["judgingPerceiving"] < 0) {
    abr += "J";
    title.push("Judging");
  } else {
    abr += "P";
    title.push("Perceiving");
  }

  return {
    abr,
    title,
  };
};
