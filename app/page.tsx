import Content from "./component/Content";
import Header from "./component/Header";
import NavBar from "./component/NavBar";


export default function Home() {
  return (
   <main className="flex min-h-screen flex-col bg-white  ">
    <Header/>
    <div className="flex xl:flex-row flex-col w-full h-[90%] ">
    <NavBar/>
    <Content/>
    </div>
   </main>
  );
}
