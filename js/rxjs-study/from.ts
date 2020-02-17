import { from, asyncScheduler } from 'rxjs';


from([0, 1, 2], asyncScheduler).subscribe(x => console.log(x))


from([1, 2, 3]).subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
)