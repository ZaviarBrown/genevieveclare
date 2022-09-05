const hasChanged = (x: any, y: any) => {
  for (const key in x) {
    if (x[key] !== y[key]) {
      return true;
    }
  }
  return false;
};

export { hasChanged };
