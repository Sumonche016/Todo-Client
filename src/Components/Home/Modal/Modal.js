import React, { useRef } from 'react';


const Modal = (props) => {

    const updateInputref = useRef()

    const handleUpdate = (event) => {
        event.preventDefault()
        const updateValue = updateInputref.current.value;
        const input = {
            inputText: updateValue,
            id: props?.id
        }

        console.log(input)
        props?.setShow(false)
        // fetch(`http://localhost:5000/update/${props?.id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(input)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged == true) {

        //             toast('Sucessfully Update')

        //         }
        //     })

    }







    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <form action="" onSubmit={handleUpdate}>

                        <input ref={updateInputref} placeholder={props?.text} type="text" class="input input-bordered input-secondary w-full max-w-xs" />

                        <button for="my-modal-6" type='submit' class="btn btn-secondary">Button</button>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default Modal;