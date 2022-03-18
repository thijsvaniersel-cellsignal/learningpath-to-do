export function useTime() {

    // change timestamp to pretty format
    function prettyData(timestamp : number) : string {
        var date = new Date(timestamp)

        return  date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " "
                + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
                  
    }

    return {
        prettyData
    }

}