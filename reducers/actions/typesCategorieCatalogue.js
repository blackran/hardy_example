export const INIT_CATEGORIE_CATALOGUE = 'INIT_CATEGORIE_CATALOGUE';

export const dispatchInitCategorieCatalogue = datas => {
  return { type: INIT_CATEGORIE_CATALOGUE, datas: { datasCategorie: datas || [] } };
};
