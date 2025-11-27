import {MapPin,Check, CircleCheck} from "lucide-react"
function HeroSection(){

    return (
      <div>
          <div class="mt-20 flex">

    <div class="font-[Rubik] ml-15 ">
       <h1 class="text-5xl text-blue-950">Want Everything to be
       <br/> easy with <b>LaslesVPN.</b></h1>
       <p class="text-gray-700 mt-4 text-base">
        Provide a network for all your needs
         with ease and fun using <b>LaslesVPN</b> <br/>
        discover interesting features from us.</p>

        <button class="bg-red-500 text-white w-40 h-10 rounded-xl mt-4 shadow-2xl shadow-red-600">Get Started</button>
         </div>
         <div class="">
           <img src="/Illustration 1.png"  class="w-120 h-60 ml-25"/>
     </div>
      </div>
      
  <div class="flex gap-70 ml-30 items-center mt-20 shadow-2xl shadow-gray-100">
     <div class="flex">
    
      <img src="/user.png" class=""/>
      <div>
        <h1 class="text-blue-950"><b>90+</b></h1>
      <span class="text-gray-700">users</span>
      </div>
      

    </div>
    <div class="flex items-center gap-3">
      
      <MapPin src="/location.png  " className="text-red-500"/>
      <div>
        <h1 class="text-blue-950"><b>30+</b></h1>
      <span class="text-gray-700">Locations</span>
      </div>
       
    </div>
    <div class="flex">
      <img src="/Server.png" class=""/>
      <div>
        <h1 class="text-blue-950"> <b>50+</b></h1>
       <span class="text-gray-700">Servers</span>
      </div>
       
    </div>
  </div>

    <div class="mt-20 flex gap-30">
    <div >
       <img src="/Illustration 2.png" class="w-120 h-60 ml-15"/>
    </div>
    <div >
        <h1 class="text-4xl text-blue-950">
            We Provide Many<br/> Features You Can Use
        </h1>  
        <p class="text-gray-700 mt-4 text-sm">
        You can explore the features that we provide with fun and<br/> 
        have their own functions each feature.</p>
        <ul class="mt-5 text-gray-700">
            <li className="flex"> <CircleCheck className="bg-green-500 text-white rounded-xl mr-2"/>Powerfull online protection.</li>
            <li className="flex"> <CircleCheck className="bg-green-500 text-white rounded-xl mr-2"/>Internet without borders.</li>
            <li className="flex"> <CircleCheck className="bg-green-500 text-white rounded-xl mr-2"/>Supercharged VPN</li>
            <li className="flex"> <CircleCheck className="bg-green-500 text-white rounded-xl mr-2"/>No specific time limits.</li>
        </ul>

    </div>
    </div>

    <div class=" mt-10" >
    <h1 class=" ml-120 text-2xl text-blue-950 font-bold">Choose your Plan</h1>
    <span class="ml-90 text-gray-700">Let's choose the package that is best for you and explore it happily and <br/>
                                          <span className="ml-140">cheerfully.</span> </span>
</div>

<div class="flex ml-40 gap-40 mt-20 font-[Rubik]">
        <div>
         <img src="/Free.png" />
         <p class="items-center justify-center ml-9 mt-5 text-blue-950"><b>Free Plan</b></p>
         <div class="text-gray-700 mt-7">
            <ul>
              
                <li className="flex"> <Check/>Unlimited Bandwitch</li>
                <li className="flex"><Check/>Encrypted Connection</li>
                <li className="flex"><Check/>No Traffic Logs</li>
                <li className="flex"><Check/>Works on All Devices</li>
            </ul>
         </div>

         <p class="mt-20 text-blue-950 ml-10" ><b>Free</b></p>

         <button class="border-2 border-red-500 text-red-500 mt-2 w-25 rounded-xl ml-3">Select</button>
        </div>

        <div class="">
         <img src="/Free.png" />
         <p class="items-center justify-center ml-7 mt-5 text-blue-950"><b>Standard Plan</b></p>
         <div class="text-gray-700 mt-7">
            <ul>
                <li className="flex"> <Check/> Unlimited Bandwitch</li>
                <li className="flex"> <Check/> Encrypted Connection</li>
                <li className="flex"> <Check/>No Traffic Logs</li>
                <li className="flex"> <Check/>Works on All Devices</li>
                <li className="flex"> <Check/>Connect Anyware</li>
            </ul>
         </div>

         <p class="mt-14 text-gray-700"><b class="text-blue-950 ml-10">$9</b> / mo</p>

         <button class="border-2 border-red-500 text-red-500 mt-2 w-25 rounded-xl ml-5">Select</button>
        </div>

        <div class="">
         <img src="/Free.png" />
         <p class="items-center justify-center ml-7 mt-5 text-blue-950"><b>Premium Plan</b></p>
         <div class="text-gray-700 mt-7">
            <ul>
                <li className="flex"> <Check/> Unlimited Bandwitch</li>
                <li className="flex"> <Check/> Encrypted Connection</li>
                <li className="flex"> <Check/> No Traffic Logs</li>
                <li className="flex"> <Check/> Works on All Devices</li>
                <li className="flex"> <Check/> Connect Anyware</li>
                <li className="flex"> <Check/> Get New Features</li>
            </ul>
         </div>

         <p class="mt-8 text-gray-700"><b class="text-blue-950 ml-10">$12</b> / mo</p>

         <button class="border-2 text-white bg-red-500 mt-2 w-25 rounded-xl shadow-red-700 shadow-2xl ml-5">Select</button>
        </div> 
 </div>

    </div>
    )
}
export default HeroSection;