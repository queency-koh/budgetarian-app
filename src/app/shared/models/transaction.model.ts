export interface Transaction
{
    id: string;
    type: string;
    date: string;
    title: string;
    category: string;
    amount: number;
    notes: string | null;
}