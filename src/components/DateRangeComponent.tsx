import React, { useEffect, useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTransactionsContext } from '../context/context';
import { filterDataByDate } from '../utils';
import Table from './Table';

const DateRangeComponent: React.FC = () => {
    const { data } = useTransactionsContext();
    const { startDate, setStartDate } = useTransactionsContext();
    const { endDate, setEndDate } = useTransactionsContext();
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(filterDataByDate(data, startDate, endDate));
    },
    [startDate, endDate]);
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                <div style={{ display: 'flex', gap: '16px'}}>
                    <DatePicker
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                    />
                    <DatePicker
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                    />
                </div>
                <div>
                    {filteredData.length > 0 && 
                    <Table headerArray={['Category', 'Description', 'Amount']} bodyArray={filteredData} />
                    }
                    {filteredData.length === 0 && <div>No data</div>}
                </div>    
                
            </div>
        </LocalizationProvider>
    );
};

export default DateRangeComponent;
