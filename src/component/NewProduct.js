import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { productContext } from './ProductsContext';


const currencies = [
    {
        value: 'נוף',
        label: 'נוף',
    },
    {
        value: 'ילדים',
        label: 'ילדים',
    },
    {
        value: 'ערים בעולם',
        label: 'ערים בעולם',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function NewProduct() {
    const products = useContext(productContext)

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const addProduct = () => {

        products.setProducts([...products.products, {
            id,
            name,
            category: currency,
            price,
            image
        }])
    }




    return (
        <form className={`${classes.root} centerRight`} noValidate autoComplete="off">
            <TextField label="קוד מוצר" value={id} onChange={e => setId(e.target.value)} />{/*onKeyPress={e=>(e.target.value>=0 && e.target.value<=9)?'':event.preventDefault()}*/}
            <TextField label="שם מוצר" value={name} onChange={e => setName(e.target.value)} />
            <TextField value={price} onChange={e => setPrice(e.target.value)}
                label="מחיר מוצר"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                select
                label="בחר קטגוריה"
                value={currency}
                onChange={handleChange}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField id="filled-basic" label="תמונה" value={image} onChange={e => setImage(e.target.value)} />

            <Button onClick={() => addProduct()}
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                id="smaller"
                startIcon={<SaveIcon />}
            >
                שמור
            </Button>

        </form>
    )
}

export default NewProduct;