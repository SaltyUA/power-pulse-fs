export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const handleFullfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};
