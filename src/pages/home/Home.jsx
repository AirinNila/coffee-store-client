import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard";

const Home = () => {
    const data = useLoaderData()
    return (
        <div className="flex flex-col">

            <div className="md:min-h-screen flex flex-col" style={{ backgroundImage: 'url(/public/images/banner.png)' }}>
                <div className="flex justify-center items-center gap-3" style={{ backgroundImage: 'url(/public/images/bg.jpg)' }}>
                    <img src="/public/images/logo1.png" alt="" className="w-16 md:w-28" />
                    <h3 className="text-white md:text-5xl text-2xl font-bold">Expresso Emporium</h3>
                </div>
                <div className="flex">
                    <div className="md:w-1/2"></div>
                    <div className="flex p-4 flex-col gap-4 md:pt-64 items-start justify-center text-white md:w-1/2">
                        <h2 className="md:text-4xl text-2xl font-bold">Would you like a Cup of Delicious Coffee?</h2>
                        <p className="text-base">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! <br /> Enjoy the beautiful moments and make them memorable.</p>
                        <div>
                            <button className="btn bg-[#E3B577]">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ECEAE3] p-4 md:px-8 flex flex-col md:flex-row md:justify-center gap-2 md:gap-4">
                <div className="flex flex-col gap-2">
                    <img src="/public/images/icons/1.png" className="w-8 md:w-24" alt="" />
                    <h3>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="/public/images/icons/2.png" className="w-8 md:w-24" alt="" />
                    <h3>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="/public/images/icons/2.png" className="w-8 md:w-24" alt="" />
                    <h3>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="/public/images/icons/4.png" className="w-8 md:w-24" alt="" />
                    <h3>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>

            <section className="flex flex-col items-center gap-4 mt-8">
                <p>--- Sip & Savor ---</p>
                <h3 className="text-2xl font-bold">Our Popular Products</h3>
                <Link to="/addCoffee"><button className="btn bg-[#E3B577]">add coffee</button></Link>
                <div className="grid grid-cols-1 gap-4 justify-center md:grid-cols-2 rounded-lg">
                    {
                        data.map(data => <CoffeeCard key={data._id} data={data}></CoffeeCard>)
                    }
                </div>
            </section>

        </div>

    );
};

export default Home;

