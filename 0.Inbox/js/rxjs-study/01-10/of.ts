import { of } from '../node_modules/_rxjs@6.5.4@rxjs';

of(1, 2, 3).subscribe(console.log)

of(1, 2, 3).subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
)

of([1, 2, 3]).subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
)