
const AddCoffee = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-4/5 justify-center items-center p-4 md:p-12 bg-[#F4F3F0] gap-4">
                <h3 className="text-2xl font-bold">Add New Coffee</h3>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a <br /> page when looking at its layout. The point of using Lorem Ipsum is that it has a <br /> more-or-less normal distribution  of letters, as opposed to using Content here.</p>
                <div>
                    <form>
                        <div className="flex gap-6 items-center w-full">
                        <div className="flex flex-col gap-4 w-full">
                        <label>name</label>
                        <input type="text" placeholder="Medium"  name="" className="input md:w-96 input-md" />
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        </div>
                             <div className="flex flex-col gap-4 w-full">
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        <label>name</label>
                        <input type="text" placeholder="Medium" name="" className="input input-md md:w-96" />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;