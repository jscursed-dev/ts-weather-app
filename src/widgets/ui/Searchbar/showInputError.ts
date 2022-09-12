export const showInputError = (input: HTMLInputElement): void => {
  input.className = "searchbar__input_wrong";
  setTimeout(() => (input.className = "searchbar__input"), 650);
};
