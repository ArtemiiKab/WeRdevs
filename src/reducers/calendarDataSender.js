export default function calendarDataSender(state=[], action){

  switch(action.type){
    case 'Send':
      return action.payload;
    case 'Clear':
      return [];
    default:
      return [];
  }
}
