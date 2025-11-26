import { ArrowLeft, ArrowRight, Dot} from "lucide-react";

 


function Testimonial(){

    return(
        <>
          <div className="">
            <div className="">
                <h1 class="justify-center items-center ml-110 text-2xl text-blue-950 mt-20 font-bold">
                    Trusted by Thousands of <br/>  <span className="ml-7">Happy Customer</span>
                </h1>
                <p className="ml-80 text-gray-700">
                    These are the stories of our customers 
                    who have joined us with great<br/> 
                   <span className="ml-20" t>pleasure when using this crazy feature.</span> .</p>
            </div>

            <div className="mt-15 flex gap-8">
                <section className="border-4 border-red-500 w-95 p-5 rounded-xl shadow-2xl">
                   
                   <div className="flex items-center">
                   <img className="w-10 h-10" src="/image3.png" />
                   <h3 className="ml-2 font-[Rubik]"> Viezh Rbert <br/><span className="text-xs font-[Rubik]">Warsaw, Poland</span></h3> 
                   <span className="ml-30">4.5 ⭐</span>
                   </div>
                   <p  className="font-[Rubik] mt-5">
                    “Wow... I am very happy to use this VPN, it <br/>
                    turned out to be more than my expectations<br/>
                    and so far there have been no problems. <br/>
                    LaslesVPN always the best”.</p>
                </section>
                <section className="border-4 border-gray-100 w-95 p-5 rounded-xl shadow-2xl">
                    <div className="flex items-center">
                   <img className="w-10 h-10" src="/image2.png" />
                   <h3 className="ml-2 font-[Rubik]"> Yessica Christy <br/><span className="text-xs font-[Rubik]">Shanxi, China</span></h3> 
                   <span className="ml-30 font-[Rubik]" >4.5 ⭐</span>
                   </div>
                   <p className="font-[Rubik] mt-5">
                    “I like it because I like to travel far and still can <br/>
                    connect with high speed.”.</p>
                </section>
                <section className="border-4 border-gray-100 w-95 p-5 rounded-xl shadow-2xl">
                    <div className="flex items-center">
                   <img className="w-10 h-10" src="/image4.png" />
                   <h3 className="ml-2 font-[Rubik]"> Kim Young Jou <br/><span className="text-xs font-[Rubik]">Seoul, South Korea</span></h3> 
                   <span className="ml-30 font-[Rubik]">4.5 ⭐</span>
                   </div>
                   <p className="font-[Rubik] mt-5">
                    “This is very unusual for my business that <br/>
                    currently requires a virtual private network<br/> 
                    that has high security.”.</p>
                </section>
            </div>

            <div className=" flex mt-15">
                <section className="flex items-center text-gray-600 ml-10" >
                <Dot className="w-7 h-2 border-2 bg-red-500 rounded-2xl text-red-500"/>
                <Dot />
                <Dot />
                <Dot/> 
                
                </section>
                <section className="ml-210 flex gap-2">
                  <ArrowLeft className="w-10 h-10 border-2 rounded-3xl text-red-500 p-3"/>
                  <ArrowRight className="w-10 h-10 rounded-3xl bg-red-500 text-white p-3"/>
                </section>
            </div>

          </div>
        </>
    )
}
export default Testimonial;