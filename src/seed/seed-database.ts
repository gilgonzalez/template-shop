import { initialData } from "./seed";
import prisma from "../lib/prisma";
import { omit } from 'radash'



async function main(){

  const { categories, products } = initialData

  // 1 . Borrar todos los datos de la base de datos
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany()
  ])


  // 2 . Insertar las categorías
  const categoriesData = categories.map(category => ({
    name:category
  }))
  await prisma.category.createMany({
    data: categoriesData
  })

  // 3. Identificar los ids de las categorias
  const categoriesDB = await prisma.category.findMany();
  const categoriesMapped = categoriesDB.reduce((object, category) => {
    object[category.name] = category.id
    return object
  }, {} as Record<string, string>)

  // 4. Insertar los productos
  products.forEach(async(product) => {
    const {type, images, ...productData} = product

    const productDB = await prisma.product.create({
      data: {
        ...productData,
        categoryId: categoriesMapped[product.type],
      }
    })
    const imagesData = images.map((image)=>({
      productId: productDB.id,
      url: image
    }))
    await prisma.productImage.createMany({
      data: imagesData
    })
    
  })

  console.log('Seeding database executed')
}



// * Función autoinvocada para correr el seed de la base de datos
(()=>{
  if(process.env.NODE_ENV === 'production') return;




  main();
})();