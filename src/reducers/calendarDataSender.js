export default function calendarDataSender(state=[], action){
  console.log(action.type, action.payload)
  switch(action.type){
    case 'Send':
      return action.payload;
    case 'Clear':
      return [];
    default:
      return [];
  }
}
