desert () => {
    var myFunction1 = () => {
        return '*** 1 ***';
    };
    var myFunction2 = () => {
        let func1Result = myFunction1();
        return '*** 2 ***:' + func1Result;
    };
    var myFunction3 = () => {
        let func1Result = myFunction1();
        let func2Result = myFunction2();
        return Date();
    };
    return {
        myPackage: {
            myFunction1,
            myFunction2,
            myFunction3
        }
    };
};
