export const textResize = (event, defaultHeight) => {
  const textAreaBox = event.target;
  textAreaBox.style.height = defaultHeight;
  textAreaBox.style.height = textAreaBox.scrollHeight + 'px';
};

export const toggleModal = (state, props) => {
  state(props => !props);
};
