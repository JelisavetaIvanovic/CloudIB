import { useState, ChangeEvent, FormEvent } from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import { Transaction } from '../data';
import { useTransactionsContext } from '../context/context';

const AddComponent: React.FC = () => {
    const { data, setData } = useTransactionsContext();
    const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
    const [formData, setFormData] = useState<{
        description: string;
        amount: number;
        type: string;
        category: string;
    }>({
        description: '',
        amount: 0,
        type: '',
        category: '',
    });
    const [errorFields, setErrorFields] = useState<{
        description: boolean;
        amount: boolean;
        type: boolean;
        category: boolean;
    }>({
        description: false,
        amount: false,
        type: false,
        category: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrorFields((prevFields) => ({
            ...prevFields,
            [name]: !value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrorFields = {
            description: !formData.description,
            amount: formData.amount == 0,
            type: formData.type !== 'Income' && formData.type !== 'Expense',
            category: !formData.category,
        };

        if (formData.type === 'Income' && formData.amount <= 0) {
            newErrorFields.amount = true;
        } else if (formData.type === 'Expense' && formData.amount >= 0) {
            newErrorFields.amount = true;
        }

        if (Object.values(newErrorFields).some((field) => field)) {
            setErrorFields(newErrorFields);

            if (newErrorFields.type) {
                alert("Type must be 'Income' or 'Expense'");
            } else if (formData.type === 'Income' && formData.amount <= 0) {
                alert("Amount for Income must be greater than 0");
            } else if (formData.type === 'Expense' && formData.amount >= 0) {
                alert("Amount for Expense must be less than 0");
            } else {
                alert("All fields are required");
            }
            return;        
        }

        const newItem: Transaction = {
            id: data.length + 1,
            date: new Date().toISOString().split('T')[0],
            ...formData,
        };
        setData([...data, newItem]);
        setIsAddModalVisible(false);
        setFormData({
          description: '',
          amount: 0,
          type: '',
          category: '',
        });
        setErrorFields({
            description: false,
            amount: false,
            type: false,
            category: false,
        });
    };

    const handleCloseModal = () => {
        setIsAddModalVisible(false);
        setFormData({
            description: '',
            amount: 0,
            type: '',
            category: '',
        });

        setErrorFields({
            description: false,
            amount: false,
            type: false,
            category: false,
        });
    };

    return (
        <>
            <BasicModal isVisible={isAddModalVisible} onClose={handleCloseModal} title="Add transaction">
                <div>
                    <form onSubmit={handleSubmit} className="form-add-form">
                        <div>
                            <label>*Description:</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="input-add-form"
                            />
                        </div>
                        <div>
                            <label>*Amount:</label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className={`input-add-form ${errorFields.description ? 'error' : ''}`}

                            />
                        </div>
                        <div className='select'>
                            <label>*Type:</label>
                            <input
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className={`input-add-form ${errorFields.description ? 'error' : ''}`}

                            />
                        </div>
                        <div>
                            <label>*Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={`input-add-form ${errorFields.description ? 'error' : ''}`}

                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </BasicModal>
            <Button 
                variant="contained" 
                onClick={() => setIsAddModalVisible(true)}
                sx={{ backgroundColor: '#e91b1b', height: '30px' }}
            >
                <span className="material-symbols-outlined">
                    edit_square
                </span>
            </Button>
            
        </>
    );
};
export default AddComponent;
