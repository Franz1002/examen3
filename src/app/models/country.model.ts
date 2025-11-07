export interface Country {
    name: {
        common: string;
        official: string;
    };
    flags: {
        png: string;
        svg: string;
    };
    capital?: string[];
    region: string;
    subregion?: string;
    population: number;
    area?: number;
    languages?: { [key: string]: string };
    currencies?: { [key: string]: { name: string; symbol: string } };
}
