/* This Project determines the racing time of athletes based on their age and time of registration:

    1. Adults (above 18 years) who register early will race at 9:30am
    2. Adults who register late will race at 11:00 am
    3. Youth (below 18 years), regardless time of registration, will race at 12:30pm
    4. Atheles who are exactly 18 years old are asked to report to the registration desk

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

let raceNumber = Math.floor(Math.random() * 1000);  // generate race numbers randomly between 0 and 1000

let registeredEarly = true;  // indicates whether runner registered early or late

let runnerAge = 21;  // age of runner

if (runnerAge > 18 && registeredEarly){     // Adults who registered early to race at 9:30 am
  raceNumber += 1000;
  console.log(`Runner ${raceNumber}, your racing time is 9:30am`)
}


else if (runnerAge > 18 && registeredEarly === false){       // Adults who registered late to race at 11:30am
  console.log(`Runner ${raceNumber}, your race starts at 11:00 am.`);
}

else if (runnerAge < 18){        // Youth to race at 12:30pm
  console.log(`Runner ${raceNumber}, your race starts at 12:30pm.`)
}

else{        // 18 year olds are to visit registration desk
  console.log('Kindly visit the Registration desk!')
}


// End of Code.