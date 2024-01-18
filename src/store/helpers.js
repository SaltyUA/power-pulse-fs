export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFullfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};
