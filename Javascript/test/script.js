const user = function (param, v1, v2, v3) {
    return `ID No ${this.id}, password ${this.password}, ${v1} ${v2} ${v3}`;
}
const userDetails = {
    id: 0O1,
    password: "$$125hello",
}
let v1 = "data1";
let v2 = "data2";
let v3 = "data3";
const result = user.call(userDetails, v1, v2, v3);
console.log(result)