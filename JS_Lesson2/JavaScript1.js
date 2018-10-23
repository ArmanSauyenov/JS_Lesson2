

var obj = {
    Name: "Arman",
    Surname: "Sauyenov",
    Age: "28"
}

Object.defineProperty(obj, 'Birthday', {
    value: "25 October 1989",
    enumberable: false
})

Object.defineProperty(obj, 'fullname', {
    enumerable: true,
    get: function () {
        return obj.Name + " " + obj.Surname + ",  " + obj.Age;
    },
    set: function (value) {
        this.Name = value.substring(0, value.indexof(" ")); //value.Split(' ')[].Length()+1;
        value = value.substring(value.indexof(" "));
        this.Surname = value.substring(0, value.indexof(" "));
        value = value.substring(value.indexof(" "));
        this.Age = value.substring(0, value.indexof(" "));
    }
}
)

for (var i in obj) {
    document.write(i + " " + obj[i] + '<br>')
}
