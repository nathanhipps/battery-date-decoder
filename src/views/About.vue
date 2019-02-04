<template>
  <div class="mt-16 mb-20 max-w-lg px-8 py-4 md:rounded-lg shadow-lg mx-auto bg-blue-lightest text-black">
    <h2 class="text-xl mb-4 text-blue-dark">What is this?</h2>
    <p class="mb-8 leading-loose">
      Industrial steel case batteries that are used in electric forlift trucks have serial numbers that indicate their manufactured date. Each manufacturer uses their own sequence of numbers to indicate the date, and this can make it difficult to decipher. The battery date decoder attempts to match your serial number to known sequences and provide you with a manufactured date.
    </p>

    <h2 class="text-xl mb-4 text-blue-dark">How does it work?</h2>
    <p class="mb-8 leading-normal">Below are the tecniques used for deciphering each manufacturer's serial number:</p>
  

    <div>
      <h3 class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2">BBI - Battery Builders</h3>
      <div class="md:flex md:items-start">
        <div class="bg-blue rounded inline-block text-white px-6 py-6 text-center md:mr-8 shadow-md w-48 mb-4">
          <span class="text-xs">Example Serial</span> <br>
          <span class="text-xl">J4974</span>
        </div>
        <div>
          <p class="mb-4 leading-normal">
            The first digit is the year code for the battery and the rest is the serial number. Below is the year mapping:
          </p>
        </div>
      </div>
      <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
        <h3 class="text-lg mb-2">Months:</h3>
        <table>
          <tr>
            <td class="pr-2 pb-2">V</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2002</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">W</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2003</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">X</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2004</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">Y</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2005</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">Z</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2006</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">D</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2007</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">E</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2008</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">F</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2009</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">G</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2010</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">H</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2011</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">J</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2012</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">K</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2013</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">M</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2014</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">N</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2015</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">P</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2016</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">R</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2017</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">T</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2018</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">U</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2019</td>
          </tr>
        </table>
      </div>
    </div>


    <div>
      <h3 class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2">Bulldog</h3>
      <div class="md:flex md:items-start">
        <div class="bg-blue rounded inline-block text-white px-6 py-6 text-center md:mr-8 shadow-md w-48 mb-4">
          <span class="text-xs">Example Serial</span> <br>
          <span class="text-xl">2957GT</span>
        </div>
        <div>
          <p class="mb-4 leading-normal">
            The leading character can be discarded as it does not seem to indicate anything useful. The next one or two numeric digits indicate the month code and the following two numeric digits indicate the year code. The year is 4 less than the year code, so in this example, the year would be 2008. The following alpha character indicates the manufacturing facility. Numbers following this alpha character are the serial number. Below is the month mapping and facility mapping:
          </p>
        </div>
      </div>
      <div class="md:flex md:items-start">
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6 md:mr-4">
          <h3 class="text-lg mb-2">Months:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">4</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">January</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">5</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">February</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">6</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">March</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">7</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">April</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">8</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">May</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">9</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">June</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">10</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">July</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">11</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">August</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">12</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">September</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">13</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">October</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">14</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">November</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">15</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">December</td>
            </tr>
          </table>
        </div>
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
          <h3 class="text-lg mb-2">Locations:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">T</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Terrell, Tx</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">W</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Wabash, IN</td>
            </tr>
          </table>
        </div>
      </div>
    </div>


    <div>
      <h3 class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2">Crown</h3>
      <div class="md:flex md:items-start">
        <div class="bg-blue rounded inline-block text-white px-6 py-6 text-center md:mr-8 shadow-md w-48 mb-4">
          <span class="text-xs">Example Serial</span> <br>
          <span class="text-xl">15972F10</span>
        </div>
        <div>
          <p class="mb-4 leading-normal">
            The first 5 digits are the serial number for the battery. The last three digits represent the date code. The first digit of the date code is a month code and the last one or two digits represent the year. Below is the month mapping:
          </p>
        </div>
      </div>
      <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
        <h3 class="text-lg mb-2">Months:</h3>
        <table>
          <tr>
            <td class="pr-2 pb-2">A</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">January</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">B</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">February</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">C</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">March</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">D</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">April</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">E</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">May</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">F</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">June</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">E</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">July</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">F</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">August</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">G</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">September</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">H</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">October</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">I</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">November</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">J</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">December</td>
          </tr>
        </table>
      </div>
    </div>


    <div>
      <h3 class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2">Deka</h3>
      <div class="md:flex md:items-start">
        <div class="bg-blue rounded inline-block text-white px-6 py-6 text-center md:mr-8 shadow-md w-48 mb-4">
          <span class="text-xs">Example Serial</span> <br>
          <span class="text-xl">J4974</span>
        </div>
        <div>
          <p class="mb-4 leading-normal">
            The first digit is the year code for the battery and the rest is the serial number. Below is the year mapping:
          </p>
        </div>
      </div>
      <div class="md:flex md:items-start">
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6 md:mr-4">
          <h3 class="text-lg mb-2">Months:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">4</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">January</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">5</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">February</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">6</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">March</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">7</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">April</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">8</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">May</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">9</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">June</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">10</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">July</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">11</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">August</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">12</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">September</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">13</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">October</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">14</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">November</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">15</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">December</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">M</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2014</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">N</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2015</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">P</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2016</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">R</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2017</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">T</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2018</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">U</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2019</td>
            </tr>
          </table>
        </div>
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
          <h3 class="text-lg mb-2">Locations:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">T</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Terrell, Tx</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">W</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Wabash, IN</td>
            </tr>
          </table>
        </div>
      </div>
    </div>    







  </div>
</template>
