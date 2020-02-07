const addresses = [{ uid: 1, aid: 10, address: "1 Best Street" },
{ uid: 2, aid: 20, address: "2 Best Street" }];

const names = [{ uid: 2, name: "Kevin" }, { uid: 3, name: "Shums" }];

// result = [{uid: 2, aid: 20, address: "2 Best Street", name: "Kevin"},
// {uid: 1, aid: 10, address: "1 Best Street"},
// { uid: 3, name: "Shums"}]
//

const join = (names, addresses) => {
  const joined = [];
  // for (let i = 0; i < addresses.length; i++) {
  //   const join = {};
  //   const address = addresses[i];
  // }

  const addressByUid = addresses.reduce((acc, curr) => {
    acc[curr.uid] = curr;
    return acc;
  }, {});

  names.forEach((el) => {
    const { uid, name } = el
    if (addressByUid[uid]) {
      addressByUid[uid].name = name;
    } else if (addressByUid[uid] === undefined) {
      addressByUid[uid] = {
        uid, name
      };
    }
  })

  return Object.values(addressByUid);
}

console.log(join(names, addresses));