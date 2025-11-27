import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';


function Footer(){

    return(
           <div className="flex gap-40 mb-30 mt-20">
              <div>
                <div className='flex items-center'>
                     <img className='w-5 h-5 mr-2'  src= "/image1.png"/>
                <h1 className='font-bold text-2xl text-blue-950 font-[Rubik]'>LaslesVPN</h1>
                </div>
                
                <p className='text-gray-700 mt-5 font-[Rubik]'> <b> LaslesVPN</b> is a private virtual network that<br/> 
                has unique features and has high security.</p>
                <div className='gap-20'>
                    <FontAwesomeIcon icon={faFacebook} className='text-red-600 mr-2 '/>
                    <FontAwesomeIcon icon={faTwitter} className='text-red-600 mr-2'/>
                    <FontAwesomeIcon icon={faInstagram} className='text-red-600'/>
                </div>
                <div>
                    <p className='text-gray-700 font-[Rubik] mt-5'>&copy;2020Lasles<b>VPN</b></p>
                </div>
             </div>
             <div>
                 <h1 className='text-xl text-blue-950 font-bold font-[Rubik]'>Product</h1>
                 <ul className='text-gray-700 font-[Rubik] leading-loose'> 
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                 </ul>
                 
             </div>
             <div>
               <h1 className='text-xl text-blue-950 font-bold font-[Rubik]'>Engage</h1>
                 <ul className='text-gray-700 font-[Rubik] leading-loose'> 
                    <li>LaslesVPN ?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                 </ul>
             </div>

             <div>
                  <h1 className='text-xl text-blue-950 font-bold font-[Rubik]'>Engage</h1>
                 <ul className='text-gray-700 font-[Rubik] leading-loose'> 
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                   
                 </ul>
             </div>
           </div>
    )

}
export default Footer;