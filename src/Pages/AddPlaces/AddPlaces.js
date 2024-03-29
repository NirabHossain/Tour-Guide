import React from 'react';
import { useForm } from "react-hook-form";


const AddPlaces = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/places`;
        fetch(url,{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(inf=>console.log(inf))
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>This is the place to add</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("about")} />
                <input className='mb-2' placeholder='Availability' type="number" {...register("isAvailable")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("cost")} />
                <input className='mb-2' placeholder='Address' type="text" {...register("address")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
                <input type="submit" value="Add Places" />
            </form>
        </div>
    );
};

// , { min: 18, max: 99 }
// , { pattern: /^[A-Za-z]+$/i }

export default AddPlaces;

