import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country/model/types/country";

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency,
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
