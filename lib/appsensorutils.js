/* jslint node: true */
const appsensornodejs = require('../../appsensor-nodejs');
var sleep = require('system-sleep')


exports.isUserDisabled = (username) => {
    status = "NOTDONE";
    isDisabled = false;

    setTimeout(()=>{
         status = "FAILED";
         }, 5000);

    isUserDisabledInner(username, (disabledResponse)=>{
        isDisabled = disabledResponse;
        status = "DONE";
    });

    while(status == "NOTDONE"){
        sleep(100);
    }

    return isDisabled;

}

isUserDisabledInner = (username, callback) => {

    appsensornodejs.GetResponses(function(responses){

        responses = JSON.parse(responses);

        for (var i = 0; i <=  responses.length; i++) {
            response = responses[i];
            
            if (response && response.user && response.user.username == username)
            {
                if (response.timestamp)
                {
                    var dateActive = new Date(Date.parse(response.timestamp));
                    var dateNow = new Date(Date.now());
                    var absDiff = dateNow - dateActive
                    

                    if (response.interval && response.interval.unit && response.interval.duration)
                    {
                        var intervalTime = convertInterval(response.interval.duration, response.interval.unit);

                        if (absDiff < intervalTime)
                        {
                            callback(true);
                            return;
                        }
                    }


                }
            }

          }

          callback(false);
          return;
    });
}

function convertInterval(duration, unit)
{
    if (response.interval.unit == 'seconds')
    {
        return duration * 1000
    }
    else if  (response.interval.unit == 'minutes')
    {
        return duration * 1000 * 60
    }
    else if  (response.interval.unit == 'hours')
    {
        return duration * 1000 * 60 * 60
    }

    return 0
}