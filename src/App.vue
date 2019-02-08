<template>
  <div id="app">
    <div id="nav" class="fixed pin-t w-full flex justify-center items-center bg-blue-light h-8">
      <router-link
        class="no-underline mr-6 text-white hover:text-blue-darker"
        to="/">
          Home
      </router-link>
      <router-link
        class="no-underline mr-6 text-white hover:text-blue-darker" 
        to="/about">
          About
      </router-link>
      <router-link
        class="no-underline text-white hover:text-blue-darker" 
        to="/installation">
          Installation
      </router-link>
    </div>
    <router-view/>
    <div class="-mt-20">
      <p class="text-center mb-2">Maintained by
        <a 
          class="text-black font-bold no-underline hover:underline" 
          href="mailto:nathanhipps@gmail.com">
          Nathan Hipps 
        </a>
      </p>
      <p class="text-center">Send me a message if you are having problems with a serial number</p>
      
    </div>
  </div>
</template>
