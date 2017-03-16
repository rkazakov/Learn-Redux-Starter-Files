function getNextVerse(state = [], action) {
  switch(action.type) {
    case 'GET_NEXT_VERSE' :
      console.log('get next verse --->>>');
      return state;
    default:
      return state;
  }
}

export default getNextVerse;
