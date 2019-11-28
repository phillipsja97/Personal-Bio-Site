const printToDom = (divId, toPrint) => {
  $(`#${divId}`).html(toPrint);
};

export default { printToDom };
