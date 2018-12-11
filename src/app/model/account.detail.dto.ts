import { AddressDetailDto } from '.';

export class AccountDetailDto {

    accountId: number;

//     @NotNull @Size( min = 4, message = "Name must be at least 4 characters long")
    name: string;

//     @NotNull @Past @DateTimeFormat(pattern="MM/dd/yyyy")
    dob: string;

//     @NotNull @Size( min = 4) @NotEmpty
    fathersName: string;

//     @NotNull @Size( min = 4) @NotEmpty
    mothersName: string;

//     @NotNull
// //    @Mobile
    mobile1: string;

// //    @Mobile
    mobile2: string;

// //    @EmailCustomValidator
//     @NotNull
    email1: string;

// //    @EmailCustomValidator
    email2: string;

//     //height in inches
    height: number;

//     //weight in Kgs
    weight: number;

    qualification: string;

    occupation: string;

//     //monthly income
    income: number;

//     @NotNull
    addressDetailDtos: AddressDetailDto[];

    ownHouse: boolean;

    onlyChild: boolean;

    details: string;

    constructor(accountId: string, name: string, dob: string, fathersName: string, mothersName: string, mobile1: string, mobile2: string, email1: string, email2: string, height: number, weight: number, qualification: string, occupation: string, income: number, addressDetailDtos: AddressDetailDto[], ownHouse: boolean, onlyChild: boolean, details: string) {

    }
}