// Map Solution
const destCity1 = (paths) => {
  const hash = new Map(paths);

  for(const dest of hash.values()) {
    if (!hash.has(dest)) return dest;
  }
};

// Set Solution
const destCity2 = (paths) => {
  const set = paths.reduce((acc, path) => acc.add(path[0]), new Set());
  return paths.find(val => !set.has(val[1]))[1];
} 