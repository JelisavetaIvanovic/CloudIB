import { useEffect, useState } from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import { SummaryComponentProps, SummaryData } from '../data';
import { useTransactionsContext } from '../context/context';
import { calculateSummary } from '../utils';


const SummaryComponent: React.FC<SummaryComponentProps> = ({title}) => {
    
    const { data } = useTransactionsContext();
    const [summaryData, setSummaryData] = useState<SummaryData>({ totalIncome: 0, totalExpenses: 0, balance: 0 });
    const [isSummaryModalVisible, setIsSummaryModalVisible] = useState<boolean>(false);

    useEffect(() => {
        const summary = calculateSummary(data);
        setSummaryData(summary);
    }, [data]);

    return (
        <>
            <BasicModal
                isVisible={isSummaryModalVisible}
                onClose={() => setIsSummaryModalVisible(false)}
                title="Summary"
            >
                <div>Total Income: {summaryData.totalIncome}</div>
                <div>Total Expenses: {summaryData.totalExpenses}</div>
                <div>Balance: {summaryData.balance}</div>
            </BasicModal>
            <Button 
                title={title}
                variant="contained" 
                onClick={() => setIsSummaryModalVisible(true)}
                sx={{ backgroundColor: '#e91b1b', height: '30px' }}
            >
                <span className="material-symbols-outlined">
                    view_timeline
                </span>
            </Button>
        </>
    );
};

export default SummaryComponent;
