import { FAKE_THING } from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch(type) {
    case FAKE_THING:
      return {
        ...state,
        fakeThing: payload // Maybe payload.fakeThing ??
      };
    default:
      return state;
  }
}