export const mainClassName = (className, modifiers) => {
  return modifiers ? [className, ...modifiers.filter(modifier => !!modifier)].join(' -') : className;
};

export const target = href => {
  return href.match(/^(https?:\/\/)/) ? '_blank' : '_self';
};
