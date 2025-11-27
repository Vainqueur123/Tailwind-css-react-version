
function Navbar(){

    return(
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-30">
    <div className="flex items-center">
       <img className="p-5 w-20 h-23 ml-10" src="/image1.png"/>
       <h1 className="text-2xl font-[Rubik] text-blue-950">LaslesVPN</h1>
    </div>
    <div className="flex gap-8 font-[Rubibk] text-gray-700">
        <a href="#" >About</a>
        <a href="#" >Feature</a>
        <a href="#" >Pricing</a>
        <a href="#" >Testimonials</a>
        <a href="#" >Help</a>
    </div>
    <div className="flex  font-[Rubik] ">
        <a href="#" className="w-30">Sign in </a>
        <button className="border-2 rounded-2xl border-red-500 text-red-500 w-30 h-8 ">Sign up</button>
    </div>
</div>

     </div>
    )
}
export default Navbar;