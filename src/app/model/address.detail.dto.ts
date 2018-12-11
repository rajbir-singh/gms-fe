export class AddressDetailDto {

    addressId: string;

    // @NotNull
    // @Size(min = 5)
    addressLine1: string;

    addressLine2: string;

    addressLine3: string;

    addressLine4: string;

    //TODO : crete city enums
    city: string;

//    @Convert(converter = StateEAConverter.class)
    state: string;

    pincode: string;

    country: string;

    addressType: string;

    //will be null if address is created along with a new account, else this must be the accountId of the account to which this address belongs
    accountId: number;

    constructor(addressId: string, addressLine1: string, addressLine2: string, addressLine3: string, addressLine4: string, city: string, state: string, pincode: string, country: string, addressType: string, accountId: number) {
        
    }
}