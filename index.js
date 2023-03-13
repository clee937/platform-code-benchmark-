'use strict';
console.log('Loading hello world function');

exports.handler = async (event) => {
  console.log(`request: ${JSON.stringify(event)}`);

  const inputs = {
    name: 'you',
    city: 'World',
    time: 'day',
    day: '',
  };

  let finalGreeting = '';
  const responseCode = 200;

  function assignInputs() {
    for (const key in inputs) {
      if (Object.prototype.hasOwnProperty.call(event, key) && (event[key] !== '' || undefined)) {
        inputs[key] = event[key];
        console.log(`Received ${key}: ${event[key]}`);
      }
    }
  }

  function createGreeting(name, city, time, day) {
    const shortGreeting = `Good ${time}, ${name} of ${city}.`;
    let greeting = '';
    if (day) {
      greeting = `${shortGreeting} Happy ${day}!`;
    } else {
      greeting = shortGreeting;
    }
    return greeting;
  }

  try {
    assignInputs();
  } catch (error) {
    console.log(`Error assigning inputs: ${error}`);
  }

  const {
    name, city, time, day,
  } = inputs;

  try {
    finalGreeting = createGreeting(name, city, time, day);
  } catch (error) {
    console.log(`Error creating greeting: ${error}`);
  }

  const response = {
    statusCode: responseCode,
    headers: {
      'x-custom-header': 'my custom header value',
    },
    body: {
      message: finalGreeting,
      input: event,
    },
  };

  console.log(`Response: ${JSON.stringify(response)}`);

  return response;
};
