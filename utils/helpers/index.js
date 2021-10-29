export const parseAddress = obj => {
  var address = obj.city + ', ' + obj.line[0];
  return address;
};

export const encodeQueryData = data => {
  const ret = [];
  for (let d in data) {
    if (data[d] != '') {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
  }
  return ret.join('&');
};
