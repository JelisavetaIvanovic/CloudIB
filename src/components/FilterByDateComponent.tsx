import { useState } from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import { FilterComponentProps } from '../data';
import DateRangeComponent from './DateRangeComponent';

const FilterByDateComponent: React.FC<FilterComponentProps> = ({title}) => {
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

    return (
        <>
        <BasicModal isVisible={isFilterModalVisible} onClose={() => setIsFilterModalVisible(false)} title="Filter data by date">
            <DateRangeComponent />
            </BasicModal>
            <Button 
                className='button'
                variant="contained" 
                title={title}
                onClick={()=>setIsFilterModalVisible(true)}
                sx={{ backgroundColor: '#e91b1b', height: '30px' }}
            >
                <span className="material-symbols-outlined">
                    calendar_month
                </span>
            </Button>
            
        </>
    );
};
export default FilterByDateComponent;
