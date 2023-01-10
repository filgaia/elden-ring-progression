export const mapToJson = (map: Map<any, any>) => {
  if (map) {
    return JSON.stringify(Array.from(map.entries()));
  } else {
    return null;
  }
};

export const jsonToMap = (json: string): Map<string, boolean> | null => {
  if (json) {
    return new Map(JSON.parse(json));
  } else {
    return null;
  }
};
