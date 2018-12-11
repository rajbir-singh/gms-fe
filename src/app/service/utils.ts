export class Utils{

    getNumberFromString(str: string) : number {
        return +str;
    }

    isStringEmpty(str: string): boolean {
        return !str;
    }

    isStringNonEmpty(str: string): boolean {
        return !!str;
    }

    areTwoStringsSame(str1: string, str2: string): boolean {
        return str1 && str2 && str1 === str2;
    }
}