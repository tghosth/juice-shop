const process = require('process')
const config = require('config')
const colors = require('colors/safe')

const specialProducts = [
  { name: 'Christmas Challenge Product', key: 'useForChristmasSpecialChallenge' },
  { name: 'Product Tampering Challenge Product', key: 'urlForProductTamperingChallenge' },
  { name: 'Blueprint File Retrieval Product', key: 'fileForRetrieveBlueprintChallenge' }
]

const validateConfig = ({ products = config.get('products'), exitOnFailure = true } = {}) => {
  let success = true
  success = checkThatThereIsOnlyOneProductPerSpecial(products) && success
  success = checkThatProductArentUsedAsMultipleSpecialProducts(products) && success

  if (success) {
    console.log(`Configuration ${colors.bold(process.env.NODE_ENV || 'default')} validated (${colors.green('OK')})`)
  } else {
    console.error(`Configuration ${colors.bold(process.env.NODE_ENV || 'default')} validated (${colors.red('NOT OK')})`)
    if (exitOnFailure) {
      console.error()
      console.error(colors.red('Exiting due to configuration errors!'))
      console.error()
      process.exit(1)
    }
  }
  return success
}

const checkThatThereIsOnlyOneProductPerSpecial = (products) => {
  let success = true
  specialProducts.forEach(({ name, key }) => {
    const matchingProducts = products.filter((product) => product[key])
    if (matchingProducts.length === 0) {
      console.error(`No product is configured as ${colors.italic(name)} but one is required (${colors.red('NOT OK')})`)
      success = false
    } else if (matchingProducts.length > 1) {
      console.error(`${matchingProducts.length} products are configured as ${colors.italic(name)} but only one is allowed (${colors.red('NOT OK')})`)
      success = false
    }
  })
  return success
}

const checkThatProductArentUsedAsMultipleSpecialProducts = (products) => {
  let success = true
  products.forEach((product) => {
    const appliedSpeicals = specialProducts.filter(({ key }) => product[key])
    if (appliedSpeicals.length > 1) {
      console.error(`Product ${colors.italic(product.name)} is used as ${appliedSpeicals.map(({ name }) => `${colors.italic(name)}`).join(' and ')} but can only be used for one challenge (${colors.red('NOT OK')})`)
      success = false
    }
  })
  return success
}

validateConfig.checkThatThereIsOnlyOneProductPerSpecial = checkThatThereIsOnlyOneProductPerSpecial
validateConfig.checkThatProductArentUsedAsMultipleSpecialProducts = checkThatProductArentUsedAsMultipleSpecialProducts

module.exports = validateConfig
