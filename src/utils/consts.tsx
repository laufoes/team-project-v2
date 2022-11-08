export function generateDays() {
    var days: Array<number> = [];
    for (var i = 1; i <= 31; i++) {
        days.push(i)
    }
    return days;
}

export function generateMonths() {
    var months: Array<number> = [];
    for (var i = 0; i <= 11; i++) {
        months.push(i + 1);
    }
    return months;
}

export function generateYears() {
    var years: Array<number> = [];
    for (var i = 2022; i >= 1922; i--) {
        years.push(i);
    }
    return years;
}

export const emailRegex = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

export const urlRegex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm