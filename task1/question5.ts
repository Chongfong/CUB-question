/** Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/

// Interface:
//   used in Typescript to define the type of an object.
  
interface CityType {
  id: number;
  name: string;
  country: string;
}

const city: CityType = {
  id: 1,
  name: 'Taipei',
  country: 'Taiwan'
}

// Enum is often used to define a set of options, especially with switch method
 
  enum Status {
  Success,
  Processing,
  Failed
}

function fetchApi(status: Status) {
  switch (status) {
    case Status.Success: {
      console.log('successfully')
      break
    }
    case Status.Processing: {
      console.log('processing')
      break
    }
    case Status.Failed: {
      console.log('failed')
      break
    }
  }
}