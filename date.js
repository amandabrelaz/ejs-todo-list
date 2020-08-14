//######### Module to pass date #########

//######### Function to pass the whole formated date #########
exports.getDate = function (){

  const currentDay = new Date();
  const options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return currentDay.toLocaleDateString("en-US", options);

}

//######### Function to pass just the day #########
exports.getDay = function (){

  const currentDay = new Date();
  const options ={
    weekday: "long"
  }

  return currentDay.toLocaleDateString("en-US", options);

}
