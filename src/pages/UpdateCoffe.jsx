import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const coffee = useLoaderData()
    console.log(coffee)
     const {name, supplier, category, cafe, test, details, _id } = coffee;

     const handleUpdateCoffee = e => {
        e.preventDefault()
          const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const cafe = form.cafe.value;
        const test = form.test.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffeValue = { name, supplier, category, cafe, test, details, photo }

        fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedCoffeValue)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.modifiedCount > 0){
                              Swal.fire({
                            title: 'Success!',
                            text: 'Coffee Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        }
                      
                        
                    })
     }
    return (
         <div className='container mx-auto mt-6'>
            
        <div className="flex flex-col gap-4">
          <Link to="/"><button className="btn text-black">Back to Home</button></Link>
            <div className="flex flex-col w-4/5 justify-center items-center p-4 md:p-12 bg-[#F4F3F0] gap-4">
                <h3 className="text-2xl font-bold">Update Existing Coffee Details</h3>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a <br /> page when looking at its layout. The point of using Lorem Ipsum is that it has a <br /> more-or-less normal distribution  of letters, as opposed to using Content here.</p>
                <div>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="flex flex-col gap-4 items-center justify-center">


                            <div className="flex gap-6 items-center w-full">

                                <div className="flex flex-col gap-4 w-full">
                                    <label>name</label>
                                    <input type="text" placeholder="Medium" defaultValue={name} name="name" className="input md:w-96 input-md" />
                                    <label>Supplier</label>
                                    <input type="text" placeholder="Medium" defaultValue={supplier} name="supplier" className="input input-md md:w-96" />
                                    <label>Category</label>
                                    <input type="text" placeholder="Medium" defaultValue={category} name="category" className="input input-md md:w-96" />

                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <label>Cafe</label>
                                    <input type="text" placeholder="Medium" defaultValue={cafe} name="cafe" className="input input-md md:w-96" />
                                    <label>Test</label>
                                    <input type="text" placeholder="Medium" defaultValue={test} name="test" className="input input-md md:w-96" />
                                    <label>Details</label>
                                    <input type="text" placeholder="Medium" defaultValue={details} name="details" className="input input-md md:w-96" />

                                </div>

                            </div>
                            <div className="w-full">
                                <label>Photo</label>
                                <input type="text" placeholder="Medium" name="photo" className="input w-full input-md" />
                            </div>
                            <button className="btn w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateCoffe;