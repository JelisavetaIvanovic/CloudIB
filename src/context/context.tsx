import { createContext, useContext, useState } from 'react';
import { TransactionsContextType, TransactionsProviderProps } from '../data';

const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);

export const useTransactionsContext = () => {
    const context = useContext(TransactionsContext);
    if (!context) {
        throw new Error("useTransactionsContext must be used within a TransactionsProvider");
    }
    return context;
};

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ val, children }) => {
    const [data, setData] = useState(val);
    const [detailsViewId, setDetailsViewId] = useState<number | null>(null);

    const value = {
        data,
        setData,
        detailsViewId,
        setDetailsViewId,
    };

    return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>;
};
