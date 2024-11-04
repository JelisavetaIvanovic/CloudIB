import { useState } from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import { useTransactionsContext } from '../context/context';

const DeleteComponent: React.FC = () => {
    const { data, setData } = useTransactionsContext();
    const { detailsViewId, setDetailsViewId } = useTransactionsContext();
    const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);

    const handleDelete = () => {
        if (detailsViewId) {
            const updatedData = data.filter(transaction => transaction.id !== detailsViewId);
            setData(updatedData);
            setDetailsViewId(null);
            setIsAddModalVisible(false);
        }
    };

    const handleCancelation = () => {
        setIsAddModalVisible(false);
        setDetailsViewId(null);
    };

    return (
        <>
            <BasicModal isVisible={isAddModalVisible} onClose={() => {setDetailsViewId(null);}} title="Delete transaction">
                <p>Are you sure you want to delete this transaction?</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Button onClick={() => handleDelete()}
                        sx={{ backgroundColor: '#e91b1b', height: '30px', color: '#ffffff' }}
                    >YES</Button>
                    <Button onClick={() => handleCancelation()}
                        sx={{ backgroundColor: '#e91b1b', height: '30px', color: '#ffffff' }}
                    >NO</Button>
                </div>
            </BasicModal>
            <Button 
                variant="contained" 
                onClick={() => setIsAddModalVisible(true)}
                sx={{ backgroundColor: '#e91b1b', height: '30px' }}
            >
                <span className="material-symbols-outlined">
                    delete
                </span>
            </Button>
            
        </>
    );
};
export default DeleteComponent;
