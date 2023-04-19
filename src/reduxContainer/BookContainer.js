import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './BookAction';

function BookContainer() {

const noOfbooks=useSelector(state=>state.NumberOfBooks);
const dispatch=useDispatch();

    return (
        <>
        <div>
            <h1>Book Container</h1>
            <h2>No of books:{noOfbooks}</h2>
            <button onClick={()=>(dispatch(purchase_book()))}>Buy Book</button>
        </div>
        </> 
    )
}

export default BookContainer
