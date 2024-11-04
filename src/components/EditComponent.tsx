import { useState, ChangeEvent, FormEvent } from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import { useTransactionsContext } from '../context/context';
import { FormData, ErrorFields } from '../data';

const EditComponent: React.FC = () => {
    const { data, setData } = useTransactionsContext();
    const { detailsViewId, setDetailsViewId } = useTransactionsContext();
    const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        description: detailsViewId !== null ? data[detailsViewId - 1].description : '',
        amount: detailsViewId !== null ? data[detailsViewId - 1].amount : 0,
        type: detailsViewId !== null ? data[detailsViewId - 1].type : '',
        category: detailsViewId !== null ? data[detailsViewId - 1].category : '',
    });
    const [errorFields, setErrorFields] = useState<ErrorFields>({
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
        if (detailsViewId !== null) {
            const updatedData = data.map(transaction => {
                if (transaction.id === detailsViewId) {
                    return {
                        ...transaction,
                        ...formData, 
                    };
                }
                return transaction; 
            });
            setData(updatedData);
        }
        setIsAddModalVisible(false);
        setErrorFields({
            description: false,
            amount: false,
            type: false,
            category: false,
        });
    };

    return (
        <>
            <BasicModal isVisible={isAddModalVisible} onClose={() => {setDetailsViewId(null);}} title="Edit transaction">
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
export default EditComponent;
