class Patient {
    constructor(public id: number, public name: string) {
    }
}


interface IIterator {
    hasNext(): boolean;
    next(): void;
}


interface Aggregate {
    getIterator(): IIterator;
}


class WaitingRoom implements Aggregate {
    private patient: Patient[];

    getPatient(): Patient[] {
        return this.patient;
    }

    getCount(): number {
        return this.patient.length;
    }

    checkIn(patient: Patient) {
        this.patient.push(patient)
    }

    getIterator(): IIterator {
        return new WaitingRoomIterator(this);
    }
}


class WaitingRoomIterator implements IIterator {
    private position: number = 0;

    constructor(private aggregate: WaitingRoom) {}

    hasNext(): boolean {
        return this.position < this.aggregate.getCount();
    }

    next() {
        if(!this.hasNext()) {
            console.log("")
            return;
        }

        const patient = this.aggregate.getPatient()[this.position]
        this.position++;
        return patient;
    }
}

