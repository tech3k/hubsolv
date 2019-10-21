import {Titles} from "./partials/titles.type";
import {EmploymentStatuses} from "./partials/employment-statuses.type";
import {MaritalStatuses} from "./partials/marital-statuses.type";
import {TimesToContact} from "./partials/times-to-contact.type";

export interface Core {
    title: keyof Titles;
    firstName: string;
    lastName: string;
    otherName: string;
    email: string;
    phoneHome: string;
    phoneMobile: string;
    employmentStatus: keyof EmploymentStatuses;
    maritalStatus: keyof MaritalStatuses;
    hasPartner: boolean;
    address1: string;
    address2: string;
    address3: string;
    town: string;
    postCode: string;
    country: string;
    placeOfBirth: string;
    partnerTitle: keyof Titles;
    partnerFirstName: string;
    partnerLastName: string;
    partnerDateOfBirth: string;
    timeToContact: keyof TimesToContact;
    note: string;
}
