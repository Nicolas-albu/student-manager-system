export type Registration = number | null;

export default class Student {
    public readonly registration: Registration;
    public name: string;
    public dateOfBirth: Date;
    public email: string;
    public status: string;

    constructor(props: Student) {
        Object.assign(this, props);
    }
}
