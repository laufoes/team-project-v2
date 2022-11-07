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