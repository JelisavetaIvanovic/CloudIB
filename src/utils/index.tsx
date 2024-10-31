import { SummaryData, Transaction } from "../data";

export const calculateSummary = (data: Transaction[]): SummaryData => {
    const totalIncome = data.reduce((acc, transaction) => {
        return transaction.type === 'Income' ? acc + Number(transaction.amount) : acc;
    }, 0);

    const totalExpenses = data.reduce((acc, transaction) => {
        return transaction.type === 'Expense' ? acc + Number(transaction.amount) : acc;
    }, 0);
    
    return {
        totalIncome,
        totalExpenses,
        balance: totalIncome + totalExpenses   
    };
};

export const filterDataByCategory = (data: Transaction[], category: string) => {
    return data.filter(( trans: Transaction ) => trans.category === category)
}
