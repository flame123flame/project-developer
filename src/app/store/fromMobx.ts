import { Observable } from 'rxjs/Observable';
import { computed } from 'mobx';

export function fromMobx<T>(expression: () => T): Observable<T> {

    return new Observable(observer => {
        const computedValue = computed(expression);
        const disposer = computedValue.observe(changes => {
            observer.next(changes.newValue);
        }, true);

        return () => {
            // tslint:disable-next-line: no-unused-expression
            disposer && disposer();
        };
    });
}
