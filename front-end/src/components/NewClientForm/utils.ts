const hasChanged = (x: any, y: any) => {
  for (const key in x) {
    if (x[key] !== y[key]) {
      return true;
    }
  }
  return false;
};

const saveLocal = (defaultState: any, newState: any, name: string) => {
  if (hasChanged(defaultState, newState))
    localStorage[name] = JSON.stringify(newState);
  else localStorage.removeItem(name);
};

const restoreLocal = (name: any, set: any) => {
  if (localStorage[name]) {
    set(JSON.parse(localStorage[name]));
  }
};

export { hasChanged, saveLocal, restoreLocal };
