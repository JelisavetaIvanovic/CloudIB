import { useEffect, useState } from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import Table from './Table';
import { FilterComponentProps } from "../data";
import { useTransactionsContext } from '../context/context';
import { filterDataByCategory } from '../utils';

const FilterByCategoryComponent: React.FC<FilterComponentProps> = ({ title }) => {
    const { data } = useTransactionsContext();
    const [filteredData, setFilteredData] = useState(data);
    const [filterInput, setFilterInput] = useState('');
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
    
    useEffect(() => {
        setFilteredData(filterDataByCategory(data, filterInput));
    },
    [filterInput]);

    return (
        <>
            <BasicModal isVisible={isFilterModalVisible} onClose={() => {setIsFilterModalVisible(false); setFilterInput('');}} title="Filter data by category">
                <input 
                    type="text" 
                    value={filterInput} 
                    onChange={(e) => setFilterInput(e.target.value)} 
                />
                {filteredData.length > 0 && 
                    <Table headerArray={['Category', 'Description', 'Amount']} bodyArray={filteredData} />
                }
                {filteredData.length === 0 && <div>No data</div>}
            </BasicModal>
            <Button 
                className='button'
                title={title}
                variant="contained" 
                onClick={()=>setIsFilterModalVisible(true)}
                sx={{ backgroundColor: '#e91b1b', height: '30px' }}
            >
                    <span className="material-symbols-outlined">
                        tune
                    </span>
            </Button>
        </>
    )
};

export default FilterByCategoryComponent;