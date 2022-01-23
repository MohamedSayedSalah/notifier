export const toYourTimeZone = (time, time_zone)=>{
    return new Date(time).toLocaleString('en-US', { timeZone: time_zone}) + " "+ time_zone
}