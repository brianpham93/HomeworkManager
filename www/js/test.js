var aDateTimePart = a.id.split(" ");

var aDatePart = aDateTimePart[0].split("-");
var aTimePart = aDateTimePart[1].split(":");

var aYear = aDatePart[0];
var aMonth = aDatePart[1];
var aDay = aDatePart[2];

var aHour = aTimePart[0];
var aMinute = aTimePart[1];

var bDateTimePart = b.id.split(" ");

var bDatePart = bDateTimePart[0].split("-");
var bTimePart = bDateTimePart[1].split(":");

var bYear = bDatePart[0];
var bMonth = bDatePart[1];
var bDay = bDatePart[2];

var bHour = bTimePart[0];
var bMinute = bTimePart[1];

var aDate = new Day(aYear,aMonth,aDate,aHour,aMinute,0,0);
var bDate = new Day(aYear,aMonth,aDate,aHour,aMinute,0,0);

return (new Date(aDate) > new Date(bDate));


