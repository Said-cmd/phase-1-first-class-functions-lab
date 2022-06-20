// Code your solution in this file!
/* Returning the first two drivers*/
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};
/* Returning the last two drivers*/
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};
/*Array of drivers*/
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
/* Fare multiplier */
const createFareMultiplier = function (multiplyValue){
    return function (value) {
        return multiplyValue * value
    };
};
/* Fare doubler */
const fareDoubler = createFareMultiplier(2);
/* Fare tripler */
const fareTripler = createFareMultiplier(3);
/* Returning drivers */
const selectDifferentDrivers = function (drivers, returnDrivers){
    return returnDrivers(drivers);
};