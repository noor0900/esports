import React from 'react'

function Footer() {

  return (
    <footer class="bg-black text-white py-10 mt-20">
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">Games</h5>
            <ul class="space-y-1">
                <li><a href="#" class="hover:underline">League of Legends</a></li>
                <li><a href="#" class="hover:underline">CS:GO</a></li>
                <li><a href="#" class="hover:underline">VALORANT</a></li>
                <li><a href="#" class="hover:underline">DOTA 2</a></li>
                <li><a href="#" class="hover:underline">Call of Duty</a></li>
                <li><a href="#" class="hover:underline">Pokemon</a></li>
            </ul>
        </div>

        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">Guides</h5>
            <ul class="space-y-1">
                {/* <li><a href="#" class="hover:underline">League of Legends Guides</a></li> */}
                <li><a href="#" class="hover:underline">CS:GO Guides</a></li>
                <li><a href="#" class="hover:underline">Dota2 Guides</a></li>
                <li><a href="#" class="hover:underline">Call of Duty Guides</a></li>
                <li><a href="#" class="hover:underline">Pokemon Guides</a></li>
            </ul>
        </div>

        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">News</h5>
            <ul class="space-y-1">
                {/* <li><a href="#" class="hover:underline">League of Legends New</a></li> */}
                <li><a href="#" class="hover:underline">CS:GO News</a></li>
                <li><a href="#" class="hover:underline">Dota2 News</a></li>
                <li><a href="#" class="hover:underline">Call of Duty News</a></li>
                <li><a href="#" class="hover:underline">Pokemon News</a></li>
                <li><a href="#" class="hover:underline">Fifa News</a></li>
            </ul>
        </div>

        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">Patchnotes</h5>
            <ul class="space-y-1">
                {/* <li><a href="#" class="hover:underline">League of Legends Patchnotes</a></li> */}
                <li><a href="#" class="hover:underline">CS:GO Patchnotes</a></li>
                <li><a href="#" class="hover:underline">Dota2 Patchnotes</a></li>
                <li><a href="#" class="hover:underline">Call of Duty Patchnotes</a></li>
            </ul>
        </div>

        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">More</h5>
            <ul class="space-y-1">
                <li><a href="#" class="hover:underline">Gaming News</a></li>
                <li><a href="#" class="hover:underline">Entertainment</a></li>
                <li><a href="#" class="hover:underline">Videos</a></li>
            </ul>
        </div>

        <div class="mb-6 md:mb-0 mt-80 ">
            <h5 class="font-bold mb-2">Follow us</h5>
            <div class="flex space-x-4">
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-instagram"></i></a>
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-youtube"></i></a>
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-discord"></i></a>
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-twitch"></i></a>
                <a href="#" class="hover:text-yellow-500"><i class="fab fa-tiktok"></i></a>
            </div>
        </div>

        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">Partner</h5>
            <ul class="space-y-1">
                <li><a href="#" class="hover:underline">Uniliga</a></li>
                <li><a href="#" class="hover:underline">ESL</a></li>
            </ul>
        </div>

        <div class="mb-6 md:mb-0">
            <h5 class="font-bold mb-2">Other Links</h5>
            <ul class="space-y-1">
                <li><a href="#" class="hover:underline">Imprint</a></li>
                <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                <li><a href="#" class="hover:underline">Cookie Policy</a></li>
                <li><a href="#" class="hover:underline">Cookie Policy Settings</a></li>
                <li><a href="#" class="hover:underline">Contact</a></li>
                <li><a href="#" class="hover:underline">Editorial Staff</a></li>
                <li><a href="#" class="hover:underline">Terms and Conditions</a></li>
            </ul>
        </div>
    </div>

    {/* <!-- Button Section --> */}
    {/* <div class="text-center mt-8">
        <a href="#" class="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">Contact Us</a>
    </div> */}
    <hr className='mt-10 w-[87%] ml-20' />


    <div class="text-center text-gray-400 mt-10">
        © 2023 Seven.One Entertainment Group GmbH
    </div>
</footer>



  )
}

export default Footer