<template>
  <div
    class="mt-16 mb-32 max-w-lg px-8 py-4 md:rounded-lg shadow-lg mx-auto bg-blue-lightest text-black"
  >
    <h2 class="text-xl mb-4 text-blue-dark mt-6">What is this?</h2>
    <p class="mb-8 leading-loose">
      Industrial steel case batteries that are used in electric forklift trucks
      have serial numbers that indicate their manufactured date. Each
      manufacturer uses their own sequence of numbers to indicate the date, and
      this can make it difficult to decipher. The battery date decoder attempts
      to match your serial number to known sequences and provide you with a
      manufactured date.
    </p>

    <h2 class="text-xl mb-4 text-blue-dark">How does it work?</h2>
    <p class="mb-8 leading-normal">
      Below are the tecniques used for deciphering each manufacturer's serial
      number:
    </p>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        BBI - Battery Builders
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">J4974</span>
          <span class="text-xs text-yellow">2012</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The first digit is the year code for the battery and the rest is the
            serial number. Below is the year mapping:
          </p>
        </div>
      </div>
      <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
        <h3 class="text-lg mb-2">Months:</h3>
        <table>
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
          <tr>
            <td class="pr-2 pb-2">V</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2020</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">W</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">2021</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Bulldog
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">S1312T323</span>
          <span class="text-xs text-yellow">Terrell, TX on October, 2008</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The leading letter can be discarded as it does not seem to indicate
            anything useful. The next one or two numeric digits indicate the
            month code and the following two numeric digits indicate the year
            code. The year is 4 less than the year code, so in this example, the
            year would be 2008. The following letter indicates the manufacturing
            facility. Numbers following this letter are the serial number. Below
            is the month mapping and facility mapping:
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

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Crown
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">15972F10</span>
          <span class="text-xs text-yellow">June, 2010</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The first 5 digits are the serial number for the battery. The last
            three digits represent the date code. The first digit of the date
            code is a month code and the last one or two digits represent the
            year. Below is the month mapping:
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
            <td class="pr-2 pb-2">G</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">July</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">H</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">August</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">I</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">September</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">J</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">October</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">K</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">November</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">L</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">December</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Deka
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">2957GT</span>
          <span class="text-xs text-yellow">July, 2010</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The two letters at the end of the serial number are the date code.
            The first letter is the month code and the second letter is the year
            code. Below are the month &amp; year mappings:
          </p>
        </div>
      </div>
      <div class="md:flex md:items-start">
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6 md:mr-4">
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
              <td class="pr-2 pb-2">G</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">July</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">H</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">August</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">I</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">September</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">J</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">October</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">K</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">November</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">L</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">December</td>
            </tr>
          </table>
        </div>
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
          <h3 class="text-lg mb-2">Years:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">L</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2002</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">M</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2003</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">N</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2004</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">O</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2005</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">P</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2006</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">Q</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2007</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">R</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2008</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">S</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2009</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">T</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2010</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">A</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2011</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">B</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2012</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">C</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2013</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">D</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2014</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">E</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2015</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">F</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2016</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">G</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2017</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">H</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2018</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">I</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2019</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">J</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2020</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">K</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2021</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Douglas
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">090013402</span>
          <span class="text-xs text-yellow">2009</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The first two digits indicate the year code. If your douglas battery
            has any letters, it was manufactured after Douglas was purchased by
            Enersys. Please see the
            <a
              href="#enersys"
              class="text-blue-dark no-underline hover:underline"
              >Enersys section</a
            >
            for more information on those numbers.
          </p>
        </div>
      </div>
    </div>

    <div id="enersys" class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Enersys
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">RMA744065</span>
          <span class="text-xs text-yellow">Richmond, KY on January 2014</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The first three letters at the beginning of the serial number are
            your date code. The first letter indicates the location where it was
            manufactured. The second letter is the year code. The third letter
            is the month code. All of the mappings are below:
          </p>
        </div>
      </div>
      <div class="md:flex md:items-start">
        <div class="md:w-1/2 mb-6 md:mr-4">
          <div class="bg-white px-6 py-4 rounded shadow">
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
                <td class="pr-2 pb-2">G</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">July</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">H</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">August</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">I</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">September</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">J</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">October</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">K</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">November</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">L</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">December</td>
              </tr>
            </table>
          </div>

          <div class="bg-white px-6 py-4 rounded shadow mt-4">
            <h3 class="text-lg mb-2">Locations:</h3>
            <table>
              <tr>
                <td class="pr-2 pb-2">R</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">Richmond, KY</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">M</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">Monterrey, MX</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
          <h3 class="text-lg mb-2">Years:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">A</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2002</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">B</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2003</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">C</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2004</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">D</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2005</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">E</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2006</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">F</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2007</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">G</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2008</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">H</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2009</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">I</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2010</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">J</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2011</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">K</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2012</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">L</td>
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
              <td class="pr-2 pb-2">S</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2018</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">T</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2019</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">U</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2020</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">W</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2021</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        General
      </h3>
      <p>
        Same as Enersys. See
        <a href="#enersys" class="text-blue-dark no-underline hover:underline"
          >Enersys section</a
        >
        for more about your date code.
      </p>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        GNB
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">KEM12345</span>
          <span class="text-xs text-yellow">Kankakee, May 2010</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The first three letters at the beginning of the serial number are
            your date code. The first letter indicates the location where it was
            manufactured. The second letter is the month code. The third letter
            is the year code. All of the mappings are below:
          </p>
        </div>
      </div>
      <div class="md:flex md:items-start">
        <div class="md:w-1/2 mb-6 md:mr-4">
          <div class="bg-white px-6 py-4 rounded shadow">
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
                <td class="pr-2 pb-2">G</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">July</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">H</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">August</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">J</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">September</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">K</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">October</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">L</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">November</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">M</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">December</td>
              </tr>
            </table>
          </div>

          <div class="bg-white px-6 py-4 rounded shadow mt-4">
            <h3 class="text-lg mb-2">Locations:</h3>
            <table>
              <tr>
                <td class="pr-2 pb-2">K</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">Kankakee</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">G</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">Kansas City</td>
              </tr>
              <tr>
                <td class="pr-2 pb-2">E</td>
                <td class="pr-2 pb-2">-></td>
                <td class="pr-2 pb-2">Fort Erie</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6">
          <h3 class="text-lg mb-2">Years:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">H</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2005</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">I</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2006</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">J</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2007</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">K</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2008</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">L</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2009</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">M</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2010</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">N</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2011</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">P</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2012</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">R</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2013</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">S</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2014</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">T</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2015</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">U</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2016</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">W</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2017</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">X</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2018</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">Y</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2019</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">Z</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2020</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">A</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">2021</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Hawker
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">PL104060001</span>
          <span class="text-xs text-yellow"
            >Powerline/Standard, April 2006</span
          >
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The serial number should begin with 1 or 2 letters; this is your
            model code. The next single digit number will be your equipment
            type. This is followed by 2 numeric digits that indicate the month.
            The next two numeric digits indicate the year. Below are the
            mappings for models and equipment types
          </p>
        </div>
      </div>
      <div class="md:flex md:items-start">
        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6 md:mr-4">
          <h3 class="text-lg mb-2">Models:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">TP</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Top Power</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">EP</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Energy Plus</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">W</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Water Less</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">WL</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Water Less</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">VP</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Varta Perfect</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">PL</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Powerline</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">EL</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Envirolink</td>
            </tr>
          </table>
        </div>

        <div class="bg-white px-6 py-4 rounded shadow md:w-1/2 mb-6 md:mr-4">
          <h3 class="text-lg mb-2">Types:</h3>
          <table>
            <tr>
              <td class="pr-2 pb-2">1</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Standard</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">2</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Rapid Charge</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">3</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Life Speed</td>
            </tr>
            <tr>
              <td class="pr-2 pb-2">4</td>
              <td class="pr-2 pb-2">-></td>
              <td class="pr-2 pb-2">Solar</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        HUP
      </h3>
      <p>
        Same as Enersys. See
        <a href="#enersys" class="text-blue-dark no-underline hover:underline"
          >Enersys section</a
        >
        for more about your date code.
      </p>
    </div>

    <div class="mb-10">
      <h3
        class="text-base mb-4 text-blue-dark border-blue-lighter pb-2 border-b-2"
      >
        Reaco
      </h3>
      <div class="md:flex md:items-start">
        <div
          class="bg-blue rounded block text-white px-6 py-6 text-center md:mr-8 shadow-md mb-4 flex-1"
        >
          <span class="text-xs">Example Serial</span>
          <span class="text-xl block mt-2 mb-2">R63933C15</span>
          <span class="text-xs text-yellow">March, 2015</span>
        </div>
        <div class="md:w-2/3">
          <p class="mb-4 leading-normal">
            The last three digits are your date code. The letter that begins the
            date code is your month code. The last two digits indicate the year.
            Below are the month mappings:
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
            <td class="pr-2 pb-2">G</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">July</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">H</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">August</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">I</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">September</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">J</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">October</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">K</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">November</td>
          </tr>
          <tr>
            <td class="pr-2 pb-2">L</td>
            <td class="pr-2 pb-2">-></td>
            <td class="pr-2 pb-2">December</td>
          </tr>
        </table>
      </div>
    </div>

    <h2 class="text-xl mb-4 text-blue-dark mt-6">Can I see the source code?</h2>
    <p class="mb-8 leading-loose">
      <a
        class="text-xl no-underline text-black hover:underline"
        href="https://github.com/nathanhipps/battery-date-decoder"
      >
        <img class="w-8" src="/img/icons/github.png" alt="Github Logo" />
        Sure can...take a look here!
      </a>
    </p>

    <h2 class="text-xl mb-4 text-blue-dark mt-6">
      My serial number isn't working. What is wrong?
    </h2>
    <p class="mb-8 leading-loose">
      You got me. Take a look at the way I am deciphering the code and let me
      know if I am doing something wrong. I will be happy to correct it so that
      it works better. If it is a brand new battery, I probably guessed wrong on
      this year's mapping. Let me know, and I will update it.
    </p>
  </div>
</template>
