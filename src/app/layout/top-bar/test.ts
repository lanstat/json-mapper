class P1 {
    name: string;
    gender: boolean;
}

class P2 {
    name: string;
    ci: number;
}

function test(param: P1 | P2) {
    if (param instanceof P1) {

    }
    console.log(123123);
}


test({
    name: 'asdasd',
    ci: 123,
    gender: false
});