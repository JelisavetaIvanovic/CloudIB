import { Dayjs } from "dayjs";
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

export const filterDataByCategory = (data: Transaction[], category: string): Transaction[] => {
    return data.filter(( trans: Transaction ) => trans.category === category)
}

export const filterDataByDate = (data: Transaction[], startDate: Dayjs | null, endDate: Dayjs | null): Transaction[] => {
    return data.filter((trans: Transaction) => {
        const transDate = new Date(trans.date);
        const startCondition = startDate ? transDate >= startDate.startOf('day').toDate() : true;
        const endCondition = endDate ? transDate <= endDate.endOf('day').toDate() : true;
        return startCondition && endCondition;
    });
}
 