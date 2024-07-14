// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { mobiles } from '../data';

// const EditPage = () => {
//     const {id} = useParams();
//     const [edit, setEdit] = useState(null);

//     useEffect(() => {
//         const productToEdit = mobiles.find((item) => item.id === parseInt(id));
//         setEdit(productToEdit);
//         console.log("edit data", edit)
//     },[id]);

//   return (
//     <div>
//         <p>Edit page</p>
//         {
//             edit &&  (
//                 <div key={edit.id}>
//                     <p>{edit.title}</p>
//                 </div>
//             )
//         }
//     </div>
//   )
// }

// export default EditPage
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = ({ updateMobiles, mobiles }) => {
    const { id } = useParams();
    const [edit, setEdit] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });

    useEffect(() => {
        const productToEdit = mobiles.find((item) => item.id === parseInt(id));
        if (productToEdit) {
            setEdit({
                title: productToEdit.title,
                description: productToEdit.description,
                price: productToEdit.price,
                image: productToEdit.image
            });
        }
    }, [id, mobiles]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMobiles = mobiles.map((item) =>
            item.id === parseInt(id) ? { ...item, ...edit } : item
        );
        updateMobiles(updatedMobiles);
        console.log('Updated mobiles array:', updatedMobiles);
    };

    return (
        <div>
            <p>Edit page</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={edit.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={edit.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={edit.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={edit.image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditPage;
