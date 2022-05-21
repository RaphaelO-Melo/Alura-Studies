export function timeToSeconds(time: string){
    
    var[hours = '0', minutes = '0', seconds = '0'] = time.split(':');
    
    if(hours == 'undefined'){
        hours = '0';
    }

    const hourInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;

    return hourInSeconds + minutesInSeconds + Number(seconds);

}