export const INIT_ADORE = 'INIT_ADORE';

export const dispatchInitAdore = datasAdore => {
  return { type: INIT_ADORE, datas: { datasAdore: datasAdore || [] } };
};
