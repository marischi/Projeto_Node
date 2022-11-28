type MenuOptions = '' | 'all' | 'vestido' | 'sapato' | 'joia';

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    vestido: false,
    sapato: false,
    joia: false,
  };

  if (activeMenu != '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
};
