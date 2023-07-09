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
      throw new Error('Invalid input format');
    }
}

export default async (response: string) => {
    console.log(new Buffer(response).toString('base64'))
    const regex = /(.+)\s\((\d+)% likelihood\) - Consult (a|an) (.+)/gm;
    const matches = response.matchAll(regex);
    console.log(matches)
    const result = [];

    for (const match of matches) {
        console.log(match)
        const x = match[1].trim();
        const y = parseInt(match[2]);
        const z = match[5].trim();

        result.push({ x, y, z });
    }

    return result;
}