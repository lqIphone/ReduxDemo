import * as ActionsType from './ActionsType';

export default (state, action) => {
  const {value} = action;
  switch (action.type) {
    case ActionsType.INCREMENT:
      return {...state, [value.caption]: state[value.caption] + value.count};
    case ActionsType.DECREMENT:
      return {...state, [value.caption]: state[value.caption] - value.count};
    default:
      return state
  }
}
