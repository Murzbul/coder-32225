
export interface UserProps
{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface UserInterface
{
    id: string;
}

export class User implements UserInterface
{
    id: string;
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(props: UserProps)
    {
        this.id = props.id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
    }
}
