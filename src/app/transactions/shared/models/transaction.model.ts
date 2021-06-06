export interface Transaction
{
    id: number;
    type: 'income' | 'expense';
    date: string;
    title: string;
    category: string;
    amount: number;
    notes: string | null;
}