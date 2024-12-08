// 1.
/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/

function sortUserName(user) {
  const sortCriteria = (a, b) => {
    if (a.firstName !== b.firstName) {
      return a.firstName.localeCompare(b.firstName);
    }
    if (a.lastName !== b.lastName) {
      return a.lastName.localeCompare(b.lastName);
    }
    if (a.customerID !== b.customerID) {
      return parseInt(a.customerID) - parseInt(b.customerID);
    }
  };

  console.log(user.sort((a, b) => sortCriteria(a, b)));
}
