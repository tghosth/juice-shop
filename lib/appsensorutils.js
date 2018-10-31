/* jslint node: true */
const appsensornodejs = require('../../appsensor-nodejs');

exports.ActionTypes = Object.freeze({
    Disable: 'Disable',
    BlockIP: 'BlockIP',
    SilentFail: 'SilentFail'
  });

exports.GetUserResponseActions = () => {
    
    var actions = [];

    responses = appsensornodejs.GetResponses();

    if (typeof responses === 'string')
    {
        responses = JSON.parse(responses);
    }

    for (var i = 0; i < responses.length; i++) {
        response = responses[i];
        
        if (response)
        {

            var username = response.user && response.user.username ? response.user.username : "";
            var action = response.action ? response.action : ""; 
            var SourceIP = response.user && response.user.ipAddress && response.user.ipAddress.address ? response.user.ipAddress.address : "";

            if (response.timestamp)
            {
                var dateActive = new Date(Date.parse(response.timestamp));
                var dateNow = new Date(Date.now());
                var absDiff = dateNow - dateActive;
                

                if (response.interval && response.interval.unit && response.interval.duration)
                {
                    var intervalTime = convertInterval(response.interval.duration, response.interval.unit);

                    if (absDiff < intervalTime)
                    {
                        actions.push({Username: username, ActionType: response.action, SourceIP: SourceIP});
                    }
                }


            }
        }

    }

          return actions;
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