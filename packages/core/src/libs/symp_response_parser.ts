export function isNumber(char: string) {
  return /^\d$/.test(char);
}

interface Response {
  disease: string;
  likelihood: number;
  consultation: string[];
}

const parer = async (input: string) => {
  const regex = /(.+)\s\((\d+)% likelihood\) - Consult (a|an) (.+)/;
  const matches = RegExp(regex).exec(input);

  if (matches && matches.length === 4) {
    const x = matches[1].trim();
    const y = parseInt(matches[2]);
    const z = matches[3].trim();

    return { x, y, z };
  } else {
    throw new Error("Invalid input format");
  }
};

interface Disease {
  name: string;
  likelihood: string;
  specialist: string;
}
export default async (response: string) => {
  let diseaseList: Disease[] = [];
  let sentences = response.split("-");
  let cleansedSentences = sentences.map((e) => e.replace(/\n/g, "").trim());
  cleansedSentences.shift();
  let mergedSentences = [];
  for (let i = 0; i < cleansedSentences.length; i += 2) {
    mergedSentences.push(cleansedSentences[i] + " " + cleansedSentences[i + 1]);
  }
  // console.log(mergedSentences)
  const regExp = /(.*)(\((\d+)% likelihood)\) (C|c)onsult an* (.*)/gm;
  mergedSentences.map((sentence) => {
    let matches = sentence.matchAll(regExp);
    let disease: Partial<Disease> = {};

    for (const match of matches) {
      disease.name = match[1];
      disease.likelihood = match[3];
      disease.specialist = match[5];
    }
    diseaseList.push(disease as Disease);
  });
  return diseaseList;
};
