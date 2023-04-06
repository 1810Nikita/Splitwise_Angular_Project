export interface Group {
    id?: number;
    name: string;
    type: string;
    members: { name: string, email: string }[];
}