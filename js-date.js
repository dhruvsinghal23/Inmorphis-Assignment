// 1
// function is_date(input) {
//   return Object.prototype.toString.call(input) === '[object Date]';
// }
// console.log(is_date("October 13, 2014 11:13:00"))
// console.log(is_date(new Date(1234567)))

// 2
// function curday(separator = '/') {
//   let today = new Date();
//   let dd = String(today.getDate()).padStart(2, '0');
//   let mm = String(today.getMonth() + 1).padStart(2, '0');
//   let yyyy = today.getFullYear();
//   return mm + separator + dd + separator + yyyy;
// }
// console.log(curday('/'))

// 3
// function getDaysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }
// console.log(getDaysInMonth(12, 2012))

// 4
// function month_name(date) {
//   return date.toLocaleString('default', { month: 'long' });
// }
// console.log(month_name(new Date("10/11/2009")))

// 5
// function compare_dates(date1, date2) {
//   if (date1.getTime() === date2.getTime()) return 'Date1 = Date2';
//   return date1 > date2 ? 'Date1 > Date2' : 'Date2 > Date1';
// }
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));  
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));  
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

// 6
// function add_minutes(date, minutes) {
//   return new Date(date.getTime() + minutes * 60000);
// }
// console.log(add_minutes(new Date(2014,10,2), 30).toString());

// 7
// function is_weekend(dateString) {
//   let day = new Date(dateString).getDay();
//   return (day === 0 || day === 6) ? 'weekend' : undefined;
// }
// console.log(is_weekend('Nov 15, 2014'));  
// console.log(is_weekend('Nov 16, 2014'));  
// console.log(is_weekend('Nov 17, 2014'));

// 8
// function date_diff_indays(date1, date2) {
//   const dt1 = new Date(date1);
//   const dt2 = new Date(date2);
//   return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
// }
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));  
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));

// 9
// function lastday(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }
// console.log(lastday(2014,0));  
// console.log(lastday(2014,1));  
// console.log(lastday(2014,11));

// 10
// function yesterday(dateString) {
//   let dt = new Date(dateString);
//   dt.setDate(dt.getDate() - 1);
//   return dt.toString() 
// }
// console.log(yesterday('Nov 15, 2014'));  
// console.log(yesterday('Nov 16, 2015'));  
// console.log(yesterday('Nov 17, 2016'));

//11
// function max_date(allDates) {
//   return new Date(Math.max.apply(null, allDates.map(d => new Date(d)))).toISOString().split('T')[0];
// }
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 

//12
// function min_date(allDates) {
//   return new Date(Math.min.apply(null, allDates.map(d => new Date(d)))).toISOString().split('T')[0];
// }
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

//13
// function timeConvert(num) {
//   let hours = Math.floor(num / 60);
//   let minutes = num % 60;
//   return `${num} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
// }
// console.log(timeConvert(200));

//14
// function days_of_a_year(year) {
//   return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
// }
// console.log(days_of_a_year(2015))
// console.log(days_of_a_year(2016))

//15
// function quarter_of_the_year(date) {
//   return Math.floor(date.getMonth() / 3) + 1;
// }
// console.log(quarter_of_the_year(new Date(2015, 1, 21))); 

//16
// function days_passed(date) {
//   const start = new Date(date.getFullYear(), 0, 0);
//   const diff = date - start;
//   return Math.floor(diff / (1000 * 60 * 60 * 24));
// }
// console.log(days_passed(new Date(2015, 11, 14))); 

// 18
// function calculate_age(birthDate) {
//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
//   return age;
// }
// console.log(calculate_age(new Date(1982, 11, 4))); 

// 19
// function day_of_the_month(date) {
//   return String(date.getDate()).padStart(2, '0');
// }
// console.log(day_of_the_month(new Date(2015, 10, 1)));

//20
// function short_Days(date) {
//   return date.toLocaleString('en-us', { weekday: 'short' });
// }
// dt = new Date(2015, 10, 1);
// console.log(short_Days(dt));

//21
// function long_Days(date) {
//   return date.toLocaleString('en-us', { weekday: 'long' });
// }
// dt = new Date(2015, 10, 1);
// console.log(long_Days(dt));

//22
// function ISO_numeric_date(date) {
//   return date.getDay() === 0 ? 7 : date.getDay();
// }
// dt = new Date(2015, 10, 1);
// console.log(ISO_numeric_date(dt));

//23
// function english_ordinal_suffix(date) {
//   const day = date.getDate();
//   if (day > 3 && day < 21) return day + 'th';
//   switch (day % 10) {
//     case 1: return day + 'st';
//     case 2: return day + 'nd';
//     case 3: return day + 'rd';
//     default: return day + 'th';
//   }
// }
// dt = new Date(2015, 10, 1);
// console.log(english_ordinal_suffix(dt));

//24
// function ISO8601_week_no(date) {
//   const t = new Date(date.valueOf());
//   t.setDate(t.getDate() + 4 - (t.getDay() || 7));
//   const yearStart = new Date(t.getFullYear(), 0, 1);
//   return Math.ceil((((t - yearStart) / 86400000) + 1) / 7);
// }
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));

//25
// function full_month(date) {
//   return date.toLocaleString('en-us', { month: 'long' });
// }
// dt = new Date(2015, 10, 1);
// console.log(full_month(dt));

//26
// function numeric_month(date) {
//   return String(date.getMonth() + 1).padStart(2, '0');
// }
// dt = new Date(2015, 10, 1);
// console.log(numeric_month(dt));

//27
// function short_months(date) {
//   return date.toLocaleString('en-us', { month: 'short' });
// }
// dt = new Date(2015, 10, 1);
// console.log(short_months(dt));

//28
// function full_year(date) {
//   return date.getFullYear();
// }
// dt = new Date(2015, 10, 1);
// console.log(full_year(dt));

//29
// function sort_year(date) {
//   return String(date.getFullYear()).slice(-2);
// }
// dt = new Date(1989, 10, 1);
// console.log(sort_year(dt));

//30
// function am_pm_lower(date) {
//   return date.getHours() >= 12 ? 'pm' : 'am';
// }
// console.log(am_pm_lower(new Date()))

//31
// function am_pm_upper(date) {
//   return date.getHours() >= 12 ? 'PM' : 'AM';
// }
// console.log(am_pm_upper(new Date()))

//32
// function internet_time(date) {
//   const beats = Math.floor(((date.getUTCHours() + 1) % 24 + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) * 1000 / 24);
//   return beats;
// }
// dt = new Date(1989, 10, 1);
// console.log(internet_time(dt));

//33
// function hours_with_zeroes(date) {
//   let hour = date.getHours() % 12;
//   hour = hour ? hour : 12;
//   return String(hour).padStart(2, '0');
// }
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt));

//34
// function hours_without_zeroes(date) {
//   return date.getHours();
// }
// dt = new Date(1989, 10, 1);
// console.log(hours_without_zeroes(dt));

//35
// function minutes_with_leading_zeros(date) {
//   return String(date.getMinutes()).padStart(2, '0');
// }
// dt = new Date(1989, 10, 1);
// console.log(minutes_with_leading_zeros(dt));

//36
// function seconds_with_leading_zeros(date) {
//   return String(date.getSeconds()).padStart(2, '0');
// }
// dt = new Date(1989, 10, 1);
// console.log(seconds_with_leading_zeros(dt));

//37
// function timezone_name(date) {
//   return Intl.DateTimeFormat().resolvedOptions().timeZone;
// }
// console.log(timezone_name(new Date()));

//38
// function daylights_savings(date) {
//   const jan = new Date(date.getFullYear(), 0, 1);
//   const jul = new Date(date.getFullYear(), 6, 1);
//   return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) !== date.getTimezoneOffset();
// }
// dt = new Date();
// console.log(daylights_savings(dt));

//39
// function diff_to_GMT(date) {
//   const offset = -date.getTimezoneOffset();
//   const sign = offset >= 0 ? '+' : '-';
//   const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
//   const minutes = String(Math.abs(offset) % 60).padStart(2, '0');
//   return `${sign}${hours}.${minutes}`;
// }
// dt = new Date();
// console.log(diff_to_GMT(dt));

//40
// function timezone_offset_in_seconds(date) {
//   return date.getTimezoneOffset() * -60;
// }
// dt = new Date();
// console.log(timezone_offset_in_seconds(dt));

//41
// function add_years(date, years) {
//   date.setFullYear(date.getFullYear() + years);
//   return date;
// }
// dt = new Date(2014,10,2);
// console.log(add_years(dt, 10).toString());

//42
// function add_weeks(date, weeks) {
//   date.setDate(date.getDate() + 7 * weeks);
//   return date;
// }
// dt = new Date(2014,10,2);
// console.log(add_weeks(dt, 10).toString());

//43
// function add_months(date, months) {
//   date.setMonth(date.getMonth() + months);
//   return date;
// }
// dt = new Date(2014,10,2);
// console.log(add_months(dt, 10).toString());

//44
// function diff_minutes(dt1, dt2) {
//   return Math.floor((dt2 - dt1) / (1000 * 60));
// }
// dt1 = new Date("October 13, 2014 11:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_minutes(dt1, dt2));

//45
// function diff_hours(dt1, dt2) {
//   return Math.floor((dt2 - dt1) / (1000 * 60 * 60));
// }
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2));

//46
// function diff_days(dt1, dt2) {
//   return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
// }
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_days(dt1, dt2));

//47
// function diff_weeks(dt1, dt2) {
//   return Math.floor(diff_days(dt1, dt2) / 7);
// }
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_weeks(dt1, dt2));

//48
// function diff_months(dt1, dt2) {
//   let months;
//   months = (dt2.getFullYear() - dt1.getFullYear()) * 12;
//   months -= dt1.getMonth();
//   months += dt2.getMonth();
//   return months;
// }
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_months(dt1, dt2));

//49
// function diff_years(dt1, dt2) {
//   return dt2.getFullYear() - dt1.getFullYear();
// }
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2017 11:13:00");
// console.log(diff_years(dt1, dt2));

//50
// function week_start_date(date) {
//   const day = date.getDay();
//   const diff = date.getDate() - day + (day === 0 ? -6 : 1);
//   return new Date(date.setDate(diff));
// }
// console.log(week_start_date(new Date()))

//51
// function week_end_date(date) {
//   const start = week_start_date(date);
//   return new Date(start.setDate(start.getDate() + 6));
// }
// console.log(week_end_date(new Date()))

//52
// function month_start_date(date) {
//   return new Date(date.getFullYear(), date.getMonth(), 1);
// }
// console.log(month_start_date(new Date()))

//53
// function month_end_date(date) {
//   return new Date(date.getFullYear(), date.getMonth() + 1, 0);
// }
// console.log(month_end_date(new Date()))


