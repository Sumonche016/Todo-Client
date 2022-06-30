import React from 'react';

const Modal = (props) => {

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <form action="">
                        <input placeholder={props?.text} className='bg-black text-white' type="text" />

                        <label onClick={handleUpdate} for="my-modal-6" type='submit' class="btn">Yay!</label>

                    </form>



                </div>
            </div>
        </div>
    );
};

export default Modal;