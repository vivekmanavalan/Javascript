function* getNumbers(){
    console.log('Number', yield);
    console.log('Number', yield);
    console.log('Number', yield);
    console.log('Number', yield);
    console.log('Number', yield);
}

const res = getNumbers();

res.next(56);
res.next(2);
res.next(3);
res.next(4);
res.next(5);
