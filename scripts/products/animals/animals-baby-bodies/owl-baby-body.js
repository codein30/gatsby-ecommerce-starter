const categories = require('../../../../src/constants/categories')
const colors = require('../../../../src/constants/colors')
const sizes = require('../../../../src/constants/sizes')

const skus = [
  {
    color: colors.WHITE,
    image: 'https://i.imgur.com/B8JtwyA.png',
    sizes: [
      {
        size: sizes.BABIES.MONTHS_0_3.id,
        price: 1800,
      },
      {
        size: sizes.BABIES.MONTHS_3_6.id,
        price: 1800,
      },
      {
        size: sizes.BABIES.MONTHS_6_12.id,
        price: 1800,
      },
      {
        size: sizes.BABIES.MONTHS_12_18.id,
        price: 1800,
      },
    ],
  },
]

const defaultProduct = {
  name: 'Owl Baby Body',
  caption: 'caption',
  description: 'description',
  images: [skus[0].image],
  metadata: {
    categoryId: categories.BABIES.id,
    defaultColor: colors.WHITE.id,
    defaultSize: sizes.BABIES.MONTHS_6_12.id,
  },
}

const defaultSku = {
  attributes: {
    category: categories.BABIES.id,
    name: defaultProduct.name,
  },
}

const generateProductsAndSkus = require('../../generateProductsAndSkus')

module.exports = generateProductsAndSkus({ defaultProduct, defaultSku, skus })
