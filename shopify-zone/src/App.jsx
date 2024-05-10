import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ClothInfo from "./components/ClothInfo";
import Cart from "./components/Cart";
import useClothes from "./contexts/CartContext";
import Footer from "./components/Footer";

function App() {

  const {arr,total,setArr,setTotal}=useClothes();
  
  function addNewCloth(cloth) {
    let present=false;
    for(let a of arr){
      if(a.name===cloth.name){
        setTotal(cloth.price+total);
        a.q+=1;
        present=true;
      }
    }
    if(!present) setArr([...arr, cloth]);
  }
  

  function removeFromArray(id){
    const newArray=arr.filter(obj => obj !== id);
    setArr([...newArray]);
  }
  useEffect(()=>{
    if(arr.length===0) setTotal(0);
  },[arr]); 

  // useEffect(() => {
  //   const arr = JSON.parse(localStorage.getItem("arr"))

  //   if (arr && arr.length > 0) {
  //     setArr(arr)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("arr", JSON.stringify(arr))
  // }, [arr])

  return (
    <>
      <Navbar /> 

      <marquee behavior="scroll" direction="left" className="text-red-500" scrollamount="10">
        Check out our amazing deals on T-shirts!
      </marquee>
      <div className="flex items-center mb-10 ml-10">
        <input type="text" placeholder="Search" className="mr-4 p-2 border border-gray-300 rounded-lg" />
        <div className="flex space-x-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">T-Shirt</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Trousers</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Skirt</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Dress</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Suit</button>
        </div>
      </div>
      <marquee behavior="scroll" direction="right" className="text-green-500" scrollamount="8">
        Limited time offer: Buy one, get one free on all trousers!
      </marquee>

      <div className="main-content">
        <div id="clothes">
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.2e810a7fe401b97909d9de984da91c2b?rik=mwfRmuEEtXO%2fRg&riu=http%3a%2f%2fteamshirtpros.com%2fwp-content%2fuploads%2f2016%2f03%2f2400-CG7C_C1_Long-Sleeve_Sports-Gray.jpg&ehk=T4us9iuSVcjlKKZq4RgHMKjpE38v9cyARDZhzwmonmU%3d&risl=&pid=ImgRaw&r=0"
            name="Sweat Shirt"
            price="$70"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/OIP.s2mOaD0vEwZRNszVhzWdnAHaJQ?pid=ImgDet&w=474&h=592&rs=1"
            name="Purple Sweat Shirt"
            price="$120"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.519ee84b18c14502bf9dd4e244863700?rik=8THhyfhnXTtlhg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fblue-tshirt-png-t-shirt-png-image-2000.png&ehk=unXPJaTM%2fIFs2pH9ypAqc8Ff68y7CZG8hx3OkCxXzVs%3d&risl=1&pid=ImgRaw&r=0"
            name="Blue T-Shirt"
            price="$95"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
            
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.2e810a7fe401b97909d9de984da91c2b?rik=mwfRmuEEtXO%2fRg&riu=http%3a%2f%2fteamshirtpros.com%2fwp-content%2fuploads%2f2016%2f03%2f2400-CG7C_C1_Long-Sleeve_Sports-Gray.jpg&ehk=T4us9iuSVcjlKKZq4RgHMKjpE38v9cyARDZhzwmonmU%3d&risl=&pid=ImgRaw&r=0"
            name="Sweat Shirt"
            price="$70"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.519ee84b18c14502bf9dd4e244863700?rik=8THhyfhnXTtlhg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fblue-tshirt-png-t-shirt-png-image-2000.png&ehk=unXPJaTM%2fIFs2pH9ypAqc8Ff68y7CZG8hx3OkCxXzVs%3d&risl=1&pid=ImgRaw&r=0"
            name="Blue T-Shirt"
            price="$95"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
            
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.2e810a7fe401b97909d9de984da91c2b?rik=mwfRmuEEtXO%2fRg&riu=http%3a%2f%2fteamshirtpros.com%2fwp-content%2fuploads%2f2016%2f03%2f2400-CG7C_C1_Long-Sleeve_Sports-Gray.jpg&ehk=T4us9iuSVcjlKKZq4RgHMKjpE38v9cyARDZhzwmonmU%3d&risl=&pid=ImgRaw&r=0"
            name="Sweat Shirt"
            price="$70"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.519ee84b18c14502bf9dd4e244863700?rik=8THhyfhnXTtlhg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fblue-tshirt-png-t-shirt-png-image-2000.png&ehk=unXPJaTM%2fIFs2pH9ypAqc8Ff68y7CZG8hx3OkCxXzVs%3d&risl=1&pid=ImgRaw&r=0"
            name="Blue T-Shirt"
            price="$95"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
            
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.2e810a7fe401b97909d9de984da91c2b?rik=mwfRmuEEtXO%2fRg&riu=http%3a%2f%2fteamshirtpros.com%2fwp-content%2fuploads%2f2016%2f03%2f2400-CG7C_C1_Long-Sleeve_Sports-Gray.jpg&ehk=T4us9iuSVcjlKKZq4RgHMKjpE38v9cyARDZhzwmonmU%3d&risl=&pid=ImgRaw&r=0"
            name="Sweat Shirt"
            price="$70"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/OIP.s2mOaD0vEwZRNszVhzWdnAHaJQ?pid=ImgDet&w=474&h=592&rs=1"
            name="Purple Sweat Shirt"
            price="$120"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.519ee84b18c14502bf9dd4e244863700?rik=8THhyfhnXTtlhg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fblue-tshirt-png-t-shirt-png-image-2000.png&ehk=unXPJaTM%2fIFs2pH9ypAqc8Ff68y7CZG8hx3OkCxXzVs%3d&risl=1&pid=ImgRaw&r=0"
            name="Blue T-Shirt"
            price="$95"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
            
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/R.519ee84b18c14502bf9dd4e244863700?rik=8THhyfhnXTtlhg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fblue-tshirt-png-t-shirt-png-image-2000.png&ehk=unXPJaTM%2fIFs2pH9ypAqc8Ff68y7CZG8hx3OkCxXzVs%3d&risl=1&pid=ImgRaw&r=0"
            name="Blue T-Shirt"
            price="$95"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
            
          />
          <ClothInfo
            imgSrc="https://th.bing.com/th/id/OIP.s2mOaD0vEwZRNszVhzWdnAHaJQ?pid=ImgDet&w=474&h=592&rs=1"
            name="Purple Sweat Shirt"
            price="$120"
            addNewCloth={addNewCloth}
            total={total}
            setTotal={setTotal}
            category="T-shirt"
          />
        </div>
        <Cart remove={removeFromArray}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
