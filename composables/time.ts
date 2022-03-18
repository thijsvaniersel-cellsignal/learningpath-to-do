export function useTime() {

    // change timestamp to pretty date format
    function prettyDate(timestamp : number) : string {
        var date = new Date(timestamp)
        return  date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()              
    }

    // convert timestamp to time
    function prettyTime(timestamp : number) : string {
        var date = new Date(timestamp)
        return  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()                
    }

    return {
        prettyDate,
        prettyTime
    }

}