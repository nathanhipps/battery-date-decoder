<template>
  <div class="home flex flex-col items-center justify-center h-screen">
    <h1 class="text-center text-white mb-2">Forklift Battery Manufactured Date</h1>
    <h2 class="text-lg text-center text-white mb-8">All you need is the manufacturer and serial number</h2>
  <select 
    class="h-8 bg-white mb-4"
    v-model="manufacturer"
  >
    <option value="" disabled>Select a Manufacturer</option>
    <option 
      :key="manufacturer"
      :value="manufacturer"
      v-for="manufacturer in manufacturers"
      >{{manufacturer}}</option>
  </select>
    <input 
      class="px-2 py-2 text-center rounded mb-4"
      type="text" 
      v-model="code"
      @keydown.enter="decode" 
      placeholder="Enter Serial Number..."
    >
    <button
      class="bg-blue-lighter py-2 px-4 border border-blue-dark rounded shadow-lg hover:bg-blue-dark hover:text-white" 
      @click="decode"
    >
        Lookup
    </button>
    <p
      class="mt-4 text-white text-lg"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

import Decoder from '../Decoder'

export default {
  data() {
    return {
      manufacturer: '',
      code: '',
      message: '',
      manufacturers: [
        'BBI - Battery Builders',
        'Bulldog',
        'Crown',
        'Deka',
        'Douglas',
        'Enersys',
        'General',
        'GNB',
        'Hawker',
        'HUP',
        'Reaco'
      ],
    }
  },

  methods: {
    decode () {
      if (this.code) {
        let manufacturer = /^[a-zA-Z]+/.exec(this.manufacturer)[0]
        const decoder = new Decoder(manufacturer, this.code)
        this.message  = decoder.getDateString()
      } else {
        this.message = 'Please enter a date code'
      }
    },
  }
}
</script>