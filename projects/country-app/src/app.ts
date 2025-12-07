/**
 * MET CS601 - Assignment 4
 * Country Management System
 */

interface ICountry {
    name: string;
    getInfo(element: HTMLElement): HTMLElement;
}

class RainyCountry implements ICountry {
    name: string;
    rainLevel: number;

    constructor(name: string, rainLevel: number) {
        this.name = name;
        this.rainLevel = rainLevel;
    }

    getInfo(element: HTMLElement): HTMLElement {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}

class SnowyCountry implements ICountry {
    name: string;
    snowLevel: number;

    constructor(name: string, snowLevel: number) {
        this.name = name;
        this.snowLevel = snowLevel;
    }

    getInfo(element: HTMLElement): HTMLElement {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}

class IslandCountry implements ICountry {
    name: string;
    landSize: number;

    constructor(name: string, landSize: number) {
        this.name = name;
        this.landSize = landSize;
    }

    getInfo(element: HTMLElement): HTMLElement {
        element.textContent = `${this.name} has a land size of ${this.landSize.toLocaleString()} square miles.`;
        return element;
    }
}

const countries: ICountry[] = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];

const snowyCountriesList: SnowyCountry[] = [];


function isSnowyCountry(country: ICountry): country is SnowyCountry {
    return (country as SnowyCountry).snowLevel !== undefined;
}


function checkForSnow(country: ICountry): SnowyCountry | null {
    if (isSnowyCountry(country)) {
        return country;
    }
    return null;
}

for (const country of countries) {
    const result = checkForSnow(country);
    if (result !== null) {
        snowyCountriesList.push(result);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const allCountriesDiv = document.getElementById("all-countries")!;
    const snowyCountriesDiv = document.getElementById("snowy-countries")!;
    const totalSnowDiv = document.getElementById("total-snow")!;

    countries.forEach(country => {
        const p = document.createElement("p");
        allCountriesDiv.appendChild(country.getInfo(p));
    });
    let totalSnow = 0;

    snowyCountriesList.forEach(country => {
        const p = document.createElement("p");
        snowyCountriesDiv.appendChild(country.getInfo(p));
        totalSnow += country.snowLevel;
    });

    totalSnowDiv.textContent = `Total snow level: ${totalSnow} inches.`;
});