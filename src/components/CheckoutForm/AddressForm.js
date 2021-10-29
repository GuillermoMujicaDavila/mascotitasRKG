import React from 'react'
import {Typography,Grid,Button} from "@material-ui/core"
import {useForm,FormProvider} from 'react-hook-form'
import AddressInput from './AddressInput'
import{Link} from "react-router-dom"
import  {AuthContextProvider} from '../../context/authContext'
const AddressForm = () => {
    const methods=useForm();
    return (
        <div>
            <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data=>{})}>
                    <Grid container spacing={3}>
                        <AddressInput required name="firstName" label="First Name"/>
                        <AddressInput required name="lastName" label="Last Name"/>
                        <AddressInput required name="email" label="email address"/>
                        <AddressInput required name="city" label="city"/>
                        <AddressInput required name="postCode" label="Post Code"/>
                    </Grid>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'1rem'}}>
        <Button component={Link} to="/checkout-page">Back to the checkout Page</Button>
        <Button type="submit" variant="contained" color="primary">Next</Button>
        </div>
                </form>
            </FormProvider>
            <form></form>
        </div>
    )
}

export default AddressForm
