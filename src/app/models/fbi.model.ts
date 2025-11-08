export interface FbiWanted {
    uid: string;
    title: string;
    description: string;
    url: string;
    images?: { original: string }[];
    publication: string;
    subjects?: string[];
    sex?: string;
    eyes?: string;
    hair?: string;
    reward_text?: string;
}
