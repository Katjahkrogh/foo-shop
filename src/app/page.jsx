import Camping from "@/components/Camping";
import TicketType from "@/components/TicketType";
import Wrapper from "@/components/Wrapper";
import Test from "@/components/Test";


export async function getData() {

let response = await fetch("http://localhost:8080/available-spots", { 
  method: "GET",
});

let data = await response.json();
return data;
}



function Home() {
 return (
   <>
     <Wrapper />
     <Test />
   </>
 );
}

export default Home
 
