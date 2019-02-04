import { assert } from 'chai'
import Decoder from '../../src/Decoder'

describe('Battery Date Decoder', () => {

  it ('formats the inputs', () => {
    let decoder = new Decoder('CrOWn', '15-97 2F?10')
    assert.equal('crown', decoder.manufacturer)
    assert.equal('15972f10', decoder.serial)
  })

  it ('can format a BBI serial number', () => {
    let decoder = new Decoder('bbi', 'J4974')
    assert.equal('Manufactured in 2012', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted BBI serial number', () => {
    let decoder = new Decoder('bbi', '44558855445')
    assert.equal(
      'The serial number you provided, "44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a Bulldog serial number', () => {
    let decoder = new Decoder('bulldog', 'S1312T323')
    assert.equal('Manufactured in Terrell, TX on October, 2008', decoder.getDateString())

    decoder = new Decoder('BULLDOG', '1312 T --323 ?')
    assert.equal('Manufactured in Terrell, TX on October, 2008', decoder.getDateString())

    decoder = new Decoder('Bulldog', 'S614W323')
    assert.equal('Manufactured in Wabash, IN on March, 2010', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Bulldog serial number', () => {
    let decoder = new Decoder('bulldog', '44558855445')
    assert.equal(
      'The serial number you provided, "44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a Crown serial number ending in two digits', () => {
    let decoder = new Decoder('crown', '15972F10')
    assert.equal('Manufactured on June, 2010', decoder.getDateString())
  })

  it ('can format a Crown serial number ending in one digits', () => {
    let decoder = new Decoder('crown', '45046A5')
    assert.equal('Manufactured on January, 2015', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Crown serial number', () => {
    let decoder = new Decoder('crown', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a Deka serial number', () => {
    let decoder = new Decoder('deka', '2957GT')
    assert.equal('Manufactured on July, 2010', decoder.getDateString())

    decoder = new Decoder('deka', '0074CG')
    assert.equal('Manufactured on March, 2017', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Deka serial number', () => {
    let decoder = new Decoder('deka', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format an Enersys serial number', () => {
    let decoder = new Decoder('enersys', 'RMA744065')
    assert.equal('Manufactured in Richmond, KY on January, 2014', decoder.getDateString())

    decoder = new Decoder('Enersys', 'MLJ44065')
    assert.equal('Manufactured in Monterrey, MX on October, 2013', decoder.getDateString())

    decoder = new Decoder('EneRsys', 'RLH8037233')
    assert.equal('Manufactured in Richmond, KY on August, 2013', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Enersys serial number', () => {
    let decoder = new Decoder('enersys', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format an Douglas serial number', () => {
    // Prior to Enersys purchase, Douglas used all numerical serial numbers
    let decoder = new Decoder('douglas', '090013402')
    assert.equal('Manufactured in 2009', decoder.getDateString())

    // After Enersys purchase, Douglas used same convention as Enersys
    decoder = new Decoder('douglas', 'MLJ44065')
    assert.equal('Manufactured in Monterrey, MX on October, 2013', decoder.getDateString())

    decoder = new Decoder('Douglas', 'RLH8037233')
    assert.equal('Manufactured in Richmond, KY on August, 2013', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Douglas serial number', () => {
    let decoder = new Decoder('douglas', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a General serial number', () => {
    let decoder = new Decoder('General', 'RMA744065')
    assert.equal('Manufactured in Richmond, KY on January, 2014', decoder.getDateString())

    decoder = new Decoder('GENERAL', 'MLJ44065')
    assert.equal('Manufactured in Monterrey, MX on October, 2013', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted General serial number', () => {
    let decoder = new Decoder('general', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a HUP serial number', () => {
    let decoder = new Decoder('HUP', 'RMA744065')
    assert.equal('Manufactured in Richmond, KY on January, 2014', decoder.getDateString())

    decoder = new Decoder('hup', 'MLJ44065')
    assert.equal('Manufactured in Monterrey, MX on October, 2013', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted HUP serial number', () => {
    let decoder = new Decoder('hup', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a GNB serial number', () => {
    let decoder = new Decoder('gnb', 'KEM12345')
    assert.equal('Manufactured in Kankakee on May, 2010', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted GNB serial number', () => {
    let decoder = new Decoder('gnb', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })

  it ('can format a Hawker serial number', () => {
    let decoder = new Decoder('hawker', 'PL104060001')
    assert.equal('Model: Powerline/Standard - Manufactured on April, 2006', decoder.getDateString())

    decoder = new Decoder('HaWkEr', 'EP104110646')
    assert.equal('Model: Energy Plus/Standard - Manufactured on April, 2011', decoder.getDateString())

    decoder = new Decoder('HAWKER', 'EP311102180')
    assert.equal('Model: Energy Plus/Lifespeed - Manufactured on November, 2010', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Hawker serial number', () => {
    let decoder = new Decoder('hawker', 'F44558855445')
    assert.equal(
      'The serial number you provided, "F44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })





  it ('can format a Reaco serial number', () => {
    let decoder = new Decoder('reaco', 'r63933c15')
    assert.equal('Manufactured on March, 2015', decoder.getDateString())

    decoder = new Decoder('reaco', 'r-63933 C15')
    assert.equal('Manufactured on March, 2015', decoder.getDateString())
  })

  it ('rejects an incorrectly formatted Reaco serial number', () => {
    let decoder = new Decoder('reaco', '44558855445')
    assert.equal(
      'The serial number you provided, "44558855445", cannot be decoded', 
      decoder.getDateString()
    )
  })
})