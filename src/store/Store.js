import { configureStore } from "@reduxjs/toolkit";
import dataslicereducer from './Projectdataslice'
export default configureStore({
    reducer:{
        prodata:dataslicereducer
    }
})