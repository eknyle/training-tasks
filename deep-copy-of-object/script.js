
        let obj1= {
            name: "Alex",
            age: 22,
            gender: "male",
            address: {
                country: "Country"
            },
            marital_status: "married",
            teenager: [
                {
                    name: "Emily",
                    age: 8,
                    grandchildren: [
                        {
                            name: "Alice",
                            age: 13
                        },
                    ]
                }
            ]
        };

let obj2 = {
    ...obj1,
    teenager: [
        {
            ...obj1.teenager[0],
            grandchildren: [
            ...obj1.teenager[0].grandchildren,
                {
                    name: "Bob",
                    age: 15
                }
            ]
        }
    ]
};
console.log(obj1);
console.log(obj2);
